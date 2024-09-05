# Task-box

Task Box é uma aplicação web desenvolvida para gerenciar tarefas, com uma arquitetura dividida em frontend e backend. O frontend é construído utilizando React, e o backend é feito com Node.js, Express.js e MySQL.

**Estrutura do Projeto**
O projeto segue a seguinte divisão de pastas:

``` 
task-box/
│
├── backend/  -> API RESTful construída com Node.js e Express.js
└── frontend/ -> Interface de usuário construída com React 
```
**Backend**
O backend é uma API construída com Node.js, Express.js e MySQL, com funcionalidades para criar, listar, atualizar e deletar usuários e tarefas. A escolha dessa estrutura foi baseada na sua escalabilidade, facilidade de manutenção e popularidade da stack para projetos de microserviços e REST APIs.

**Estrutura de Pastas do Backend**
``` 
backend/
│
├── config/        -> Arquivos de configuração (conexão com banco de dados)
├── controller/    -> Controladores responsáveis pela lógica de negócio
├── model/         -> Modelos do banco de dados
├── routes/        -> Definição das rotas da API
├── server.js      -> Arquivo principal para iniciar o servidor
├── app.js         -> Configuração e inicialização da aplicação
└── .env           -> Variáveis de ambiente (exemplo de variáveis fornecido abaixo)
```

**Executando o Backend**

  1. Instale as dependências:
     ```
     cd backend
     npm install
     ```
  2. Crie um arquivo .env na raiz do diretório backend com as seguintes variáveis:
     ```
      DB_HOST=127.0.0.1
      DB_USER=root
      DB_PASSWORD=sua_senha
      DB_NAME=teste_tecnico
      PORT=3000
     ```
  3. Execute a aplicação:
     ```
     npm start
     ```
A API estará disponível em *http://localhost:3000.*

Endpoints da API
  - POST /api/users: Cria um novo usuário.
  - GET /api/users/:id: Retorna um usuário pelo ID.
  - PUT /api/users/:id: Atualiza as informações de um usuário.
  - DELETE /api/users/:id: Deleta um usuário.
  - POST /api/tasks: Cria uma nova tarefa.
  - GET /api/tasks/:usuario_id: Retorna as tarefas de um usuário específico.
  - GET /api/tasks/allTasks: Retorna todas as tarefas.
  - PUT /api/tasks/:id: Atualiza uma tarefa.
  - DELETE /api/tasks/:id: Deleta uma tarefa.

**Frontend**

O frontend foi construído utilizando React para oferecer uma interface simples e eficiente para o usuário gerenciar suas tarefas. Ele consome a API REST do backend para realizar as operações CRUD (Create, Read, Update, Delete).

**Estrutura de Pastas do Frontend**

```
frontend/
│
├── src/        -> Código-fonte do React
│   ├── components/   -> Componentes reutilizáveis
│   ├── pages/        -> Páginas da aplicação
│   ├── services/     -> Serviços de API para conectar com o backend
│   └── App.js        -> Componente principal da aplicação
├── public/     -> Arquivos públicos (HTML principal, imagens, etc.)
└── package.json -> Dependências e scripts do frontend
```

**Executando o Frontend**
 1. Instale as dependências:
    ```
    cd frontend
    npm install
    ```
 2. Execute o frontend:
    ```
    npm start
    ```

**Ferramentas Utilizadas**
  - Node.js: Ambiente de execução JavaScript no servidor.
  - Express.js: Framework para construção de APIs com Node.js.
  - MySQL: Banco de dados relacional para armazenar as informações dos usuários e tarefas.
  - React: Biblioteca para construção de interfaces de usuário.
