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
$ npm run db:migrate && npm run db:seed
```

Caso não tenha o arquivo de ambiente `.env` dentro da pasta raiz, a aplicação será iniciada com os valores padrão da base de dados, criando um arquivo SQLite `database/database.sqlite` dentro da pasta raiz. É possível configurar a aplicação atraves do arquivo `.env`, como é explicado na seção [_Configurando a aplicação_](#configurando-a-aplicação).

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

### Configurando a aplicação

Caso exista o arquivo `.env` dentro da pasta raiz, ele será utilizado para configurar as variáveis de ambiente da aplicação. As variáveis de ambiente configuráveis pelo `.env` são:

- `DB_HOST`: Variável de configuração do endereço do servidor da base de dados da aplicação
- `DB_PORT`: Variável de configuração da porta em que roda o servidor da base de dados da aplicação
- `DB_USER`: Variável de configuração do usuário da base de dados da aplicação
- `DB_PASS`: Variável de configuração da senha da base de dados da aplicação
- `DB_BASE`: Variável de configuração do nome da base de dados que roda no servidor
- `DB_DIALECT`: Variável de dialeto do serviço de banco de dados da aplicação (MySQL, PostgreeSQL, SQLite, etc)
- `DB_STORAGE_FILE`: Variável do endereço do arquivo de banco de dados, caso o banco de dados usado seja SQLite
- `HASH_ROUNDS`: Variável que configura a quantidade de rounds o hash do bcript roda ao gerar hash da senha do usuário. Seu valor deve ser numérico
- `JWT_SECRET`: Variável de chave de assinatura do token JWT da aplicação
- `JWT_EXPIRATION`: Variável de perído de expiração do token JWT na aplicação

A alteração dos valores no arquivo implicam que é necessário reiniciar aplicação para que estes valores novos sejam usados pela mesma. Caso seja alterado valores referentes ao banco de dados é uma boa prática rodar o script de migração (`npm run db:migrate`). Caso seja a primeira vez rodando a aplicação, é bom rodar o script de inicialização da base de dados (`npm run db:init`, caso não seja SQLite, ou simplesmente `npm run db:migrate && npm run db:seed` caso a base já exista ou seja SQLite).

### Acessando aplicação

Após rodar as `seeds` da aplicação, será criado um usuário padrão na aplicação, cujo tanto o login quanto a senha são o valor padrão `admin`.

É necessário que um token JWT válido seja informado em todos os endpoints da aplicação, no header http `Authorization`, seguindo a estrutura `Bearer {token}` , exceto os seguintes endpoints:
- GET `/api`: Health Check da aplicação, que quando está rodando exibe apenas um valor padrão na resposta
- POST `/api/auth`: endpoint onde é possível enviar as credenciais do usuário e receber de vlta o token de autenticação
- GET `/api/auth/{token}`: enpoint onde é possível checar a validade de determinado token

Testando a aplicação pela interface do swagger(`/swagger`), é possível cadastrar o token de autorização no botão `Authorize`, que enviará o token seguindo o padrão descrito acima.