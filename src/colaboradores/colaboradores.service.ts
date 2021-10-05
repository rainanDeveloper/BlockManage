import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Colaborador } from './colaboradores.model';
import { CreateColaboradorDto } from './dtos/CreateColaborador.dto';

@Injectable()
export class ColaboradoresService {
    constructor(
		@InjectModel(Colaborador) private colaboradorModel: typeof Colaborador
	){}

    async findAll(){
        return this.colaboradorModel.findAll()
    }

    async findOne(id: number){
        return this.colaboradorModel.findByPk(id)
    }

    async createColaborador(createColaborador: CreateColaboradorDto){
        return this.colaboradorModel.create({
            admissao: createColaborador.admissao,
            cargo: createColaborador.cargo,
            nome: createColaborador.nome,
            status: createColaborador.status
        })
    }

    async deleteColaborador(id: number){
        const colaborador = await this.colaboradorModel.findByPk(id)

        if(!colaborador){
            throw new Error("Erro ao buscar colaborador!")
        }

        colaborador.destroy()

        return {
            message: 'Colaborador deletado com sucesso!'
        }
    }

    
}
