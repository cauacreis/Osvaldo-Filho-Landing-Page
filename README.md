# Osvaldo-Filho-Landing-Page

Landing page mobile-first, premium e de alta conversão para o **Laboratório Lourenço — Prótese Dental**, desenvolvida sob medida para captação de cirurgiões-dentistas e integração via triagem técnica interativa com direcionamento para o WhatsApp oficial.

---

## 🎯 Objetivo Principal

Captar cirurgiões-dentistas da região (especialistas em reabilitação oral, implantodontia, prótese e estética) e levá-los para o WhatsApp por meio de uma experiência interativa de triagem de caso em menos de 1 minuto. A ação principal unificada em toda a página é **“Enviar caso para análise”**.

---

## 💎 Identidade e Posicionamento

- **Promessa Central:** *“Transformamos o planejamento do dentista em próteses com foco em adaptação, estética e previsibilidade.”*
- **Posicionamento:** Parceiro especialista de técnico para cirurgião, eliminando a impessoalidade de linhas de montagem industriais.
- **Diferenciais:** Experiência técnica de bancada, comunicação direta sem intermediários, integração híbrida (Fluxo Digital STL/PLY + Moldagem Convencional), controle triplo de etapas e logística de coleta/entrega estruturada para dentistas da região.

---

## 📸 Provas Reais & Autoridade

- **+1.000** Próteses entregues com sucesso.
- **+30** Dentistas parceiros ativos.
- **Mural de Avaliações Reais:** Registros autênticos em prints do WhatsApp com elogios sobre agilidade na entrega, ausência de retrabalho e adaptação passiva.
- **Fotografias Reais:** Imagens de próteses produzidas na bancada do laboratório, incluindo spotlight para protocolo de carga imediata, coroa cerâmica unitária, reabilitação anterior múltipla e placas miorrelaxantes cristalinas.
- **Responsável Técnico:** Osvaldo Lourenço Filho.

---

## 🛠️ Totem Interativo de Triagem de Caso (Fluxo Completo de 9 Telas)

- **Tela Inicial:** *“Vamos entender seu caso em menos de 1 minuto.”* com resumo dos diferenciais de sigilo, agilidade e sem compromisso inicial.
- **Perguntas Clínicas (Uma por Tela com Barra de Progresso):**
  1. **(a) Parceria:** Verificação de status (Já é parceiro / Primeiro caso / Quero conhecer).
  2. **(b) Identificação:** Nome completo (Dr./Dra.), clínica/consultório, cidade/bairro e WhatsApp com DDD.
  3. **(c) Tipo de Trabalho:** Coroa / Unitário, Zircônia, Emax, Metalocerâmica, Cerômero/Resina, Prótese sobre Implante, Protocolo (Carga Imediata / Definitivo), Barra Metálica, Placa de Bruxismo, Placa de Clareamento ou Outro.
  4. **(d) Fluxo de Envio:** Digital (Arquivo STL/PLY), Convencional (Moldagem/Gesso), Preciso de orientação ou Quero falar antes.
  5. **(e) Etapa do Caso:** Planejamento inicial, Escaneamento/Moldagem pronta, Pronto para envio/coleta, Urgente ou Retrabalho.
  6. **(f) Expectativa de Prazo:** Prazo normal de produção, Tenho data agendada com paciente, Urgência clínica ou A alinhar.
  7. **(g) Observações Opcionais:** Atalhos rápidos para detalhes clínicos (substrato, cor, espaço) + campo aberto.
- **Tela Final de Resumo:**
  Síntese completa de todos os dados preenchidos + disparo de confetes comemorativos + botão de alta visibilidade **“Falar com o Laboratório no WhatsApp”** com a mensagem estritamente formatada:

```text
Olá, equipe do Laboratório Lourenço. Gostaria de analisar um caso.
Nome: [nome]
Clínica: [clínica]
Cidade: [cidade]
Tipo de trabalho: [tipo]
Fluxo: [fluxo]
Etapa atual: [etapa]
Prazo desejado: [prazo]
Observações: [observações]
Posso enviar fotos, arquivos ou mais detalhes do caso por aqui?
```

---

## 🚀 Tecnologias Utilizadas

- **React 18** + **TypeScript**
- **Vite 6** (Build ultrarrápido e estático)
- **Tailwind CSS 3.4** (Paleta clínica personalizada: Clinical Teal, Deep Surgical Navy, Dental Gold)
- **Lucide Icons** (Ícones precisos e refinados)
- **Canvas Confetti** (Feedback cinético na conclusão da triagem)
- **Design System Double-Bezel** (Camadas usinadas com haptic depth para cartões e hero)

---

## ⚙️ Configuração do WhatsApp

Para atualizar o número do WhatsApp do laboratório, edite o arquivo `src/config.ts`:

```typescript
export const LAB_CONFIG = {
  name: 'Laboratório Lourenço',
  founder: 'Osvaldo Lourenço Filho',
  whatsappNumber: '5511999999999', // Insira o DDI + DDD + Número aqui
  whatsappDisplay: '(11) 99999-9999',
  location: 'São Paulo e Região Metropolitana',
  coletaHorario: 'Segunda a Sexta: 08h às 18h',
  // ...
}
```

---

## 💻 Como Executar Localmente

1. Instalar dependências:
   ```bash
   npm install
   ```
2. Iniciar servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Gerar build de produção:
   ```bash
   npm run build
   ```
4. Visualizar build:
   ```bash
   npm run preview
   ```

---

## ⚖️ Conformidade Ética Odontológica

Imagens reais de trabalhos protéticos apresentadas exclusivamente para fins técnico-científicos entre profissionais da odontologia (Cirurgiões-Dentistas e Técnicos em Prótese Dental), em estrito cumprimento às normas do Conselho Federal de Odontologia (CFO).
