# ✨ **Documentação do Projeto: Meu Soninho** ✨

## 1. 🔍 Introdução
- **Nome do projeto**: Meu Soninho
- **Empresa**: DreamSpace
- **Descrição**: Um aplicativo voltado para melhorar a qualidade do sono dos usuários, fornecendo ferramentas para monitorar hábitos, criar rotinas e regulamento do sono de forma lúdica.
- **Objetivo**: Promover hábitos de sono saudáveis por meio de tecnologia acessível e intuitiva.
- **Público-alvo**: Usuários interessados em melhorar sua qualidade de vida por meio de um sono mais restaurador.

---

## 2. 🌐 Estrutura do Projeto
- **Arquitetura Front-end**:
  ```
  src/
    assets/      # Imagens, ícones, etc.
    css/         # Estilização do site
    js/          # Script (JavaScript)
  páginas html
  ```
- **Arquitetura Back-end**:
  ```
  node_modules/  # Dependências do projeto
  prisma/
    migrations/  # Controle de versões do banco de dados
    schema.prisma  # Definição do esquema do banco de dados
  src/
    config/      # Configurações gerais
    routes/      # Rotas da aplicação
    index.ts     # Ponto de entrada do servidor
  .env           # Variáveis de ambiente
  ```
- **Tecnologias e ferramentas usadas**:
  - Front-end:
    - HTML, CSS, JavaScript puro
  - Back-end:
    - Hono (framework leve para criação de APIs)
    - Bun (runtime rápido para JavaScript no back-end)
    - Prisma (ORM para manipulação de banco de dados)
  - Hospedagem:
    - Render (plataforma para deploy)

---

## 3. 📂 Funcionalidades
- **Monitoramento do sono**:
  - Permite registrar horários de sono e despertar, com gráficos de análise.
...

---

## 4. ⚙️ Configuração e Instalação

### Pré-requisitos
  - Visual Studio Code
  - Bun
  - Ferramenta de deploy (para banco de dados)

### Passos
```bash
# Clone o repositório Back-end
git clone https://github.com/antonioenzobz/MeuSoninhoApp-Backend.git

# Utilize alguma plataforma para dar deploy na aplicação
exemplo: Render

# Clone o repositório Front-end
git clone https://github.com/ifpi-picos/projeto-integrador-meusoninhoapp

# Instale as dependências (usando Bun)
bun install

# Inicie o servidor de desenvolvimento
bun run start
```

---

## 5. 🎨 Design do Aplicativo
- **Telas principais**:
  - Tela de Login e cadastro: ...
  - Tela inicial: ...

---

## 6. 📊 APIs e Serviços
- **APIs usadas**:
  - API de gráfico: Charts.js
- **Endpoints do backend**:
  - CRUD dos dados dos usuários.

---

## 7. 🎨 Estilo e Temas
- **Fonte**: Nexa Heavy
- **Tema padrão**:
  ```css
  :root {
  --cor-primaria: #5653f3;
  --cor-secundaria: #c8c7ff;
  --cor-contraste: #9594ef;
  --cor-background: white;
  --cor-textos: rgb(45, 45, 133);
  --cor-textos-clara: white;
  }
  ```

---

## 8. 🔍 Contribuição
- **Guia para colaboradores**:
  - Claryanne Mel Moura
  - Andreia Maria Vieira
  - Antonio Enzo Bezerra
  - Neemias Lucio Nobre
  - Kauanny Maria Lopes
  - Lincoln Gustavo Soaros

---

## 9. 🔗 Referências
- https://www.prisma.io/docs
- https://hono.dev/docs/
- https://bun.sh/docs
- https://www.chartjs.org/docs/latest/
























