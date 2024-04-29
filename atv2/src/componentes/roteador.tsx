import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroClientes from "./formularioCadastroCliente";
import FormularioCadastroProdutos from "./formularioCadastroProdutos";
import FormularioCadastroServicos from "./formularioCadastroServicos";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import Listagem from "./listagem";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Cadastro Clientes','Cadastro Servicos', 'Cadastro Produtos', 'Clientes', 'Servicos', 'Produtos', 'Listagem' ]} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } 
        if (this.state.tela === 'Servicos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="purple lighten-4" />
                </>
            )
        }

        if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="purple lighten-4" />
                </>
            )
        }

        if (this.state.tela === 'Cadastro Clientes'){
            return(
                <>
                    {barraNavegacao}
                    <FormularioCadastroClientes tema='purple lighten-4' />
                </>
            )
        }

        if (this.state.tela === "Cadastro Produtos") {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdutos tema="purple lighten-4" />
                </>
            )
        }

        if (this.state.tela === "Cadastro Servicos") {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServicos tema="purple lighten-4" />
                </>
            )
        }

        if (this.state.tela === 'Listagem'){
            return (
                <>
                    {barraNavegacao}
                    <Listagem tema="purple lighten-4" />
                </>
            )
        }

    }
}