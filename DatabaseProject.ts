import "reflect-metadata";
import { createConnection ,getConnection,Connection} from "typeorm";
import { Estado } from "./entity/Estado";
import { Loja } from "./entity/Loja";
import { Cidade } from "./entity/Cidade";
import db from "./config/db.json";


const connection = createConnection({
    type: "mysql",
    host: db.host,
    port: db.port,
    username: db.user,
    password: db.password,
    database: db.database,
    entities: [
        Loja, Cidade, Estado
    ],
    synchronize: true,
})




export class DatabaseProject{
    insertEstado(body:any, res:any):void {
        connection.then(async connection => {
            let estado = new Estado();
            estado.nome = body.nome;
            estado.sigla = body.sigla;
            
            return connection.manager
                .save(estado)
                .then(estado => {
                    res.status(200).send(estado);
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


    insertLoja(body:any, res:any):void {
        connection.then(async connection => {
            let loja = new Loja();
            loja.endereco = body.endereco;
            loja.telefone = body.telefone;
            loja.cnpj = body.cnpj;
            loja.horario = body.horario;
            loja.cidade = body.idCidade;
            
            
            return connection.manager
                .save(loja)
                .then(loja => {
                    res.status(200).send(loja);
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


    insertCidade(body:any, res:any):void {
        connection.then(async connection => {
            let cidade = new Cidade();
            cidade.nome = body.nome;
            cidade.estado = body.idEstado;
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
        connection.then(async connection => {
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
        connection.then(async connection => {
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
        connection.then(async connection => {
            return connection.manager
                .createQueryBuilder()
                .update(Loja)
                .set({ 
                    endereco: body.endereco,
                    telefone: body.telefone,
                    cnpj: body.cnpj,
                    horario: body.horario,
                    cidade: body.idCidade
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
        connection.then(async connection => {
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


    listaLojaId(id:number, res:any){
        connection.then(async connection => {
            // const lojasPorId = await connection
            //     .getRepository(Loja)
            //     .createQueryBuilder("loja")
            //     .where("id = :id", { id: id })
            //     .getOne();

            let lojas = connection.getRepository(Loja)
            let lojasPorId = await lojas.findOne(id);

            if(lojasPorId!= undefined){
                console.log(JSON.stringify(lojasPorId));
                res.send(lojasPorId);
            } else{
                res.send("Nenhuma loja encontrada")
            }
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }


    listaLojas(res:any) {
        connection.then(async connection => {


                let lojasAll = await connection.getRepository(Loja)
                        .createQueryBuilder("loja")
                        .getMany();
                
                if(lojasAll){
                    console.log(JSON.stringify(lojasAll));
                    res.send(lojasAll)
                } else{
                    res.send("Nenhuma loja encontrada")
                }
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }


    buscaPorEstado(id:any, res:any) {
        connection.then(async connection => {
                let lojasEstado = await connection.createQueryBuilder(Loja, "loja")
                                            .innerJoin("loja.cidade", "cidade")
                                            .innerJoin("cidade.estado", "estado")
                                            .where("estado.id = :id", { id: id })
                                            .getMany();
                                        
                                            
                if(lojasEstado){
                    console.log(JSON.stringify(lojasEstado));
                    res.send(lojasEstado)
                } else{
                    res.send("Nenhuma loja encontrada")
                }
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }




    buscaPorNomeEstado(nome:string, res:any) {
        connection.then(async connection => {
                let lojasEstado = await connection.createQueryBuilder(Loja, "loja")
                                            .innerJoin("loja.cidade", "cidade")
                                            .innerJoin("cidade.estado", "estado")
                                            .where("estado.nome = :nome", { nome: nome })
                                            .getMany();
                                        
                                            
                if(lojasEstado){
                    console.log(JSON.stringify(lojasEstado));
                    res.send(lojasEstado)
                } else{
                    res.send("Nenhuma loja encontrada")
                }
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }




    buscaPorCidade(id:any, res:any) {
        connection.then(async connection => {
                let lojasEstado = await connection.createQueryBuilder(Loja, "loja")
                                            .innerJoin("loja.cidade", "cidade")
                                            .where("cidade.id = :id", { id: id })
                                            .getMany();
                                        
                                            
                if(lojasEstado){
                    console.log(JSON.stringify(lojasEstado));
                    res.send(lojasEstado)
                } else{
                    res.send("Nenhuma loja encontrada")
                }
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