"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../../io/entrada");
var servico_1 = require("../../modelo/servico");
var cadastro_1 = require("../cadastro");
var CadastroServico = /** @class */ (function (_super) {
    __extends(CadastroServico, _super);
    function CadastroServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroServico.prototype.cadastrar = function () {
        var nome = this.entrada.receberTexto("Digite o nome nome do serviço: ");
        var nomes = this.servicos.map(function (i) { return (i.nome); });
        if (nomes.includes(nome)) {
            console.log("".concat(nome, " j\u00E1 existe dentro do sistema"));
            console.log();
        }
        else {
            var preco = this.entrada.receberNumero("Qual \u00E9 o pre\u00E7o do servico? R$");
            var cadastrar = new servico_1.default(nome, Number(preco));
            this.servicos.push(cadastrar);
            console.log();
        }
    };
    return CadastroServico;
}(cadastro_1.default));
exports.default = CadastroServico;
