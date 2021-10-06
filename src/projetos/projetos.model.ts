import { AutoIncrement, Model, Column, PrimaryKey, Table } from "sequelize-typescript"

@Table({tableName:'projeto'})
export class Projeto extends Model {

	@PrimaryKey
	@AutoIncrement
	@Column
	id: number

	@Column
	nome: string
	
	@Column
	descricao: string
	
	@Column
	inicio: Date
	
	@Column
	fim: Date

	@Column
	status: number

	@Column({
		field: 'created_at'
	})
	createdAt: Date

	@Column({
		field: 'updated_at'
	})
	updatedAt: Date

}