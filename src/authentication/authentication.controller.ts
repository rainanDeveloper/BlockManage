import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { Usuario } from 'src/usuario/usuario.model';
import { CreateAuthDto } from './dto/CreateAuthDto';
import { AuthenticationService } from './authentication.service';

@Controller('auth')
export class AuthenticationController {
	constructor(@InjectModel(Usuario) private usuarioModel: typeof Usuario, private readonly authService: AuthenticationService) {}

	@Post()
	@ApiBody({
		type: CreateAuthDto,
		description: 'Credenciais do usuário para autenticar na aplicação'
	})
	async create(@Body() authDto: CreateAuthDto){
		const usuario = this.usuarioModel.findOne({
			where: {
				login: authDto.login
			}
		})

		if(!usuario){
			throw new NotFoundException("Usuário não encontrado!")
		}

		return this.authService.createAuth(authDto)
	}

	@Get(':token')
	@ApiParam({name: 'token', required: true, description: 'Token de autenticação', schema: { type: 'string'}})
	async findOne(@Param('token') token: string){
		return this.authService.findOne(token)
	}

}
