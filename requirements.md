BlockManage - BlockHub Project Manager
--------------------------------------

### Requisitos Funcionais

- [X] Sistema deve possuir cadastro (CRUD) de usuários seguindo a estrutura:
	{
		id: (primary) integer,
		login: (required, unique) string,
		senha: (required) string
	}
- [X] Sistema deve cadastrar usuário padrão, com login e senha admin
- [X] Sistema deve possuir cadastro (CRUD) de projetos seguindo a estrutura:
	{
		id: (primary) integer,
		nome: (required) string,
		descricao: string,
		inicio: (required) date,
		fim: date,
		status: integer
	}
- [ ] Sistema deve possuir cadastro (CRUD) de colaboradores seguindo a estrutura:
	{
		id: (primary) integer,
		nome: (required) string,
		cargo: (required) string,
		admissao: (required) date,
		status: integer
	}
- [ ] Sistema deve possuir relacionamento entre colaboradores e projetos, seguindo a estrutura:
	{
		id: (primary) integer,
		projetoId: integer,
		colaboradorId: integer,	
		inicio: date,
		fim: date,
	}
- [X] Usar autenticação jwt na aplicação (middleware de verificação de bearer token, e endpoint para autenticar)

### Requisitos Não-funcionais

- Nest.js
- SQLite
- Sequelize
- Swagger/OpenApi

### Regras de negócio

- [ ] Não deve ser possível cadastrar projetos com data de inicio maior ou igual à data de fim, caso exista data de fim
- [ ] Não deve ser possível cadastrar relacionamento entre colaboradores e projetos com data de inicio maior ou igual à data de fim
- [ ] Não deve ser possível cadastrar relacionamento entre colaboradores e projetos em que haja interseção dos períodos (datas) de dois projetos diferentes para o mesmo colaborador
