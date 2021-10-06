import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { ProjetosService } from './projetos.service';
import { CreateProjetoDto } from './dtos/CreateProjeto.dto';

@Controller('projeto')
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
		description: 'Estrutura JSON dos atributos do Projeto'
	})
	@ApiBearerAuth()
	async create(@Body() projetoDto: CreateProjetoDto){

		if(!projetoDto.inicio){
			throw new BadRequestException("Você deve especificar uma data de início para o projeto!")
		}

		if(projetoDto.fim && projetoDto.inicio>=projetoDto.fim){
			throw new BadRequestException("Data de início do projeto não pode ser maior que data de fim!")
		}

		return this.projetoService.create(projetoDto)
	}

	@Put(':id')
	@ApiParam({name: 'id', required: true, description: 'Identificador numérico do projeto na base de dados', schema: { type: 'integer'}})
	@ApiBody({
		type: CreateProjetoDto,
		description: 'Estrutura JSON dos atributos do Projeto'
	})
	@ApiBearerAuth()
	async update(@Param('id') id: number, @Body() projetoDto: CreateProjetoDto){
		try{

			return this.projetoService.update(id, projetoDto)
		}
		catch(error){
			throw new BadRequestException(error.message)
		}
	}

	@Delete(':id')
	@ApiParam({name: 'id', required: true, description: 'Identificador numérico do projeto na base de dados', schema: { type: 'integer'}})
	@ApiBearerAuth()
	async delete(@Param('id') id: number){
		try{
			return this.projetoService.deleteProjeto(id)
		}
		catch(error){
			throw new BadRequestException(error.message)
		}
	}
}
