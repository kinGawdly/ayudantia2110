import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { ProyectoModule } from './proyecto/proyecto.module';
import { Proyecto } from './proyecto/entities/proyecto.entity';
import { RepositorioModule } from './repositorio/repositorio.module';
import { Repositorio } from './repositorio/entities/repositorio.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'clave123',
      database: 'AYUDANTIA',
      entities: [Usuario, Proyecto, Repositorio],
    }),
    ProyectoModule,
    RepositorioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
