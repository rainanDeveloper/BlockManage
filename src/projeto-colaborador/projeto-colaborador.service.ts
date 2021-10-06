import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProjetoColaborador } from './projeto-colaborador.model';
import { CreateProjetoColaboradorDto } from './dtos/CreateProjetoColaborador.dto';

@Injectable()
export class ProjetoColaboradorService {
	constructor(
		@InjectModel(ProjetoColaborador) private projetoColaboradorModel: typeof ProjetoColaborador
	){}

	
	async findAll(){
		return this.projetoColaboradorModel.findAll()
	}

	async findOne(id: number){
		return this.projetoColaboradorModel.findByPk(id)
	}

	async create(createProjetoColaboradorDto: CreateProjetoColaboradorDto){
		return this.projetoColaboradorModel.create({
			colaboradorId: createProjetoColaboradorDto.colaboradorId,
			projetoId: createProjetoColaboradorDto.projetoId,
			inicio: createProjetoColaboradorDto.inicio,
			fim: createProjetoColaboradorDto.fim
		})
	}
	
	async delete(id: number){
		const projetoColaborador = await this.projetoColaboradorModel.findByPk(id)

		if(!projetoColaborador){
			throw new Error("Erro ao buscar registro de vínculo entre colaborador e projeto com o id informado!")
		}

		projetoColaborador.destroy()

		return {
			message: 'Registro de vínculo do colaborador com projeto deletado com sucesso!'
		}
	}

}
