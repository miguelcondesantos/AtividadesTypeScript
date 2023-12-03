import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

function ListaProduto(props) {
    let estilo = `collection-item active ${props.tema}`;
    let estiloBotao = `btn waves-effect waves-light ${props.tema}`;

    return (
        <div className="collection">
            <a className="collection-item">Produto 1 <button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Remover</button></a>
            <a className={estilo}>Produto 2 <button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Remover</button></a>
            <a className="collection-item">Produto 3 <button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Remover</button></a>
            <a className={estilo}>Produto 4 <button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{ color: "blue" }}>Remover</button></a>
        </div>
    );
}

export default ListaProduto;
