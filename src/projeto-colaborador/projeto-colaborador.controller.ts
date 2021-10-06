import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { ProjetoColaboradorService } from './projeto-colaborador.service';

@Controller('projeto-colaborador')
export class ProjetoColaboradorController {

    constructor(private readonly projetoColaboradorService: ProjetoColaboradorService) {}

    @Get()
	@ApiBearerAuth()
	findAll(){
		return this.projetoColaboradorService.findAll()
	}

	@Get(':id')
	@ApiParam({name: 'id', required: true, description: 'Identificador numérico do vínculo entre projeto e colaborador na na base de dados', schema: { type: 'integer'}})
	@ApiBearerAuth()
	async findOne(@Param('id') id: number){
		const projetoColaborador = await this.projetoColaboradorService.findOne(id)

		if(!projetoColaborador){
			throw new NotFoundException(`Projeto ${id} não encontrado!`)
		}

		return projetoColaborador
	}

}
