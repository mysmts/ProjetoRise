import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
import { IsNotEmpty, Length } from "class-validator";

@Entity()
export class Testimonial {
  @PrimaryGeneratedColumn()
  id!: number; // Garantir que o id será atribuído automaticamente pelo TypeORM

  @Column()
  @IsNotEmpty({ message: "O nome é obrigatório" })
  @Length(3, 50, { message: "O nome deve ter entre 3 e 50 caracteres" })
  name!: string; // Garantir que o nome será atribuído automaticamente

  @Column()
  @IsNotEmpty({ message: "O conteúdo do depoimento é obrigatório" })
  @Length(10, 500, { message: "O depoimento deve ter entre 10 e 500 caracteres" })
  content!: string; // Garantir que o conteúdo será atribuído automaticamente

  @Column({ default: "" })
  avatar!: string; // Garantir que o avatar será atribuído automaticamente, com valor default vazio

  @CreateDateColumn()
  createdAt!: Date; // Garantir que o createdAt será atribuído automaticamente pelo TypeORM
}
  