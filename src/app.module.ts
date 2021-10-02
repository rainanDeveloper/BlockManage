import { UsuarioModule } from './usuario/usuario.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { Usuario } from './usuario/usuario.model';
import { UsuarioService } from './usuario/usuario.service';
const config = require("./sequelize/app/config/config")


@Module({
  imports: [
        UsuarioModule, 
		SequelizeModule.forRoot({
			dialect: config.dialect,
			host: config.host,
			port: config.port,
			username: config.username,
			password: config.password,
			database: config.database,
			storage: config.storage,
			models: [
				Usuario
			],
		}),
  ],
  controllers: [AppController, UsuarioController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}
