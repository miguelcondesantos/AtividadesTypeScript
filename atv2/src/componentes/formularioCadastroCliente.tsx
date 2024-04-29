import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroClientes extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">sobrenome</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nomeSocial" type="text" className="validate" />
                            <label htmlFor="nomeSocial">nome social</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="telefone" type="number" className="validate" />
                            <label htmlFor="telefone">telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">e-mail</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="genero" type="text" className="validate" />
                            <label htmlFor="genero">gênero</label>
                        </div>
                        <div className="input-field col s6">
                            <input id='cpf' type="number" className="validate" />
                            <label htmlFor="cpf">cpf</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="rg" type="number" className="validate" />
                            <label htmlFor="rg">rg</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}