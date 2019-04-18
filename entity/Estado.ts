import 'reflect-metadata'; 
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Estado {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    nome: string;
 
    @Column()
    sigla: string; 
}