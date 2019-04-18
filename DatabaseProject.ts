import 'reflect-metadata';   //Diversos casos de uso (Composição / Injeção de Dependência, Asserções de Tipo de Tempo de Execução, Reflexão / Espelhamento, Teste) desejam a capacidade de adicionar metadados adicionais a uma classe de maneira consistente.
import {createConnection, getConnection} from "typeorm";
import { Estado } from "./entity/Estado";
import { Loja } from "./entity/Loja";
import { Cidade } from "./entity/Cidade";
import db from "./config/db.json";

export class DatabaseProject{


    insertEstado(body:any, res:any):void {
        createConnection({
            type: "mysql",
            host: db.host,
            port: db.port,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Estado, 
            ],
            synchronize: true,
        }).then(async connection => {
            let estado = new Estado();
            estado.nome = body.nome;
            estado.sigla = body.sigla;
            
            return connection.manager
                .save(estado)
                .then(estado => {
                    res.status(200).send(estado);
                })
        }).catch(error => console.log(error));

        
    }


    insertLoja(body:any, res:any):void {
        createConnection({
            type: "mysql",
            host: db.host,
            port: db.port,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja
            ],
            synchronize: true,
        }).then(async connection => {
            let loja = new Loja();
            loja.endereco = body.endereco;
            loja.telefone = body.telefone;
            loja.cnpj = body.cnpj;
            loja.horario = body.horario;
            loja.idCidade = body.idCidade;
            
            
            return connection.manager
                .save(loja)
                .then(loja => {
                    res.status(200).send(loja);
                })
        }).catch(error => console.log(error));
    }    


    insertCidade(body:any, res:any):void {
        createConnection({
            type: "mysql",
            host: db.host,
            port: db.port,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Cidade
            ],
            synchronize: true,
        }).then(async connection => {
            let cidade = new Cidade();
            cidade.nome = body.nome;
            cidade.idEstado = body.idEstado;
            return connection.manager
                .save(cidade)
                .then(cidade => {
                    res.status(200).send(cidade);
                })
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }



    updateEstado(body:any, res:any):void {
        createConnection({
            type: "mysql",
            host: db.host,
            port: db.port,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Estado
            ],
            synchronize: true,
        }).then(async connection => {
            return connection.manager
                .createQueryBuilder()
                .update(Estado)
                .set({ 
                    nome: body.nome, 
                    sigla: body.sigla
                })
                .where("id = :id", { id: body.id })
                .execute()
                .catch(err => console.log(err));
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }



    updateCidade(body:any, res:any):void {
        createConnection({
            type: "mysql",
            host: db.host,
            port: db.port,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Cidade
            ],
            synchronize: true,
        }).then(async connection => {
            return connection.manager
                .createQueryBuilder()
                .update(Cidade)
                .set({ 
                    nome: body.nome
                })
                .where("id = :id", { id: body.id })
                .execute()
                .catch(err => console.log(err));
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }



    updateLoja(body:any, res:any):void {
        createConnection({
            type: "mysql",
            host: db.host,
            port: db.port,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja
            ],
            synchronize: true,
        }).then(async connection => {
            return connection.manager
                .createQueryBuilder()
                .update(Loja)
                .set({ 
                    endereco: body.endereco,
                    telefone: body.telefone,
                    cnpj: body.cnpj,
                    horario: body.horario,
                    idCidade: body.idCidade
                })
                .where("id = :id", { id: body.id })
                .execute()
                .catch(err => console.log(err));
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }



    deleteLoja(id:number, res:any):void {
        createConnection({
            type: "mysql",
            host: db.host,
            port: db.port,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja
            ],
            synchronize: true,
        }).then(async connection => {
            return connection.manager
                .createQueryBuilder()
                .delete()
                .from(Loja)
                .where("id = :id", { id: id })
                .execute()
                .catch(err => console.log(err));
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }


    listaLojas(res:any):void {
        createConnection({
            type: "mysql",
            host: db.host,
            port: db.port,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja
            ],
            synchronize: true,
        }).then(async connection => {
            return connection.manager
                                .createQueryBuilder()
                                .select("*")
                                .from(Loja, "loja")
                                .execute()
                                .catch(err => console.log(err));
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }
}

module.exports = function(){
    return DatabaseProject;
}