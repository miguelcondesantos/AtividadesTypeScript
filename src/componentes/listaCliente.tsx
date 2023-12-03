/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}` 
        return (
            <div className="collection">
                <a className="collection-item">Cliente 1 <button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Remover</button></a>
                <a className={estilo}>Cliente 2 <button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Remover</button></a> 
                <a className="collection-item">Cliente 3 <button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Remover</button></a>
                <a className={estilo}>Cliente 4 <button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Remover</button></a>
            </div>
            
        )
    }
}