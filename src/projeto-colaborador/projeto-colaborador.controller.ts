import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { ProjetoColaboradorService } from './projeto-colaborador.service';
import { CreateProjetoColaboradorDto } from './dtos/CreateProjetoColaborador.dto';
import { ProjetoColaborador } from './projeto-colaborador.model';
import { Op } from 'sequelize';

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

	@Post()
	@ApiBody({
		type: CreateProjetoColaboradorDto,
		description: 'Estrutura JSON dos atributos do relacionamento entre projeto e colabordor'
	})
	@ApiBearerAuth()
	async create(@Body() projetoColaboradorDto: CreateProjetoColaboradorDto){

		if(projetoColaboradorDto.inicio && projetoColaboradorDto.fim){
			if(projetoColaboradorDto.inicio>=projetoColaboradorDto.fim){
				throw new BadRequestException("Data de início não pode ser maior que data de fim!")
			}
			
			const totalProjsCrossingLimits = await ProjetoColaborador.count({
				where: {
					[Op.or]: [
						{
							inicio: {
								[Op.between]: [projetoColaboradorDto.inicio, projetoColaboradorDto.fim]
							}
						},
						{
							fim: {
								[Op.between]: [projetoColaboradorDto.inicio, projetoColaboradorDto.fim]
							}
						},
						{
							inicio: {
								[Op.lte]: projetoColaboradorDto.inicio
							},
							fim: {
								[Op.gte]: projetoColaboradorDto.fim
							}
						}
					],
					colaboradorId: projetoColaboradorDto.colaboradorId
				}
			})

			if(totalProjsCrossingLimits>0){
				throw new BadRequestException("Existem projetos vinculados à este colaborador nesse período!")
			}

			return this.projetoColaboradorService.create(projetoColaboradorDto)
		}
		else{
			return this.projetoColaboradorService.create(projetoColaboradorDto)
		}

	}

}
