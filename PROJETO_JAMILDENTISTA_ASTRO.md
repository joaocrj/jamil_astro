# 🚀 Documentação Completa do Projeto: Dr. Jamil Alberto Mizrahi - Dentista em Ipanema (Astro 5)

> **Este arquivo serve como um resumo executivo e técnico do projeto para inicializar novas sessões de desenvolvimento ou agentes de IA.**

---

## 📌 1. Visão Geral do Projeto

O site **Dr. Jamil Alberto Mizrahi - Dentista em Ipanema - RJ** é um portal institucional e de captação de pacientes para consultório odontológico nobre em Ipanema, construído em **Astro 5**, migrado a partir de uma estrutura original em WordPress/Divi Builder (localizada na pasta `assets/jamildentista`).

- **Framework**: Astro 5 (Moderno, ultra-rápido, saída estática com hidratação sob demanda).
- **Adaptador / Deploy**: Cloudflare Pages / Workers (`@astrojs/cloudflare`).
- **Layout & Design System**: Réplica visual e estrutural 1:1 do layout original Divi Builder, incluindo seções parallax, tipografia Google Fonts, ícones ETmodules e FontAwesome, modal pop-up de contato (#popipa) e botão flutuante de WhatsApp (Joinchat).
- **Especialidades Odontológicas**:
  - Implantes Dentários com Cirurgia Guiada
  - Próteses Dentárias e Reabilitação Oral
  - Periodontia
  - Endodontia
  - Scanner Intraoral 3D e Odontologia Digital
- **Integração de Leads**: Formulário integrado a webhook **n8n** com suporte a rastreamento de parâmetros UTM e origem de tráfego (acesso direto, tráfego orgânico ou campanhas).

---

## 📁 2. Estrutura de Arquivos do Projeto

```
JAMIL_ASTRO/
├── .agents/                        # Ecossistema de IA (20 Agentes e 41 Skills)
│   └── AGENTS.md                   # Catálogo gerenciador do ecossistema .agents
├── assets/
│   └── jamildentista/              # Material bruto de origem (HTML, CSS, JS, Imagens, Fontes)
├── dist/                           # Saída compilada pronta para Cloudflare Pages
├── public/                         # Ativos estáticos servidos diretamente na raiz
│   ├── css/                        # CSS do Divi + CSS inline consolidado (divi-inline.css)
│   ├── fonts/                      # 138 arquivos de fontes locais e ícones Divi/ETmodules
│   ├── images/                     # 62 imagens, fotos do Dr. Jamil, banners e logos
│   └── js/                         # jQuery, scripts do Divi Builder e SmartSlider
├── src/
│   ├── components/                 # Componentes Astro encapsulados (14 componentes)
│   │   ├── Header.astro            # Topo e menus de navegação desktop e mobile
│   │   ├── HeroSlider.astro        # Banner principal e destaques em odontologia (#home)
│   │   ├── HighlightsSection.astro # Tecnologia digital a serviço da implantodontia
│   │   ├── TreatmentsSection.astro # Grade de tratamentos odontológicos desktop (#tratamentos)
│   │   ├── TreatmentsMobile.astro  # Apresentação de tratamentos para mobile (#tratamentosm)
│   │   ├── ScannerTechSection.astro# Demonstração do Scanner 3D intraoral
│   │   ├── BioSection.astro        # Apresentação Dr. Jamil Alberto Mizrahi (#info)
│   │   ├── LocationSection.astro   # Localização nobre em Ipanema (#localizacao e #localizacaom)
│   │   ├── ScheduleCTASection.astro# Chamada de agendamento de consulta
│   │   ├── ContactSection.astro    # Formulário de contato (#agende) + webhook n8n
│   │   ├── FooterBanner.astro      # Banners de rodapé e links de privacidade
│   │   ├── Footer.astro            # Rodapé principal (#main-footer) com ano dinâmico
│   │   ├── ContactModal.astro      # Modal pop-up acessível (#popipa) com WhatsApp
│   │   └── WhatsAppButton.astro    # Botão flutuante para contato direto
│   ├── layouts/
│   │   └── Layout.astro            # Layout base (Head, SEO Schema.org, CSS, Scripts, UTMs)
│   └── pages/
│       └── index.astro             # Página principal montando todas as seções
├── AGENTS.md                       # Atalho raiz para o guia de agentes
├── astro.config.mjs                # Configuração do Astro 5 com adaptador Cloudflare
├── package.json                    # Dependências do Node.js (jamildentista-astro)
├── tsconfig.json                   # Configurações TypeScript estritas e Alias `@/*`
└── wrangler.toml                   # Configuração de deploy no Cloudflare Pages
```

---

## 🛠️ 3. Implementações Realizadas

### 3.1. Reconstrução Fidedigna do Layout e Estilos
- **Consolidação do CSS Inline**: Todos os 13 blocos `<style>` originais (~150KB) foram extraídos e normalizados em `public/css/divi-inline.css` com caminhos absolutos `/fonts/` e `/images/`.
- **Folhas de Estilo Preservadas**: Inclusão de `styles.css`, `magnific_popup.css`, `animate.css`, `front.min.css`, `front-popuphidden.min.css`, `et-divi-dynamic-tb-1933-40.css`, `smartslider.min.css`, `et-core-unified-40.min.css` e `joinchat-btn.min.css`.
- **Classes Corporativas Divi no Body**: Aplicadas as classes nativas no `<body>` (`wp-theme-Divi`, `et-tb-has-template`, `et_pb_gutters3`, `et_smooth_scroll`, etc.).
- **Garantia de Visibilidade**: Overrides CSS adicionados para assegurar que seções e animações permaneçam visíveis sem depender do ciclo de vida PHP/WordPress.

### 3.2. Formulários e Captura de Leads (Webhook n8n)
- **Endpoint**: `https://webhook.joaocrj.com.br/webhook/joaocrj_form` (POST JSON).
- **Campos Capturados**:
  - `nome` (`seu-nome`)
  - `email` (`seu-email`)
  - `celular` (`seu-cel`)
  - `acceptance-10` (checkbox de consentimento)
  - `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
  - `origem` (Tráfego UTM, Orgânica ou Acesso Direto)
- **Feedback Assíncrono**: Submissão via `fetch` assíncrono com validação de campos obrigatórios, bloqueio momentâneo do botão durante envio e mensagens claras de sucesso ou suporte ao usuário.

### 3.3. Recursos Interativos e Modal Pop-up (#popipa)
- **Modal Pop-up Acessível**: Diálogo modal `#popipa` com fundo escurecido com blur, botão de fechamento acessível `×`, suporte à tecla `Escape`, clique no backdrop e direcionamento para o WhatsApp da clínica (`(21) 98663-1972`).
- **Botão Flutuante WhatsApp**: Ícone SVG oficial com badge de destaque e mensagem padrão: *"Olá Jamil Dentista, gostaria de informações sobre tratamento dentário"*.
- **Menu Mobile Adaptativo**: Alternância suave via JavaScript (abrir/fechar), com fechamento automático ao navegar para uma seção interna.

### 3.4. SEO Avançado e Schema.org para Saúde (E-E-A-T)
- **Schema.org**: Marcação estruturada completa para `MedicalClinic`, `Dentist`, `LocalBusiness`, `Organization`, `WebSite` e `WebPage`, especificando endereço em Ipanema, coordenadas geográficas, horários de atendimento, especialidades odontológicas e links sociais.
- **Open Graph & Twitter Cards**: Imagens institucionais absolutas configuradas para compartilhamento social de alto impacto.

---

## ⚡ 4. Comandos para Desenvolvimento e Deploy

| Ação | Comando | Descrição |
| :--- | :--- | :--- |
| **Acessar Localmente** | `npm run dev` | Inicia o servidor de desenvolvimento em `http://localhost:4321`. |
| **Testar Build** | `npm run build` | Executa verificação de tipos (`astro check`) e compila a pasta `dist/`. |
| **Deploy Cloudflare** | `npx wrangler pages deploy ./dist` | Publica o site diretamente no Cloudflare Pages. |
| **Verificar Tipos** | `npx astro check` | Executa a verificação estática de tipos do TypeScript e Astro. |

---

## 📝 5. Instruções para Iniciar um Novo Chat

Caso deseje abrir uma nova conversa com a IA, basta enviar o seguinte prompt inicial:

```text
Olá! Estou continuando o desenvolvimento do projeto Dr. Jamil Alberto Mizrahi (Dentista em Ipanema) em Astro 5.
Por favor, leia o arquivo PROJETO_JAMILDENTISTA_ASTRO.md na raiz do workspace para entender todo o contexto, estrutura de componentes, formulários e configurações do Cloudflare Pages.
```

