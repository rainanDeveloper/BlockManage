import { AutoIncrement, Model, Column, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: 'usuario'})
export class Usuario extends Model {
	
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number

	@Column
	login: string
	
	@Column
	senha: string
	
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