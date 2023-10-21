import { Repositorio } from 'src/repositorio/entities/repositorio.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Usuarios' })
export class Usuario {
  @PrimaryColumn({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'clave' })
  clave: string;

  @Column({ name: 'correo' })
  correo: string;

  @Column({ name: 'nombre_mostrar' })
  nombreMostrar: string;

  @ManyToMany(() => Repositorio)
  @JoinTable({ name: ' Permisos ' })
  repositorios: Repositorio[];
}
