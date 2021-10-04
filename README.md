BlockManage - BlockHub Project Manager
--------------------------------------

### Descrição

Este é o projeto do Desafio tech da BlockHub para backend: uma api rest desenvolvida com NestJs

### Requisitos

A aplicação para ser instalada precisa das seguintes aplicações

- node.js
- npm/yarn

### Instalação

É necessário inicialmente instalar as dependências do node na aplicação, para isso, basta rodar:

```bash
$ npm install
```

Com isso feito, é preciso instalar a base de dados da aplicação, e isso pode ser feito com ao rodar:

```bash
$ npm run db:migrate
```

Caso não tenha o arquivo de ambiente `.env` dentro da pasta raiz, a aplicação será iniciada com os valores padrão da base de dados, criando um arquivo SQLite `database/database.sqlite` dentro da pasta raiz. É possível configurar a aplicação atraves do arquivo `.env`, como é explicado na seção _Configurando a aplicação_.

Caso tenha configurado uma base que não seja SQLite (MySQL, PostgreSQL, etc) é necessário rodar o script `db:create` antes de rodar o `db:migrate` para que a base de dados configurada seja criada antes de tentar criar as tabelas e inserir informações.

### Rodando a aplicação

```bash
# Ambiente de desenvolvimento
$ npm run start

# Ambiente de desenvolvimento em watch mode
$ npm run start:dev

# Ambiente de produção
$ npm run start:prod
```
Após iniciar aplicação ela iniciará na porta `3000`. É possível acessar a documentação do Swagger na rota `/swagger` da aplicação.