import { Component } from "react";
import axios from "axios";

type Props = {
    tema: string;
};

export default class FormularioCadastroServico extends Component<Props> {
    state = {
        nomeServico: '',
        preco: '',
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { nomeServico, preco } = this.state;

        axios.post('http://localhost:3001/servico', {
            nomeServico,
            preco
        })
        .then((response) => {
            console.log(response.data);
            alert('Formulário enviado com sucesso!');

            this.setState({
                nomeServico: '',
                preco: '',
            });

        })
        .catch((error) => {
            console.error('Error submitting form:', error);
        });
    };

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="nomeServico"
                                type="text"
                                className="validate"
                                value={this.state.nomeServico}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="nomeServico">Nome do Serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="preco"
                                type="number"
                                className="validate"
                                value={this.state.preco}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="preco">Preço</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">
                                Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
