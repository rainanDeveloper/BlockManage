import { Body, Controller, Delete, Get, NotFoundException, Param, Post, BadRequestException, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dtos/createUsuario.dto';
import { UpdateUsuarioDto } from './dtos/UpdateUsuario.dto';

@Controller('usuario')
export class UsuarioController {
	constructor(private readonly usuarioService: UsuarioService) {}

	@Get()
	@ApiBearerAuth()
	findAll(){
		return this.usuarioService.findAll()
	}

	@Get(':id')
	@ApiParam({name: 'id', required: true, description: 'Identificador numérico do usuário na base de dados', schema: { type: 'integer'}})
	@ApiBearerAuth()
	async findOne(@Param('id') id: number){
		const usuario = await this.usuarioService.findOne(id)

		if(!usuario){
			throw new NotFoundException('Usuário não encontrado!')
		}

		return usuario
	}

	@Post()
	@ApiBody({
		type: CreateUsuarioDto,
		description: 'Usuário da Api'
	})
	@ApiBearerAuth()
	async create(@Body() usuarioDto: CreateUsuarioDto){
		return this.usuarioService.createUsuario(usuarioDto)
	}

	@Put(':id')
	@ApiParam({name: 'id', required: true, description: 'Identificador numérico do usuário na base de dados', schema: { type: 'integer'}})
	@ApiBody({
		type: UpdateUsuarioDto,
		description: 'Usuário da Api'
	})
	@ApiBearerAuth()
	async update(@Param('id') id: number, @Body() usuarioDto: UpdateUsuarioDto){
		try{
			return this.usuarioService.updateUsuario(id, usuarioDto)
		}
		catch(error){
			throw new BadRequestException(error.message)
		}
	}

	@Delete(':id')
	@ApiParam({name: 'id', required: true, description: 'Identificador numérico do usuário na base de dados', schema: { type: 'integer'}})
	@ApiBearerAuth()
	async delete(@Param('id') id: number){
		try{
			return this.usuarioService.deleteUsuario(id)
		}
		catch(error){
			throw new BadRequestException(error.message)
		}
	}
	
}
