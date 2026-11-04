# 🤖 Central de Agentes, Skills e Recursos — `.agents/`

> **Guia Gerenciador de Agentes, Skills e Fluxos de Trabalho do Projeto**

Esta pasta contém todo o ecossistema de inteligência e automação local do projeto **Dr. Jamil Alberto Mizrahi - Dentista em Ipanema - RJ** (desenvolvido em **Astro 5** com deploy no **Cloudflare Pages/Workers**).

---

## 📁 Estrutura da Pasta `.agents/`

```
.agents/
├── AGENTS.md               # 📄 Este guia gerenciador
├── agents/                 # 🤖 Perfis de Agentes Especialistas (20 agentes)
├── skills/                 # 🛠️ Habilidades e instrucionais modulares (41 skills)
└── workflows/              # 🔄 Fluxos de automação e tarefas encadeadas
```

---

## 🤖 Catálogo de Agentes Especialistas (`.agents/agents/`)

Os agentes abaixo desempenham papéis especializados durante o planejamento, desenvolvimento e manutenção do projeto:

| Agente | Arquivo | Especialidade Principal |
| :--- | :--- | :--- |
| **Frontend Specialist** | [`frontend-specialist.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/frontend-specialist.md) | UI/UX em Astro, componentes, acessibilidade e performance web. |
| **SEO Specialist** | [`seo-specialist.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/seo-specialist.md) | Meta tags, Schema markup (MedicalClinic/Dentist), sitemaps e Core Web Vitals. |
| **DevOps Engineer** | [`devops-engineer.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/devops-engineer.md) | Configuração de CI/CD, Cloudflare Pages/Workers e Wrangler. |
| **Orchestrator** | [`orchestrator.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/orchestrator.md) | Coordenação de tarefas complexas e roteamento entre especialistas. |
| **Backend Specialist** | [`backend-specialist.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/backend-specialist.md) | APIs, webhooks de leads n8n e serverless Cloudflare Workers. |
| **Database Architect** | [`database-architect.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/database-architect.md) | Modelagem de dados, Supabase e bancos D1/KV na Cloudflare. |
| **Debugger** | [`debugger.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/debugger.md) | Diagnóstico de erros em runtime, logs e rastreamento de bugs. |
| **Performance Optimizer**| [`performance-optimizer.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/performance-optimizer.md) | Otimização de bundle, Core Web Vitals, imagens e fontes. |
| **Project Planner** | [`project-planner.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/project-planner.md) | Criação de planos de implementação e escopo de tarefas. |
| **Documentation Writer** | [`documentation-writer.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/documentation-writer.md) | Geração de documentação, READMEs e guias de arquitetura. |
| **Security Auditor** | [`security-auditor.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/security-auditor.md) | Auditoria de segurança, cabeçalhos HTTP e validação de código. |
| **QA Automation** | [`qa-automation-engineer.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/qa-automation-engineer.md) | Testes end-to-end e automação de qualidade. |
| **Code Archaeologist** | [`code-archaeologist.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/code-archaeologist.md) | Análise de legado (código estático HTML em `assets/jamildentista`). |
| **Test Engineer** | [`test-engineer.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/test-engineer.md) | Testes estáticos, tipos e validação de build. |
| **Product Manager** | [`product-manager.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/product-manager.md) | Definição de requisitos e experiência do usuário da clínica. |
| **Product Owner** | [`product-owner.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/product-owner.md) | Priorização de backlog e entregas de valor. |
| **Explorer Agent** | [`explorer-agent.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/explorer-agent.md) | Mapeamento de estrutura de código e pesquisa acelerada. |
| **Penetration Tester** | [`penetration-tester.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/penetration-tester.md) | Análise de vulnerabilidades e segurança de formulários. |
| **Mobile Developer** | [`mobile-developer.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/mobile-developer.md) | Responsividade mobile, menus adaptativos e CTA WhatsApp. |
| **Game Developer** | [`game-developer.md`](file:///d:/AI/JAMIL_ASTRO/.agents/agents/game-developer.md) | Elementos interativos e canvas. |

---

## 🛠️ Catálogo de Skills (`.agents/skills/`)

Skills são diretórios contendo um arquivo `SKILL.md` que trazem instruções de alto nível para tarefas específicas.

### 🌟 Skill Principal do Projeto:
- **`app-astro`** ([`app-astro/SKILL.md`](file:///d:/AI/JAMIL_ASTRO/.agents/skills/app-astro/SKILL.md)):
  - Estruturação de componentes Astro, layouts, SEO avançado para clínica odontológica, integração com Cloudflare Pages, GitHub CI/CD e n8n.

### 📚 Principais Skills Complementares:
- **`frontend-design`**: Diretrizes de design system, cores, tipografia e micro-animações.
- **`seo-fundamentals`**: Regras de SEO on-page, E-E-A-T médico, dados estruturados (Schema MedicalClinic) e Core Web Vitals.
- **`geo-fundamentals`**: Otimização para motores de busca com IA (ChatGPT, Claude, Perplexity).
- **`deployment-procedures`**: Boas práticas de publicação contínua no Cloudflare Pages.
- **`tailwind-patterns`**: Padrões modernos CSS e container queries.
- **`clean-code`**: Código conciso, sem redundâncias ou comentários desnecessários.
- **`plan-writing`**: Elaboração de planos de ação estruturados com dependências e plano de verificação.
- **`systematic-debugging`**: Metodologia de 4 fases para investigação e solução de bugs.

---

## 🔄 Fluxos de Trabalho (`.agents/workflows/`)

A pasta `workflows/` armazena procedimentos padrão de execução para o projeto:
1. **`build-check`**: Validação de código e tipos antes de commits (`npm run build`).
2. **`cloudflare-deploy`**: Procedimento de deploy para Cloudflare Pages (`npx wrangler pages deploy ./dist`).
3. **`asset-migration`**: Fluxo de conversão de páginas HTML em `assets/jamildentista` para componentes Astro.

---

## 💡 Como Utilizar

- As skills são carregadas automaticamente pelo assistente Antigravity conforme o contexto da requisição (Progressive Disclosure).
- Para invocar regras ou procedimentos de uma skill específica durante uma tarefa, consulte o respectivo arquivo `SKILL.md`.
