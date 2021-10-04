import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Projeto } from './projetos.model';

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

    async createProjeto(){
        
    }
}
