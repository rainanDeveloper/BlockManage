/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';

@Module({
    imports: [
        SequelizeModule.forFeature([Usuario])
    ],
    exports: [
        SequelizeModule
    ]
})
export class UsuarioModule {}
