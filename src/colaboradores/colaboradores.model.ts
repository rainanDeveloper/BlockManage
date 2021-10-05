import { AutoIncrement, Model, Column, PrimaryKey, Table } from "sequelize-typescript"

@Table({tableName:'colaborador'})
export class Colaborador extends Model {

	@PrimaryKey
	@AutoIncrement
	@Column
	id: number

	@Column
	nome: string
	
	@Column
	cargo: string
	
	@Column
    admissao: Date

	@Column({
		field: 'created_at'
	})
	createdAt: Date

	@Column({
		field: 'updated_at'
	})
	updatedAt: Date

}