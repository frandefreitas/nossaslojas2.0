"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Estado_1 = require("./entity/Estado");
const Loja_1 = require("./entity/Loja");
const Cidade_1 = require("./entity/Cidade");
const db_json_1 = __importDefault(require("./config/db.json"));
const connection = typeorm_1.createConnection({
    type: "mysql",
    host: db_json_1.default.host,
    port: 3306,
    username: db_json_1.default.user,
    password: db_json_1.default.password,
    database: db_json_1.default.database,
    entities: [
        Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
    ],
    synchronize: true,
});
class DatabaseProject {
    insertEstado(body, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let estado = new Estado_1.Estado();
            estado.nome = body.nome;
            estado.sigla = body.sigla;
            return connection.manager
                .save(estado)
                .then(estado => {
                res.status(200).send(estado);
                connection.close();
            });
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    insertLoja(body, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let loja = new Loja_1.Loja();
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
            });
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    insertCidade(body, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let cidade = new Cidade_1.Cidade();
            cidade.nome = body.nome;
            cidade.estado = body.idEstado;
            return connection.manager
                .save(cidade)
                .then(cidade => {
                res.status(200).send(cidade);
                connection.close();
            });
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    updateEstado(body, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let estadoFull = connection.getRepository(Estado_1.Estado);
            let estadoColetada = yield estadoFull.findOne(body.id);
            estadoColetada.nome = body.nome;
            estadoColetada.sigla = body.sigla;
            yield estadoFull.save(estadoColetada);
            res.status(200).send(estadoColetada);
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    updateCidade(body, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let cidadeFull = connection.getRepository(Cidade_1.Cidade);
            let cidadeColetada = yield cidadeFull.findOne(body.id);
            cidadeColetada.nome = body.nome;
            yield cidadeFull.save(cidadeColetada);
            res.status(200).send(cidadeColetada);
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    updateLoja(body, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let lojaFull = connection.getRepository(Loja_1.Loja);
            let lojaColetada = yield lojaFull.findOne(body.id);
            lojaColetada.endereco = body.endereco;
            lojaColetada.telefone = body.telefone;
            lojaColetada.cnpj = body.cnpj;
            lojaColetada.horario = body.horario;
            lojaColetada.cidade = body.cidade;
            yield lojaFull.save(lojaColetada);
            console.log("Loja atualizada com sucesso");
            res.status(200).send(lojaColetada);
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    deleteLoja(id, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let lojaFull = connection.getRepository(Loja_1.Loja);
            let lojaColetada = yield lojaFull.findOne(id);
            yield lojaFull.remove(lojaColetada);
            res.status(200).send("Loja excluida com sucesso: " + id);
            connection.close();
        })).catch(error => {
            let saidaErro = {
                "errorCode": "400",
                "msg": 'Error connect to database'
            };
            res.status(400).send(saidaErro);
            console.log(error);
        });
    }
    deleteCidade(id, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let cidadeFull = connection.getRepository(Cidade_1.Cidade);
            let cidadeColetada = yield cidadeFull.findOne(id);
            yield cidadeFull.remove(cidadeColetada);
            res.status(200).send("Loja excluida com sucesso: " + id);
            connection.close();
        })).catch(error => {
            let saidaErro = {
                "errorCode": "400",
                "msg": 'Error connect to database'
            };
            res.status(400).send(saidaErro);
            console.log(error);
        });
    }
    deleteEstado(id, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let estadoFull = connection.getRepository(Estado_1.Estado);
            let estadoColetada = yield estadoFull.findOne(id);
            yield estadoFull.remove(estadoColetada);
            res.status(200).send("Loja excluida com sucesso: " + id);
            connection.close();
        })).catch(error => {
            let saidaErro = {
                "errorCode": "400",
                "msg": 'Error connect to database'
            };
            res.status(400).send(saidaErro);
            console.log(error);
        });
    }
    listaLojaId(id, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            // const lojasPorId = await connection
            //     .getRepository(Loja)
            //     .createQueryBuilder("loja")
            //     .where("id = :id", { id: id })
            //     .getOne();
            let lojas = connection.getRepository(Loja_1.Loja);
            let lojasPorId = yield lojas.findOne(id);
            if (lojasPorId != undefined) {
                console.log(JSON.stringify(lojasPorId));
                res.send(lojasPorId);
            }
            else {
                res.send("Nenhuma loja encontrada");
            }
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    listaLojas(res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let lojasAll = yield connection.getRepository(Loja_1.Loja)
                .createQueryBuilder("loja")
                .getMany();
            if (lojasAll) {
                console.log(JSON.stringify(lojasAll));
                res.send(lojasAll);
            }
            else {
                res.send("Nenhuma loja encontrada");
            }
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    listaCidades(res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let cidadesAll = yield connection.getRepository(Cidade_1.Cidade)
                .createQueryBuilder("cidade")
                .getMany();
            if (cidadesAll) {
                console.log(JSON.stringify(cidadesAll));
                res.send(cidadesAll);
            }
            else {
                res.send("Nenhuma cidade encontrada");
            }
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    listaEstados(res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let estadosAll = yield connection.getRepository(Estado_1.Estado)
                .createQueryBuilder("estado")
                .getMany();
            if (estadosAll) {
                console.log(JSON.stringify(estadosAll));
                res.send(estadosAll);
            }
            else {
                res.send("Nenhuma cidade encontrada");
            }
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    buscaPorIdEstado(id, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let lojasEstado = yield connection.createQueryBuilder(Loja_1.Loja, "loja")
                .innerJoin("loja.cidade", "cidade")
                .innerJoin("cidade.estado", "estado")
                .where("estado.id = :id", { id: id })
                .getMany();
            if (lojasEstado) {
                console.log(JSON.stringify(lojasEstado));
                res.send(lojasEstado);
            }
            else {
                res.send("Nenhuma loja encontrada");
            }
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    buscaPorNomeEstado(nome, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let lojasEstado = yield connection.createQueryBuilder(Loja_1.Loja, "loja")
                .innerJoin("loja.cidade", "cidade")
                .innerJoin("cidade.estado", "estado")
                .where("estado.nome = :nome", { nome: nome })
                .getMany();
            if (lojasEstado) {
                console.log(JSON.stringify(lojasEstado));
                res.send(lojasEstado);
            }
            else {
                res.send("Nenhuma loja encontrada");
            }
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    buscaPorIdCidade(id, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let lojasEstado = yield connection.createQueryBuilder(Loja_1.Loja, "loja")
                .innerJoin("loja.cidade", "cidade")
                .where("cidade.id = :id", { id: id })
                .getMany();
            if (lojasEstado) {
                console.log(JSON.stringify(lojasEstado));
                res.send(lojasEstado);
            }
            else {
                res.send("Nenhuma loja encontrada");
            }
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    buscaPorNomeCidade(estado, cidade, res) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: 3306,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja, Cidade_1.Cidade, Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let lojasEstado = yield connection.createQueryBuilder(Loja_1.Loja, "loja")
                .innerJoin("loja.cidade", "cidade")
                .innerJoin("cidade.estado", "estado")
                .where("cidade.nome in (:cidade) or estado.nome in (:estado)", { cidade: cidade, estado: estado })
                .getMany();
            if (lojasEstado) {
                console.log(JSON.stringify(lojasEstado));
                res.send(lojasEstado);
            }
            else {
                res.send("Nenhuma loja encontrada");
            }
            connection.close();
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
}
exports.DatabaseProject = DatabaseProject;
module.exports = function () {
    return DatabaseProject;
};
