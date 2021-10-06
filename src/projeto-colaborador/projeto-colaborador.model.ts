import { AutoIncrement, Model, Column, PrimaryKey, Table, ForeignKey, BelongsTo } from "sequelize-typescript"
import { Colaborador } from "src/colaboradores/colaboradores.model";
import { Projeto } from "src/projetos/projetos.model";

@Table({tableName:'projeto_colaborador'})
export class ProjetoColaborador extends Model {

	@PrimaryKey
	@AutoIncrement
	@Column
	id: number
    
    @BelongsTo(() => Projeto)
    projeto: Projeto;

    @ForeignKey(() => Projeto)
	@Column
	projetoId: number

    @BelongsTo(() => Colaborador)
    colaborador: Colaborador

    @ForeignKey(() => Colaborador)
	@Column
    colaboradorId: number
    
	@Column
    inicio: Date
    
	@Column
    fim: Date

    @Column({
		field: 'created_at'
	})
	createdAt: Date

	@Column({
		field: 'updated_at'
	})
	updatedAt: Date

}