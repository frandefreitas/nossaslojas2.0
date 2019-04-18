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
require("reflect-metadata"); //Diversos casos de uso (Composição / Injeção de Dependência, Asserções de Tipo de Tempo de Execução, Reflexão / Espelhamento, Teste) desejam a capacidade de adicionar metadados adicionais a uma classe de maneira consistente.
const typeorm_1 = require("typeorm");
const Estado_1 = require("./entity/Estado");
const Loja_1 = require("./entity/Loja");
const Cidade_1 = require("./entity/Cidade");
const db_json_1 = __importDefault(require("./config/db.json"));
class DatabaseProject {
    insertEstado(body) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: db_json_1.default.port,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Estado_1.Estado,
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let estado = new Estado_1.Estado();
            estado.nome = body.nome;
            estado.sigla = body.sigla;
            return connection.manager
                .save(estado)
                .then(estado => {
                console.log("Estado criado", estado.id);
            })
                .catch(err => console.log(err));
        })).catch(error => console.log(error));
    }
    insertLoja(body) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: db_json_1.default.port,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let loja = new Loja_1.Loja();
            loja.endereco = body.endereco;
            loja.telefone = body.telefone;
            loja.cnpj = body.cnpj;
            loja.horario = body.horario;
            loja.idCidade = body.idCidade;
            return connection.manager
                .save(loja)
                .then(loja => {
                console.log("Loja criado", loja.id);
            })
                .catch(err => console.log(err));
        })).catch(error => console.log(error));
    }
    insertCidade(body) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: db_json_1.default.port,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Cidade_1.Cidade
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            let cidade = new Cidade_1.Cidade();
            cidade.nome = body.nome;
            cidade.idEstado = body.idEstado;
            return connection.manager
                .save(cidade)
                .then(cidade => {
                console.log("Loja criado", cidade.id);
            })
                .catch(err => console.log(err));
        })).catch(error => console.log(error));
    }
    updateEstado(body) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: db_json_1.default.port,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Estado_1.Estado
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
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
        })).catch(error => console.log(error));
    }
    updateCidade(body) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: db_json_1.default.port,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Cidade_1.Cidade
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            return connection.manager
                .createQueryBuilder()
                .update(Cidade_1.Cidade)
                .set({
                nome: body.nome
            })
                .where("id = :id", { id: body.id })
                .execute()
                .catch(err => console.log(err));
        })).catch(error => console.log(error));
    }
    updateLoja(body) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: db_json_1.default.port,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            return connection.manager
                .createQueryBuilder()
                .update(Loja_1.Loja)
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
        })).catch(error => console.log(error));
    }
    deleteLoja(id) {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: db_json_1.default.port,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            return connection.manager
                .createQueryBuilder()
                .delete()
                .from(Loja_1.Loja)
                .where("id = :id", { id: id })
                .execute()
                .catch(err => console.log(err));
        })).catch(error => console.log(error));
    }
    listaLojas() {
        typeorm_1.createConnection({
            type: "mysql",
            host: db_json_1.default.host,
            port: db_json_1.default.port,
            username: db_json_1.default.user,
            password: db_json_1.default.password,
            database: db_json_1.default.database,
            entities: [
                Loja_1.Loja
            ],
            synchronize: true,
        }).then((connection) => __awaiter(this, void 0, void 0, function* () {
            return connection.manager
                .createQueryBuilder()
                .select("*")
                .from(Loja_1.Loja, "loja")
                .execute()
                .catch(err => console.log(err));
        })).catch(error => console.log(error));
    }
}
exports.DatabaseProject = DatabaseProject;
module.exports = function () {
    return DatabaseProject;
};
