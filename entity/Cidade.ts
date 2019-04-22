import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Estado} from "./Estado";
 
@Entity()
export class Cidade{
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    nome: string;

    @ManyToOne(type => Estado, idEstado => idEstado.id)
    @JoinColumn({name: "idEstado"})
    estado: Estado;
}