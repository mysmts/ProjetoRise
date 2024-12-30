import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
import { IsNotEmpty, Length } from "class-validator";

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id!: number; // Garantir que o id será atribuído pelo TypeORM

  @Column()
  @IsNotEmpty({ message: "O título é obrigatório" })
  @Length(3, 50, { message: "O título deve ter entre 3 e 50 caracteres" })
  title!: string; // Garantir que o título será atribuído, mesmo que não tenha inicializador

  @Column()
  @IsNotEmpty({ message: "A descrição é obrigatória" })
  description!: string; // Garantir que a descrição será atribuída

  @Column()
  @IsNotEmpty({ message: "A imagem é obrigatória" })
  image!: string; // Garantir que a imagem será atribuída

  @CreateDateColumn()
  createdAt!: Date; // Garantir que o createdAt será atribuído automaticamente pelo TypeORM
}
