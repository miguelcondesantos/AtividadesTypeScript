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
var AtualizarProduto = /** @class */ (function (_super) {
    __extends(AtualizarProduto, _super);
    function AtualizarProduto(produto) {
        var _this = _super.call(this) || this;
        _this.produto = produto;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizarProduto.prototype.update = function () {
        console.log();
        console.log("Lista de todos os Produtos");
        this.produto.forEach(function (p) {
            console.log("Produto: ".concat(p.nome));
        });
        console.log();
        var entrada = this.entrada.receberTexto("Nome do produto que deseja alterar: ");
        var todosProdutos = this.produto.map(function (i) { return i.nome; });
        var indexProdutos = todosProdutos.indexOf(entrada);
        if (indexProdutos == -1) {
            console.log("Produto ".concat(entrada, " n\u00E3o encontrado"));
        }
        else {
            var novoNome_1 = this.entrada.receberTexto("Digite o novo nome do Produto: ");
            var novoPreco_1 = this.entrada.receberNumero("Digite o novo pre\u00E7o do Produto: R$");
            this.produto.filter(function (produto) { return produto.nome == entrada; }).map(function (i) { return i.preco = novoPreco_1; }).toString();
            this.produto.filter(function (produto) { return produto.nome == entrada; }).map(function (i) { return i.nome = novoNome_1; }).toString();
            console.log("Produto Alterado com sucesso");
        }
    };
    return AtualizarProduto;
}(atualizar_1.default));
exports.default = AtualizarProduto;
