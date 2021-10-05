import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { ProjetosService } from './projetos.service';
import { CreateProjetoDto } from './dtos/CreateProjeto.dto';

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
			throw new NotFoundException(`Projeto ${id} não encontrado!`)
		}

		return projeto
	}

	@Post()
	@ApiBody({
		type: CreateProjetoDto,
		description: 'Estrutura JSON do Projeto'
	})
	@ApiBearerAuth()
	async create(@Body() projetoDto: CreateProjetoDto){
		return this.projetoService.create(projetoDto)
	}

}
