

# ✨ **Documentação do Projeto: Meu Soninho** ✨

## 1. 🔍 Introdução
- **Nome do projeto**: Meu Soninho  
- **Empresa**: DreamSpace  
- **Descrição**: Um aplicativo voltado para melhorar a qualidade do sono dos usuários, fornecendo ferramentas para monitorar hábitos, criar rotinas e promover um sono saudável de forma lúdica.  
- **Objetivo**: Promover hábitos de sono saudáveis através de uma solução acessível e intuitiva, auxiliando na qualidade de vida dos usuários.  
- **Público-alvo**: Pessoas interessadas em desenvolver e manter rotinas de sono mais saudáveis.  



## 2. 🌐 Estrutura do Projeto  

### **Arquitetura Front-end**:
```
src/
  assets/      # Imagens, ícones, etc.
  css/         # Estilização do site
  js/          # Scripts (JavaScript)
páginas html   # Arquivos HTML principais
```

### **Arquitetura Back-end**:
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

### **Tecnologias e Ferramentas Usadas**:
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

---

## 3. 📂 Funcionalidades
- **Monitoramento do sono**:
  - Permite registrar horários de sono e despertar, com gráficos detalhados.  
- **Relatórios visuais**:
  - Gráficos para análise da qualidade do sono semanal e mensal.  
- **Configuração de rotinas**:
  - Agendamento de alertas e lembretes para melhorar os hábitos de sono.  
- **Cadastro de usuários**:
  - Sistema para gerenciamento de perfis e preferências individuais.  

---

## 4. ⚙️ Configuração e Instalação  

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

---

## 5. 🎨 Design do Aplicativo  
### **Telas principais**:
- **Tela de Login e Cadastro**: Registro e autenticação de usuários.  
- **Tela Inicial**: ...

---

## 6. 📊 APIs e Serviços
- **APIs utilizadas**:
  - Charts.js: Renderização de gráficos dinâmicos para visualização de dados.  
- **Endpoints do Back-end**:
  - **/users**: Gerenciamento de usuários (CRUD).  

---

## 7. 🎨 Estilo e Temas  

### **Tema padrão**:
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

### **Fonte Utilizada**:
- Nexa Heavy

---

## 8. 🔍 Contribuição
- **Colaboradores**:
  - Claryanne Mel Moura  
  - Andreia Maria Vieira  
  - Antonio Enzo Bezerra  
  - Neemias Lucio Nobre  
  - Kauanny Maria Lopes  
  - Lincoln Gustavo Soares  

---

## 9. 🔗 Referências
- [Prisma](https://www.prisma.io/docs)  
- [Hono](https://hono.dev/docs/)  
- [Bun](https://bun.sh/docs)  
- [Charts.js](https://www.chartjs.org/docs/latest/)  

---
