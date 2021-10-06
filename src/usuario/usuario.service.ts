import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './usuario.model';
import { CreateUsuarioDto } from './dtos/createUsuario.dto';
import { Hashing } from './../utils/bcryptHashPassword';
import { UpdateUsuarioDto } from './dtos/UpdateUsuario.dto';

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

	async createUsuario(usuarioDto: CreateUsuarioDto){

		usuarioDto.senha = await Hashing.hashPassword(usuarioDto.senha)

		return this.usuarioModel.create({
			login: usuarioDto.login,
			senha: usuarioDto.senha,
			status: 1
		})
	}

	async updateUsuario(id: number, usuarioDto: UpdateUsuarioDto){
		const usuario = await this.usuarioModel.findByPk(id)

		if(!usuario){
			throw new Error("Erro ao buscar usuário!")
		}

		usuario.login = usuarioDto.login
		usuario.senha = await Hashing.hashPassword(usuarioDto.senha)

		await usuario.save()

		return usuario
	}

	async deleteUsuario(id: number){
		const usuario = await this.usuarioModel.findByPk(id)

		if(!usuario){
			throw new Error("Erro ao buscar usuário!")
		}

		usuario.destroy()

		return {
			message: 'Usuário deletado com sucesso!'
		}
	}
}
