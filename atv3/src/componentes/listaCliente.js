import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

function ListaCliente(props) {
    let estilo = `collection-item active ${props.tema}`;
    let estiloBotao = `btn waves-effect waves-light ${props.tema}`;

    return (
        <div className="collection">
            <a className="collection-item">Cliente 1 <button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Remover</button></a>
            <a className={estilo}>Cliente 2 <button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Remover</button></a>
            <a className="collection-item">Cliente 3 <button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Remover</button></a>
            <a className={estilo}>Cliente 4 <button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Remover</button></a>
        </div>
    );
}

export default ListaCliente;
