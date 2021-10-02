BlockManage - BlockHub Project Manager
--------------------------------------

### Requisitos Funcionais

- [ ] Sistema deve possuir cadastro (CRUD) de usuários seguindo a estrutura:
	{
		id: (primary) integer,
		login: (required, unique) string,
		senha: (required) string
	}
- [ ] Sistema deve cadastrar usuário padrão, com login e senha admin
- [ ] Sistema deve possuir cadastro (CRUD) de projetos seguindo a estrutura:
	{
		id: (primary) integer,
		nome: (required) string,
		descricao: string,
		inicio: (required) date,
		fim: date,
		status: integer
	}
- [ ] Sistema deve validar cadastro de projetos para que data de inicio seja sempre menor que data de fim, caso exista data de fim
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
- [ ] Sistema deve validar cadastro de relacionamento entre colaboradores e projetos para que data de inicio seja sempre menor que data de fim
- [ ] Sistema deve validar cadastro de relacionamento entre colaboradores e projetos para evitar interseção dos períodos (datas) de dois projetos diferentes para o mesmo colaborador

### Requisitos Não-funcionais

- Nest.js
- SQLite
- Sequelize
- Swagger/OpenApi