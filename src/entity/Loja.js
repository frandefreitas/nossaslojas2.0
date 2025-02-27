"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Cidade_1 = require("./Cidade");
let Loja = class Loja {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Loja.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Loja.prototype, "endereco", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Loja.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Loja.prototype, "cnpj", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Loja.prototype, "horario", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Cidade_1.Cidade, idCidade => idCidade.id),
    typeorm_1.JoinColumn({ name: "idCidade" }),
    __metadata("design:type", Cidade_1.Cidade)
], Loja.prototype, "cidade", void 0);
Loja = __decorate([
    typeorm_1.Entity()
], Loja);
exports.Loja = Loja;
