import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { ProjetosService } from './projetos.service';

@Controller('projetos')
export class ProjetosController {
    constructor(private readonly projetoService: ProjetosService) {}

    @Get()
	@ApiBearerAuth()
	findAll(){
		return this.projetoService.findAll()
	}

	@Get(':id')
	@ApiParam({name: 'id', required: true, description: 'Identificador numérico do projeto na base de dados', schema: { type: 'integer'}})
	@ApiBearerAuth()
	async findOne(@Param('id') id: number){
		const projeto = await this.projetoService.findOne(id)

		if(!projeto){
			throw new NotFoundException('Usuário não encontrado!')
		}

		return projeto
	}

}
