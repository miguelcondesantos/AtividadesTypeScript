import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroClientes from "./formularioCadastroClientes";
import FormularioCadastroProdutos from "./formularioCadastroProdutos";
import FormularioCadastroServicos from "./formulatioCadastroServicos";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";

function Roteador() {
    const [tela, setTela] = useState('Clientes');

    const selecionarView = (novaTela, evento) => {
        evento.preventDefault();
        console.log(novaTela);
        setTela(novaTela);
    }

    let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="purple lighten-4" botoes={['Cadastro Clientes','Cadastro Servicos', 'Cadastro Produtos', 'Clientes', 'Servicos', 'Produtos' ]} />;
    
    if (tela === 'Clientes') {
        return (
            <>
                {barraNavegacao}
                <ListaCliente tema="purple lighten-4" />
            </>
        )
    } 
    if (tela === 'Servicos') {
        return (
            <>
                {barraNavegacao}
                <ListaServico tema="purple lighten-4" />
            </>
        )
    }

    if (tela === 'Produtos') {
        return (
            <>
                {barraNavegacao}
                <ListaProduto tema="purple lighten-4" />
            </>
        )
    }

    if (tela === 'Cadastro Clientes'){
        return(
            <>
                {barraNavegacao}
                <FormularioCadastroClientes tema='purple lighten-4' />
            </>
        )
    }

    if (tela === "Cadastro Produtos") {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroProdutos tema="purple lighten-4" />
            </>
        )
    }

    if (tela === "Cadastro Servicos") {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroServicos tema="purple lighten-4" />
            </>
        )
    }
}

export default Roteador;
