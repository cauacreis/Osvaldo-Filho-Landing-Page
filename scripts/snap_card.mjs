import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const tempDir = path.join(process.env.TEMP || 'C:\\temp', 'chrome-card-snap-' + Date.now());
fs.mkdirSync(tempDir, { recursive: true });

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chromeProc = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9224',
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
      const res = await fetch('http://127.0.0.1:9224/json/version');
      if (res.ok) {
        const json = await res.json();
        return json.webSocketDebuggerUrl;
      }
    } catch (e) {
      await new Promise(r => setTimeout(r, 200));
    }
  }
  throw new Error('Chrome did not respond on 9224');
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

    const { targetId } = await cdp.send('Target.createTarget', { url: 'http://localhost:4173/' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });

    const sessionSend = (method, params = {}) => cdp.send(method, params, sessionId);

    await sessionSend('Page.enable');
    await sessionSend('Runtime.enable');
    await sessionSend('DOM.enable');

    await new Promise(r => setTimeout(r, 1500));

    const testCases = [
      { width: 1280, height: 900, name: 'desktop' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 375, height: 800, name: 'mobile' }
    ];

    for (const tc of testCases) {
      await sessionSend('Emulation.setDeviceMetricsOverride', {
        width: tc.width,
        height: tc.height,
        deviceScaleFactor: 1,
        mobile: tc.width < 1024
      });

      // Scroll card into view
      await sessionSend('Runtime.evaluate', {
        expression: `(() => {
          const card = document.querySelector('#avaliacoes .relative.overflow-hidden.rounded-3xl');
          if (card) {
            card.scrollIntoView({ block: 'center', inline: 'center' });
          }
        })()`
      });
      await new Promise(r => setTimeout(r, 500));

      for (let slide = 1; slide <= 2; slide++) {
        const boxRes = await sessionSend('Runtime.evaluate', {
          expression: `(() => {
            const card = document.querySelector('#avaliacoes .relative.overflow-hidden.rounded-3xl');
            if (!card) return null;
            const r = card.getBoundingClientRect();
            return {
              x: window.scrollX + r.x,
              y: window.scrollY + r.y,
              width: r.width,
              height: r.height
            };
          })()`,
          returnByValue: true
        });

        const box = boxRes.result.value;
        console.log(tc.name, 'slide', slide, box);
        if (box) {
          const ss = await sessionSend('Page.captureScreenshot', {
            format: 'png',
            captureBeyondViewport: true,
            clip: { x: box.x, y: box.y, width: box.width, height: box.height, scale: 1 }
          });
          fs.writeFileSync(`snap-${tc.name}-slide${slide}.png`, Buffer.from(ss.data, 'base64'));
        }

        if (slide === 1) {
          // click next
          await sessionSend('Runtime.evaluate', {
            expression: `document.querySelector('#avaliacoes button[aria-label="Próximo depoimento"]').click()`
          });
          await new Promise(r => setTimeout(r, 600));
        }
      }
    }

    await sessionSend('Target.closeTarget', { targetId });
    await cdp.close();
  } finally {
    chromeProc.kill('SIGKILL');
    try {
      fs.rmSync(tempDir, { recursive: true, force: true });
    } catch {}
  }
}

main().catch(console.error);
