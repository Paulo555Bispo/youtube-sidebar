# Copilot Instructions for YoutubeSidebar

## Visão Geral
Este projeto é uma aplicação Angular gerada com Angular CLI (v20.3.3). O código está organizado em módulos, componentes e páginas, seguindo a estrutura padrão do Angular, mas com algumas convenções específicas:

- **src/app/** contém o núcleo da aplicação, incluindo configuração (`app.config.ts`), rotas (`app.routes.ts`), estilos globais e componentes principais.
- **src/app/components/** abriga componentes reutilizáveis, como `custom-sidenav`.
- **src/app/pages/** contém páginas funcionais, cada uma em seu próprio diretório (`dashboard`, `comments`, etc.), com arquivos `.html`, `.scss` e `.ts` para separação clara de template, estilo e lógica.
- **src/assets/** para imagens e outros recursos estáticos.

## Fluxos de Desenvolvimento
- **Servidor de desenvolvimento:**
  - Use `ng serve` ou `npm start` para iniciar o servidor local (`http://localhost:4200`).
- **Build de produção:**
  - Execute `ng build` para gerar artefatos otimizados em `dist/`.
- **Testes unitários:**
  - Execute `ng test` para rodar testes com Karma.
- **Testes end-to-end:**
  - Execute `ng e2e` (framework não incluído por padrão).

## Convenções Específicas
- **Separação de arquivos:** Cada componente/página tem seus próprios arquivos `.html`, `.scss` e `.ts`.
- **Nomenclatura:** Use nomes descritivos para diretórios e arquivos, seguindo o padrão kebab-case para pastas e camelCase para variáveis/classes.
- **Configuração de rotas:** Centralizada em `app.routes.ts`.
- **Estilos globais:** Definidos em `styles.scss` e `app.scss`.

## Padrões de Integração
- **Angular CLI:** Utilize comandos CLI para scaffolding e manutenção (`ng generate`, `ng build`, etc.).
- **Comunicação entre componentes:** Use Input/Output decorators e serviços Angular para compartilhamento de dados.
- **Dependências externas:** Gerenciadas via `package.json`.

## Exemplos de Padrão
- Para criar um novo componente:
  ```bash
  ng generate component components/nome-do-componente
  ```
- Para adicionar uma nova página:
  ```bash
  ng generate component pages/nome-da-pagina
  ```

## Arquivos-Chave
- `src/app/app.ts`, `app.routes.ts`, `app.config.ts`: núcleo da configuração e inicialização.
- `src/app/components/` e `src/app/pages/`: exemplos claros de separação de responsabilidades.
- `README.md`: instruções de build, testes e scaffolding.

## Recomendações para Agentes
- Respeite a estrutura de diretórios e a separação de arquivos.
- Prefira comandos Angular CLI para geração e manutenção de código.
- Consulte arquivos de configuração e rotas para entender fluxos e integrações.
- Siga os exemplos existentes para manter consistência.

---

Se alguma seção estiver incompleta ou pouco clara, peça feedback ao usuário para ajustes.
