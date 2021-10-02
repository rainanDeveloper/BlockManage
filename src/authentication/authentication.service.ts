import { Injectable, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from 'src/usuario/usuario.model';
import { JWT } from 'src/utils/JWT';
import { CreateAuthDto } from './dto/CreateAuthDto';

@Injectable()
export class AuthenticationService {
	constructor(
		@InjectModel(Usuario) private usuarioModel: typeof Usuario
	){}

	createAuth(authDto: CreateAuthDto){
		return {
			token: JWT.staticGenerateToken({login: authDto.login})
		}
	}

	async findOne(token: string){
		const login = JWT.staticTokenValidation(token)['login']

		if(!login) {
			throw new Error("Token inválido!")
		}

		const usuario = await this.usuarioModel.findOne({
			where: {
				login
			}
		})

		if(!usuario) {
			throw new Error("Erro ao buscar informações informadas no token!")
		}

		return {
			login: usuario.login,
			status: usuario.status
		}
	}
}
