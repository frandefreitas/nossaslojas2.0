import "reflect-metadata"
import { createConnection ,getConnection,Connection} from "typeorm";
import { Estado } from "./entity/Estado";
import { Loja } from "./entity/Loja";
import { Cidade } from "./entity/Cidade";
import db from "./config/db.json";


const connection = createConnection({
    type: "mysql",
    host: db.host,
    port: 3306,
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
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
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
                    connection.close();
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
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
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
                    connection.close();
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
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
            let cidade = new Cidade();
            cidade.nome = body.nome;
            cidade.estado = body.idEstado;
            return connection.manager
                .save(cidade)
                .then(cidade => {
                    res.status(200).send(cidade);
                    connection.close();
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
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
            let estadoFull = connection.getRepository(Estado);
            let estadoColetada = await estadoFull.findOne(body.id); 
            estadoColetada.nome = body.nome;
            estadoColetada.sigla = body.sigla;       
            await estadoFull.save(estadoColetada);            
            res.status(200).send(estadoColetada);
            connection.close();
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
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
            let cidadeFull = connection.getRepository(Cidade);
            let cidadeColetada = await cidadeFull.findOne(body.id); 
            cidadeColetada.nome = body.nome;           
            await cidadeFull.save(cidadeColetada);            
            res.status(200).send(cidadeColetada);
            connection.close();
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
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then( async connection => {
            let lojaFull = connection.getRepository(Loja);
            let lojaColetada = await lojaFull.findOne(body.id);            
            lojaColetada.endereco = body.endereco;
            lojaColetada.telefone = body.telefone;
            lojaColetada.cnpj = body.cnpj;
            lojaColetada.horario = body.horario;
            lojaColetada.cidade = body.cidade;
            await lojaFull.save(lojaColetada);
            
            console.log("Loja atualizada com sucesso");
            res.status(200).send(lojaColetada);
            connection.close();
            
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
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
            
            let lojaFull = connection.getRepository(Loja);
            let lojaColetada = await lojaFull.findOne(id);
                await lojaFull.remove(lojaColetada);
                res.status(200).send("Loja excluida com sucesso: " + id);
            connection.close();

        }).catch(error => {
                let saidaErro = {
                    "errorCode":"400",
                    "msg": 'Error connect to database'
                }         
                res.status(400).send(saidaErro);
                console.log(error);
        })
    }



    deleteCidade(id:number, res:any):void {
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
            
            let cidadeFull = connection.getRepository(Cidade);
            let cidadeColetada = await cidadeFull.findOne(id);
                await cidadeFull.remove(cidadeColetada);
                res.status(200).send("Loja excluida com sucesso: " + id);
            connection.close();

        }).catch(error => {
                let saidaErro = {
                    "errorCode":"400",
                    "msg": 'Error connect to database'
                }         
                res.status(400).send(saidaErro);
                console.log(error);
        })
    }



    deleteEstado(id:number, res:any):void {
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
            
            let estadoFull = connection.getRepository(Estado);
            let estadoColetada = await estadoFull.findOne(id);
                await estadoFull.remove(estadoColetada);
                res.status(200).send("Loja excluida com sucesso: " + id);
            connection.close();

        }).catch(error => {
                let saidaErro = {
                    "errorCode":"400",
                    "msg": 'Error connect to database'
                }         
                res.status(400).send(saidaErro);
                console.log(error);
        })
    }



    listaLojaId(id:number, res:any){
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
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
            connection.close();
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
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {


                let lojasAll = await connection.getRepository(Loja)
                        .createQueryBuilder("loja")
                        .getMany();
                
                if(lojasAll){
                    console.log(JSON.stringify(lojasAll));
                    res.send(lojasAll)
                } else{
                    res.send("Nenhuma loja encontrada")
                }
            connection.close();
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });

    }



    listaCidades(res:any) {
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {


                let cidadesAll = await connection.getRepository(Cidade)
                        .createQueryBuilder("cidade")
                        .getMany();
                
                if(cidadesAll){
                    console.log(JSON.stringify(cidadesAll));
                    res.send(cidadesAll)
                } else{
                    res.send("Nenhuma cidade encontrada")
                }
            connection.close();
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });

    }


    listaEstados(res:any) {
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {


                let estadosAll = await connection.getRepository(Estado)
                        .createQueryBuilder("estado")
                        .getMany();
                
                if(estadosAll){
                    console.log(JSON.stringify(estadosAll));
                    res.send(estadosAll)
                } else{
                    res.send("Nenhuma cidade encontrada")
                }
            connection.close();
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });

    }


    buscaPorIdEstado(id:any, res:any) {
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
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
                connection.close();
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
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
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
                connection.close();
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }


    buscaPorIdCidade(id:any, res:any) {
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
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
                connection.close();
        }).catch(error => {
            let errResp = {
                "errorCode":"400",
                "msg": 'Falha no banco'
            }         
            res.status(400).send(errResp);
            console.log(error);         
        });
    }


    buscaPorNomeCidade(estado: [], cidade: [], res:any) {
        createConnection({
            type: "mysql",
            host: db.host,
            port: 3306,
            username: db.user,
            password: db.password,
            database: db.database,
            entities: [
                Loja, Cidade, Estado
            ],
            synchronize: true,
        }).then(async connection => {
                let lojasEstado = await connection.createQueryBuilder(Loja, "loja")
                                            .innerJoin("loja.cidade", "cidade")
                                            .innerJoin("cidade.estado", "estado")
                                            .where("cidade.nome in (:cidade) or estado.nome in (:estado)", { cidade : cidade, estado : estado })
                                            .getMany();
                                        
                                            
                if(lojasEstado){
                    console.log(JSON.stringify(lojasEstado));
                    res.send(lojasEstado)
                } else{
                    res.send("Nenhuma loja encontrada")
                }
                connection.close();
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