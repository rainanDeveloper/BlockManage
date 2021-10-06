/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjetoColaborador } from './projeto-colaborador.model';

@Module({
    imports: [
		SequelizeModule.forFeature([ProjetoColaborador])
	],
	exports: [
		SequelizeModule
	]
})
export class ProjetoColaboradorModule {}
