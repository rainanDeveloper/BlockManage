import { ProjetosModule } from './projetos/projetos.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { Usuario } from './usuario/usuario.model';
import { UsuarioService } from './usuario/usuario.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticateMiddleware } from './authentication/authenticate.middleware';
import { ProjetosController } from './projetos/projetos.controller';
import { ProjetosService } from './projetos/projetos.service';
import { Projeto } from './projetos/projetos.model';
import { ColaboradoresController } from './colaboradores/colaboradores.controller';
import { ColaboradoresService } from './colaboradores/colaboradores.service';
const config = require("./sequelize/app/config/config")


@Module({
  imports: [
        ProjetosModule, 
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
				Usuario,
				Projeto
			],
		}),
  ],
  controllers: [AppController, UsuarioController, AuthenticationController, ProjetosController, ColaboradoresController],
  providers: [AppService, UsuarioService, AuthenticationService, ProjetosService, ColaboradoresService]
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
		.apply(AuthenticateMiddleware)
		.forRoutes(UsuarioController);
	}	
}
