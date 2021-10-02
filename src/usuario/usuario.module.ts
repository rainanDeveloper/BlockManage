/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './usuario.model';

@Module({
    imports: [
        SequelizeModule.forFeature([Usuario])
    ],
    exports: [
        SequelizeModule
    ]
})
export class UsuarioModule {}
