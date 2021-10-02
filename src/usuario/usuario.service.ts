import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './usuario.model';
import { CreateUsuarioDto } from './dtos/createUsuario.dto';
import { Hashing } from './../utils/bcryptHashPassword';

@Injectable()
export class UsuarioService {
	constructor(
		@InjectModel(Usuario) private usuarioModel: typeof Usuario
	){}
	
	async findAll() {
		return this.usuarioModel.findAll()
	}

	async findOne(id: number) {
		return this.usuarioModel.findByPk(id)
	}

	async createUser(usuarioDto: CreateUsuarioDto){

		usuarioDto.senha = await Hashing.hashPassword(usuarioDto.senha)

		return this.usuarioModel.create({
			login: usuarioDto.login,
			senha: usuarioDto.senha,
			status: 1
		})
	}
}
