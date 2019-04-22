import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Cidade} from "./Cidade";
 
@Entity()
export class Loja{
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    endereco: string;
 
    @Column()
    telefone: string; 

    @Column()
    cnpj: string;
 
    @Column()
    horario: string; 

    @ManyToOne(type => Cidade, idCidade => idCidade.id)
    @JoinColumn({name: "idCidade"})
    cidade: Cidade;
}