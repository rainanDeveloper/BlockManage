/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Projeto } from './projetos.model';

@Module({
	imports: [
		SequelizeModule.forFeature([Projeto])
	],
	exports: [
		SequelizeModule
	]
})
export class ProjetosModule {}
