import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

function Listagem(props) {
    let estilo = `collection-item active ${props.tema}`;
    let estiloBotao = `btn waves-effect waves-light ${props.tema}`;

    return (
        <div className="collection">
                <h3>Clientes que mais consumiram em quantidade</h3>
                <a className="collection-item">Cliente 1 </a>
                <h3>Clientes que menos consumiram produtos ou serviços</h3>
                <a className={estilo}>Cliente 2 </a> 
                <h3>Clientes que mais consumiram em valor</h3>
                <a className="collection-item">Valor 1 </a>
                <h3>Produtos mais consumidos</h3>
                <a className={estilo}>Produto 1</a>
                <h3>Serviços mais consumidos</h3>
                <a className={estilo}>Serviço 1</a>
                <h3>Clientes Femininos</h3>
                <a className="collection-item">Feminino 1</a>
                <h3>Clientes Masculinos</h3>
                <a className={estilo}>Masculino 1</a>
            </div>
    );
}

export default Listagem;
