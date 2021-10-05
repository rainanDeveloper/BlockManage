import { ColaboradoresModule } from './colaboradores/colaboradores.module';
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
import { ProjetoColaboradorController } from './projeto-colaborador/projeto-colaborador.controller';
import { ProjetoColaboradorService } from './projeto-colaborador/projeto-colaborador.service';
import { Colaborador } from './colaboradores/colaboradores.model';
const config = require("./sequelize/app/config/config")


@Module({
  imports: [
        ColaboradoresModule, 
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
				Projeto,
				Colaborador
			],
		}),
  ],
  controllers: [AppController, UsuarioController, AuthenticationController, ProjetosController, ColaboradoresController, ProjetoColaboradorController],
  providers: [AppService, UsuarioService, AuthenticationService, ProjetosService, ColaboradoresService, ProjetoColaboradorService]
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
		.apply(AuthenticateMiddleware)
		.forRoutes(UsuarioController, ProjetosController, ColaboradoresController, ProjetoColaboradorController);
	}	
}
