/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaServico extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}` 
        return (
            <div className="collection">
                <a className="collection-item">Servico 1 <button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Remover</button></a>
                <a className={estilo}>Servico 2 <button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Remover</button></a>
                <a className="collection-item">Servico 3 <button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Remover</button></a>
                <a className={estilo}>Servico 4 <button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Atualizar</button><button className={estiloBotao} type="submit" name="action" style={{color: "blue"}}>Remover</button></a>
            </div>
            
        )
    }
}