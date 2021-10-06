/*
https://docs.nestjs.com/middleware#middleware
*/

import { BadRequestException, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Request, response, Response } from 'express';
import { Usuario } from 'src/usuario/usuario.model';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticateMiddleware implements NestMiddleware {
	constructor(@InjectModel(Usuario) private usuarioModel: typeof Usuario, private readonly authService: AuthenticationService) {}

	async use(request: Request, response: Response, next: Function) {
		const authBearer = request.headers.authorization

		if(!authBearer){
			throw new UnauthorizedException('Token não informado!')
		}

		const [, token] = authBearer['split'](' ')

		if(!token){
			throw new UnauthorizedException('Token não informado!')
		}

		try{
			const auth = await this.authService.findOne(token)

			const login = auth['login']

			if(!login){
				throw new UnauthorizedException('Token inválido!')
			}

			const usuario = this.usuarioModel.findOne({
				where: {
					login
				}
			})

			if(!usuario){
				throw new UnauthorizedException('Usuário informado não encontrado!')
			}

			next();
		}
		catch(error){
			throw new BadRequestException(error.message||'Erro na autenticação do token')
		}

	}
}
