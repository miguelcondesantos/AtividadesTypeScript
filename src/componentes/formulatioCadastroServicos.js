import React, { useState } from "react";

function FormularioCadastroServicos(props) {
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`;

    const [formState, setFormState] = useState({
        nomeServico: "",
        precoServico: ""
    });

    const [servicos, setServicos] = useState([]);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setServicos([...servicos, formState]);

        setFormState({
            nomeServico: "",
            precoServico: ""
        });
    };

    return (
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nomeServico" type="text" className="validate" value={formState.nomeServico} onChange={handleChange} />
                        <label htmlFor="nomeServico">Nome do Serviço</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="precoServico" type="number" className="validate" value={formState.precoServico} onChange={handleChange}/>
                        <label htmlFor="precoServico">Preço</label>
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

            <div>
                <h2>Serviços Adicionados:</h2>
                <ul>
                    {servicos.map((servico, index) => (
                        <li key={index}>
                            {`Nome: ${servico.nomeServico}, Preço: ${servico.precoServico}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FormularioCadastroServicos;
