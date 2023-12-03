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
var deletar_1 = require("../deletar");
var DeletarServico = /** @class */ (function (_super) {
    __extends(DeletarServico, _super);
    function DeletarServico(servico) {
        var _this = _super.call(this) || this;
        _this.servico = servico;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeletarServico.prototype.delete = function () {
        var _this = this;
        console.log("Lista de todos os Servi\u00E7os");
        this.servico.forEach(function (s) {
            console.log("Produto: ".concat(s.nome));
        });
        var entrada = this.entrada.receberTexto("Nome do servi\u00E7o que deseja deletar: ");
        var todosServicos = this.servico.map(function (i) { return i.nome; });
        var indexServico = todosServicos.indexOf(entrada);
        if (indexServico == -1) {
            console.log("Servico ".concat(entrada, " n\u00E3o encontrado"));
        }
        else {
            var execucao = true;
            while (execucao) {
                console.log();
                console.log("Tem certeza que deseja deletar o servi\u00E7o?");
                console.log("1 - Sim");
                console.log("2 - N\u00E3o");
                var valor = this.entrada.receberNumero("Digite a op\u00E7\u00E3o: ");
                switch (valor) {
                    case 1:
                        this.servico.map(function (i) {
                            if (entrada === i.nome) {
                                var index = _this.servico.indexOf(i);
                                _this.servico.splice(index, 1);
                            }
                        });
                        console.log("Servi\u00E7o Deletado com sucesso");
                    case 2:
                        execucao = false;
                        break;
                }
            }
        }
    };
    return DeletarServico;
}(deletar_1.default));
exports.default = DeletarServico;
