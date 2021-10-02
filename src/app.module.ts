import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
const config = require("./sequelize/app/config/config")


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: config.dialect,
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
	  storage: config.storage,
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
