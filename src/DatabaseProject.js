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
    port: db_json_1.default.port,
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
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
            let estado = new Estado_1.Estado();
            estado.nome = body.nome;
            estado.sigla = body.sigla;
            return connection.manager
                .save(estado)
                .then(estado => {
                res.status(200).send(estado);
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
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
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
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
            let cidade = new Cidade_1.Cidade();
            cidade.nome = body.nome;
            cidade.estado = body.idEstado;
            return connection.manager
                .save(cidade)
                .then(cidade => {
                res.status(200).send(cidade);
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
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
            return connection.manager
                .createQueryBuilder()
                .update(Estado_1.Estado)
                .set({
                nome: body.nome,
                sigla: body.sigla
            })
                .where("id = :id", { id: body.id })
                .execute()
                .catch(err => console.log(err));
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
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
            return connection.manager
                .createQueryBuilder()
                .update(Cidade_1.Cidade)
                .set({
                nome: body.nome
            })
                .where("id = :id", { id: body.id })
                .execute()
                .catch(err => console.log(err));
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
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
            return connection.manager
                .createQueryBuilder()
                .update(Loja_1.Loja)
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
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
            return connection.manager
                .createQueryBuilder()
                .delete()
                .from(Loja_1.Loja)
                .where("id = :id", { id: id })
                .execute()
                .catch(err => console.log(err));
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    listaLojaId(id, res) {
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
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
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
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
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    buscaPorEstado(id, res) {
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
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
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
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
        })).catch(error => {
            let errResp = {
                "errorCode": "400",
                "msg": 'Falha no banco'
            };
            res.status(400).send(errResp);
            console.log(error);
        });
    }
    buscaPorCidade(id, res) {
        connection.then((connection) => __awaiter(this, void 0, void 0, function* () {
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
