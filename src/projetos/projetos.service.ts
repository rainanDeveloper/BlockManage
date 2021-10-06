import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Projeto } from './projetos.model';
import { CreateProjetoDto } from './dtos/CreateProjeto.dto';

@Injectable()
export class ProjetosService {
	constructor(
		@InjectModel(Projeto) private projetoModel: typeof Projeto
	){}

	async findAll(){
		return this.projetoModel.findAll()
	}

	async findOne(id: number){
		return this.projetoModel.findByPk(id)
	}

	async create(projetoDto: CreateProjetoDto){
		return this.projetoModel.create({
			nome: projetoDto.nome,
			descricao: projetoDto.descricao,
			inicio: projetoDto.inicio,
			fim: projetoDto.fim,
			status: projetoDto.status
		})
	}

	async update(id: number, projetoDto: CreateProjetoDto){
		const projeto = await this.projetoModel.findByPk(id)

		if(!projeto){
			throw new Error("Erro ao buscar projeto!")
		}

		projeto.nome = projetoDto.nome
		projeto.descricao = projetoDto.descricao
		projeto.status = projetoDto.status

		await projeto.save()

		return projeto
	}

	async deleteProjeto(id: number){
		const projeto = await this.projetoModel.findByPk(id)

		if(!projeto){
			throw new Error("Erro ao buscar projeto!")
		}

		projeto.destroy()

		return {
			message: 'Projeto deletado com sucesso!'
		}
	}
	
}
