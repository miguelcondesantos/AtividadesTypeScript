import{ Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';

type props = {
    tema: string
}

export default class FormularioCadastroClientes extends Component<props> {
    state = {
        nome: '',
        sobrenome: '',
        nomeSocial: '',
        telefone: '',
        email: '',
        genero: '',
        cpf: '',
        rg: ''
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const {
            nome,
            sobrenome,
            nomeSocial,
            telefone,
            email,
            genero,
            cpf,
            rg,
        } = this.state;

        axios.post('http://localhost:3001/cliente', {
            nome,
            sobrenome,
            nomeSocial,
            telefone,
            email,
            genero,
            cpf,
            rg
        })
        .then(response => {
            console.log(response.data);
            alert('Formulário enviado com sucesso!');
            
            this.setState({
                nome: '',
                sobrenome: '',
                nomeSocial: '',
                telefone: '',
                email: '',
                genero: '',
                cpf: '',
                rg: ''
            });
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });

    };
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome" type="text" className="validate" value={this.state.nome} onChange={this.handleChange} />
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="sobrenome" type="text" className="validate" value={this.state.sobrenome} onChange={this.handleChange} />
                            <label htmlFor="sobrenome">Sobrenome</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nomeSocial" type="text" className="validate" value={this.state.nomeSocial} onChange={this.handleChange} />
                            <label htmlFor="nomeSocial">Nome Social</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="telefone" type="number" className="validate" value={this.state.telefone} onChange={this.handleChange} />
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" value={this.state.email} onChange={this.handleChange} />
                            <label htmlFor="email">E-mail</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="genero" type="text" className="validate" value={this.state.genero} onChange={this.handleChange} />
                            <label htmlFor="genero">Gênero</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id='cpf' type="number" className="validate" value={this.state.cpf} onChange={this.handleChange} />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="rg" type="number" className="validate" value={this.state.rg} onChange={this.handleChange} />
                            <label htmlFor="rg">RG</label>
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