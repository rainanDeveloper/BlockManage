import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post, BadRequestException, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { ColaboradoresService } from './colaboradores.service';
import { CreateColaboradorDto } from './dtos/CreateColaborador.dto';

@Controller('colaborador')
export class ColaboradoresController {
	constructor(private readonly colaboradorService: ColaboradoresService) {}

	@Get()
	@ApiBearerAuth()
	findAll(){
		return this.colaboradorService.findAll()
	}

	@Get(':id')
	@ApiParam({name: 'id', required: true, description: 'Identificador numérico do colaborador na base de dados', schema: { type: 'integer'}})
	@ApiBearerAuth()
	async findOne(@Param('id') id: number){
		const colaborador = await this.colaboradorService.findOne(id)

		if(!colaborador){
			throw new NotFoundException('Colaborador não encontrado!')
		}

		return colaborador
	}

	@Post()
	@ApiBody({
		type: CreateColaboradorDto,
		description: 'Estrutura JSON dos atributos do Colaborador'
	})
	@ApiBearerAuth()
	async create(@Body() colaboradorDto: CreateColaboradorDto){
		return this.colaboradorService.createColaborador(colaboradorDto)
	}

	@Put(':id')
	@ApiParam({name: 'id', required: true, description: 'Identificador numérico do colaborador na base de dados', schema: { type: 'integer'}})
	@ApiBody({
		type: CreateColaboradorDto,
		description: 'Estrutura JSON dos atributos do Colaborador'
	})
	@ApiBearerAuth()
	async update(@Param('id') id: number, @Body() colaboradorDto: CreateColaboradorDto){
		try{
			return this.colaboradorService.updateColaborador(id, colaboradorDto)
		}
		catch(error){
			return new BadRequestException(error.message)
		}
	}

	@Delete(':id')
	@ApiParam({name: 'id', required: true, description: 'Identificador numérico do colaborador na base de dados', schema: { type: 'integer'}})
	@ApiBearerAuth()
	async delete(@Param('id') id: number){
		try{
			return this.colaboradorService.deleteColaborador(id)
		}
		catch(error){
			return new BadRequestException(error.message)
		}
	}
}
