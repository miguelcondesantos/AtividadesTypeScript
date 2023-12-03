import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import axios from "axios";
type Props = {
    tema: string;
};

export default class FormularioCadastroProduto extends Component<Props> {
    state = {
        nomeProduto: '',
        preco: '',
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const {
            nomeProduto,
            preco
        } = this.state;

        axios.post('http://localhost:3001/produto', {
           nomeProduto,
           preco
        })
        .then(response => {
            console.log(response.data);
            alert('Formulário enviado com sucesso!');
            
            this.setState({
                nomeProduto: '',
                preco: '',
            });
        })
        .catch(error => {
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
                                id="nomeProduto"
                                type="text"
                                className="validate"
                                value={this.state.nomeProduto}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="nomeProduto">Nome do Produto</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="preco" type="number" className="validate" value={this.state.preco} onChange={this.handleChange}/>
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
