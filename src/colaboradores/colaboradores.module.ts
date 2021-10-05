/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Colaborador } from './colaboradores.model';

@Module({
	imports: [
		SequelizeModule.forFeature([Colaborador])
	],
	exports: [
		SequelizeModule
	]
})
export class ColaboradoresModule {}
