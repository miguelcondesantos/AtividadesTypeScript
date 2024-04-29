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
var atualizar_1 = require("../atualizar");
var AtualizarServico = /** @class */ (function (_super) {
    __extends(AtualizarServico, _super);
    function AtualizarServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizarServico.prototype.update = function () {
        console.log("\nLista de todos os Servicos");
        this.servicos.forEach(function (servico) {
            console.log("Servi\u00E7o: " + servico.nome);
        });
        var todosServicos = this.servicos.map(function (i) { return i.nome; });
        var entrada = this.entrada.receberTexto("Escolha qual servico escrevendo o nome: ");
        var indexServico = todosServicos.indexOf(entrada);
        if (indexServico == -1) {
            console.log("Servi\u00E7o ".concat(entrada, " n\u00E3o existe"));
        }
        else {
            var novoNome_1 = this.entrada.receberTexto("Digite o novo nome do Servi\u00E7o: ");
            var novoPreco_1 = this.entrada.receberNumero("Digite o novo pre\u00E7o do Produto: R$");
            this.servicos.filter(function (servico) { return servico.nome == entrada; }).map(function (i) { return i.preco = novoPreco_1; }).toString();
            this.servicos.filter(function (servico) { return servico.nome == entrada; }).map(function (i) { return i.nome = novoNome_1; }).toString();
            console.log("Servi\u00E7o alterado com sucesso");
        }
    };
    return AtualizarServico;
}(atualizar_1.default));
exports.default = AtualizarServico;
