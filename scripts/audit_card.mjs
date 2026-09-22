import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const tempDir = path.join(process.env.TEMP || 'C:\\temp', 'chrome-audit-' + Date.now());
fs.mkdirSync(tempDir, { recursive: true });

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chromeProc = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9223',
  '--remote-allow-origins=*',
  '--user-data-dir=' + tempDir,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-background-networking',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9223/json/version');
      if (res.ok) {
        const json = await res.json();
        return json.webSocketDebuggerUrl;
      }
    } catch (e) {
      await new Promise(r => setTimeout(r, 200));
    }
  }
  throw new Error('Chrome did not respond on 9223');
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 1;
    this.callbacks = new Map();
  }

  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });
    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
  }

  send(method, params = {}, sessionId = undefined) {
    return new Promise((resolve, reject) => {
      const msgId = this.id++;
      this.callbacks.set(msgId, { resolve, reject });
      const payload = { id: msgId, method, params };
      if (sessionId) payload.sessionId = sessionId;
      this.ws.send(JSON.stringify(payload));
    });
  }

  async close() {
    if (this.ws) this.ws.close();
  }
}

async function main() {
  try {
    const wsUrl = await getWsUrl();
    const cdp = new CDPClient(wsUrl);
    await cdp.connect();

    const { targetId } = await cdp.send('Target.createTarget', { url: 'http://localhost:4173/#avaliacoes' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });

    const sessionSend = (method, params = {}) => cdp.send(method, params, sessionId);

    await sessionSend('Page.enable');
    await sessionSend('Runtime.enable');
    await sessionSend('DOM.enable');

    await sessionSend('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('#avaliacoes');
        if (el) el.scrollIntoView({ block: 'center' });
      })()`
    });
    await new Promise(r => setTimeout(r, 1000));

    const viewports = [
      { width: 1440, height: 900, name: 'desktop-1440' },
      { width: 1280, height: 800, name: 'desktop-1280' },
      { width: 1024, height: 768, name: 'desktop-1024' },
      { width: 900, height: 700, name: 'tablet-landscape-900' },
      { width: 768, height: 1024, name: 'tablet-portrait-768' },
      { width: 640, height: 800, name: 'mobile-large-640' },
      { width: 390, height: 844, name: 'mobile-390' },
      { width: 375, height: 667, name: 'mobile-375' },
      { width: 320, height: 568, name: 'mobile-320' }
    ];

    const results = [];

    for (const vp of viewports) {
      await sessionSend('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width < 1024
      });

      await sessionSend('Runtime.evaluate', {
        expression: `(() => {
          const el = document.querySelector('#avaliacoes');
          if (el) el.scrollIntoView({ block: 'center' });
        })()`
      });

      await new Promise(r => setTimeout(r, 400));

      // Measure slide 1
      const s1 = await sessionSend('Runtime.evaluate', {
        expression: `(() => {
          const card = document.querySelector('#avaliacoes .relative.overflow-hidden.rounded-3xl');
          if (!card) return null;
          const bq = card.querySelector('blockquote');
          const p = bq ? bq.querySelector('p') : null;
          const imgFrame = card.querySelector('.group\\\\/print');
          const rect = card.getBoundingClientRect();
          return {
            cardHeight: Math.round(rect.height),
            cardScrollHeight: card.scrollHeight,
            bqHeight: bq ? Math.round(bq.getBoundingClientRect().height) : 0,
            bqScrollHeight: bq ? bq.scrollHeight : 0,
            bqClientHeight: bq ? bq.clientHeight : 0,
            pScrollHeight: p ? p.scrollHeight : 0,
            hasBqScroll: bq ? (bq.scrollHeight > bq.clientHeight) : false,
            imgFrameHeight: imgFrame ? Math.round(imgFrame.getBoundingClientRect().height) : 0
          };
        })()`,
        returnByValue: true
      });

      // Capture screenshot slide 1
      const ss1 = await sessionSend('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`ss-${vp.name}-slide1.png`, Buffer.from(ss1.data, 'base64'));

      // Click next
      await sessionSend('Runtime.evaluate', {
        expression: `(() => {
          const nextBtn = document.querySelector('#avaliacoes button[aria-label="Próximo depoimento"]');
          if (nextBtn) nextBtn.click();
        })()`
      });

      // Wait for framer-motion transition
      await new Promise(r => setTimeout(r, 600));

      // Measure slide 2
      const s2 = await sessionSend('Runtime.evaluate', {
        expression: `(() => {
          const card = document.querySelector('#avaliacoes .relative.overflow-hidden.rounded-3xl');
          if (!card) return null;
          const bq = card.querySelector('blockquote');
          const p = bq ? bq.querySelector('p') : null;
          const imgFrame = card.querySelector('.group\\\\/print');
          const rect = card.getBoundingClientRect();
          return {
            cardHeight: Math.round(rect.height),
            cardScrollHeight: card.scrollHeight,
            bqHeight: bq ? Math.round(bq.getBoundingClientRect().height) : 0,
            bqScrollHeight: bq ? bq.scrollHeight : 0,
            bqClientHeight: bq ? bq.clientHeight : 0,
            pScrollHeight: p ? p.scrollHeight : 0,
            hasBqScroll: bq ? (bq.scrollHeight > bq.clientHeight) : false,
            imgFrameHeight: imgFrame ? Math.round(imgFrame.getBoundingClientRect().height) : 0
          };
        })()`,
        returnByValue: true
      });

      // Capture screenshot slide 2
      const ss2 = await sessionSend('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`ss-${vp.name}-slide2.png`, Buffer.from(ss2.data, 'base64'));

      // Check height during transition back
      const transitionHeights = [];
      await sessionSend('Runtime.evaluate', {
        expression: `(() => {
          const prevBtn = document.querySelector('#avaliacoes button[aria-label="Depoimento anterior"]');
          if (prevBtn) prevBtn.click();
        })()`
      });

      for (let f = 0; f < 15; f++) {
        await new Promise(r => setTimeout(r, 30));
        const sample = await sessionSend('Runtime.evaluate', {
          expression: `(() => {
            const card = document.querySelector('#avaliacoes .relative.overflow-hidden.rounded-3xl');
            return card ? Math.round(card.getBoundingClientRect().height) : 0;
          })()`,
          returnByValue: true
        });
        transitionHeights.push(sample.result.value);
      }
      await new Promise(r => setTimeout(r, 200));

      results.push({
        name: vp.name,
        width: vp.width,
        slide1: s1.result.value,
        slide2: s2.result.value,
        heightDiff: Math.abs((s1.result.value?.cardHeight || 0) - (s2.result.value?.cardHeight || 0)),
        minTransitionH: Math.min(...transitionHeights),
        maxTransitionH: Math.max(...transitionHeights)
      });
    }

    console.log(JSON.stringify(results, null, 2));

    await sessionSend('Target.closeTarget', { targetId });
    await cdp.close();
  } finally {
    chromeProc.kill('SIGKILL');
    try {
      fs.rmSync(tempDir, { recursive: true, force: true });
    } catch {}
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
