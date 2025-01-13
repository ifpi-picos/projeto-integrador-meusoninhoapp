# ✨ **Documentação do Projeto: Meu Soninho** ✨

## 1. 🔍 Introdução
- **Nome do projeto**: Meu Soninho  
- **Empresa**: DreamSpace  
- **Descrição**: Um aplicativo voltado para melhorar a qualidade do sono dos usuários, fornecendo ferramentas para monitorar hábitos, criar rotinas e promover um sono saudável de forma lúdica com a mascote Nina.  
- **Objetivo**: Melhorar a qualidade de sono do usuário, através do monitoramento e acompanhament do sono diário e mensal.  
- **Público-alvo**: Pessoas com problema de sono ou interessadas em desenvolver e manter rotinas de sono mais saudáveis.  


## 2. 🌐 Estrutura do Projeto  

### **Arquitetura Front-end**:
```
src/
  assets/      # Imagens, ícones, etc.
  css/         # Estilização do site
  js/          # Scripts (JavaScript)
páginas html   # Arquivos HTML principais 
```

### **Telas principais**:
- **Tela de Login e Cadastro**: Registro e autenticação de usuários.  
- **Tela de Início**: Mostra a mascote e posição do usuário no ranking.
- **Tela de Alarme**: Definição de alarme.
- **Tela de Ranking**: Ranking de posições entre usuários.
- **Tela de To-Do List**: Registro de afazeres diários.
- **Tela de Estatísticas**: Exibe dados coletados e analisados de forma visual.
- **Tela de Configurações**: Ajusta preferências e opções de uso do site.

### **Paleta de cores do site**:
```css
:root {
  --cor-primaria: #5653f3;
  --cor-secundaria: #c8c7ff;
  --cor-contraste: #9594ef;
  --cor-background: #ffffff;
  --cor-textos: #2d2d85;
  --cor-textos-clara: #ffffff;
}
```
## 3. 📊 APIs e Serviços
- **APIs utilizadas**:
  - Charts.js: Renderização de gráficos dinâmicos para visualização de dados.  
- **Endpoints do Back-end**:
  - **/users**: Gerenciamento de usuários (CRUD)

### 4 **Arquitetura Back-end**:
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

### 5. **Tecnologias e Ferramentas Usadas**:
- **Front-end**:
  - HTML, CSS e JavaScript puro
- **Back-end**:
  - Hono (framework leve para APIs)
  - Bun (runtime rápido para JavaScript)
  - Prisma (ORM para manipulação de banco de dados)
  - PostgreSQL
- **Hospedagem**:
  - Render (deploy da API)
  - Neon (deploy do banco de dados)
- **Bibliotecas**:
  - Charts.js (para gráficos e visualizações de dados)

## 6. ⚙️ Configuração e Instalação  

### Pré-requisitos:
- **Editor**: Visual Studio Code  
- **Gerenciador de pacotes**: Bun  
- **Hospedagem**: Render e Neon para deploy de API e banco de dados 

### Passos:
```bash
# Clone o repositório Back-end
git clone https://github.com/antonioenzobz/MeuSoninhoApp-Backend.git

# Configure e faça o deploy da API e banco de dados nas plataformas escolhidas (exemplo: Render e Neon)

# Clone o repositório Front-end
git clone https://github.com/ifpi-picos/projeto-integrador-meusoninhoapp

# Instale as dependências (usando Bun)
bun install

# Inicie o servidor de desenvolvimento
bun run start
```

## 7. 🔍 Contribuição
- **Colaboradores**:
  - Claryanne Mel Moura  
  - Andréia Maria do Nascimento Vieira  
  - Antonio Enzo Bezerra  
  - Neemias Lucio Nobre  
  - Kauanny Maria Lopes  
  - Lincoln Gustavo Soares  

## 8. 🔗 Referências
- [Prisma](https://www.prisma.io/docs)  
- [Hono](https://hono.dev/docs/)  
- [Bun](https://bun.sh/docs)  
- [Charts.js](https://www.chartjs.org/docs/latest/)  