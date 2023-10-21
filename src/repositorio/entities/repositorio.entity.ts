import { Proyecto } from 'src/proyecto/entities/proyecto.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Repositorios' })
export class Repositorio {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ name: 'ruta' })
  ruta: string;

  @Column({ name: 'descripcion' })
  descripcion: string;

  @Column({ name: 'publico' })
  publico: string;

  @Column({ name: 'idProyecto' })
  idProyecto: string;

  @ManyToOne(() => Proyecto)
  @JoinColumn({ name: 'idProyecto' })
  proyecto: Proyecto;
}
