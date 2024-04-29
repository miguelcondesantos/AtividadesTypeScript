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
var DeletarProduto = /** @class */ (function (_super) {
    __extends(DeletarProduto, _super);
    function DeletarProduto(produto) {
        var _this = _super.call(this) || this;
        _this.produto = produto;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeletarProduto.prototype.delete = function () {
        var _this = this;
        console.log();
        console.log("Lista de todos os Produtos");
        this.produto.forEach(function (p) {
            console.log("Produto: ".concat(p.nome));
        });
        console.log();
        var entrada = this.entrada.receberTexto("Nome do produto que deseja deletar: ");
        var todosProdutos = this.produto.map(function (i) { return i.nome; });
        var indexProdutos = todosProdutos.indexOf(entrada);
        if (indexProdutos == -1) {
            console.log("Produto ".concat(entrada, " n\u00E3o encontrado"));
        }
        else {
            var execucao = true;
            while (execucao) {
                console.log();
                console.log("Tem certeza que deseja deletar o produto?");
                console.log("1 - Sim");
                console.log("2 - N\u00E3o");
                var valor = this.entrada.receberNumero("Digite a op\u00E7\u00E3o: ");
                switch (valor) {
                    case 1:
                        this.produto.map(function (i) {
                            if (entrada === i.nome) {
                                var index = _this.produto.indexOf(i);
                                _this.produto.splice(index, 1);
                            }
                        });
                        console.log("Produto Deletado com sucesso");
                    case 2:
                        execucao = false;
                        break;
                }
            }
        }
    };
    return DeletarProduto;
}(deletar_1.default));
exports.default = DeletarProduto;
