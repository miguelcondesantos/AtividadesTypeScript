import React, { useState } from "react";

function FormularioCadastroClientes(props) {
    const [formState, setFormState] = useState({
      first_name: "",
      last_name: "",
      nomeSocial: "",
      telefone: "",
      email: "",
      genero: "",
      cpf: "",
      rg: ""
    });
  
    const [clientes, setClientes] = useState([]);
  
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`;
  
    const handleChange = (e) => {
      setFormState({
        ...formState,
        [e.target.id]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const novoCliente = { ...formState };
      setClientes([...clientes, novoCliente]);
      console.log("Formulário submetido:", novoCliente);
    };

    return (
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" value={formState.first_name} onChange={handleChange} />
                        <label htmlFor="first_name">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" value={formState.last_name} onChange={handleChange} />
                        <label htmlFor="last_name">Sobrenome</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="nomeSocial" type="text" className="validate" value={formState.nomeSocial} onChange={handleChange} />
                        <label htmlFor="nomeSocial">Nome Social</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="telefone" type="tel" className="validate" value={formState.telefone} onChange={handleChange} />
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate" value={formState.email} onChange={handleChange} />
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="genero" type="text" className="validate" value={formState.genero} onChange={handleChange} />
                        <label htmlFor="genero">Gênero</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id='cpf' type="number" className="validate" value={formState.cpf} onChange={handleChange} />
                        <label htmlFor="cpf">CPF</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="rg" type="number" className="validate" value={formState.rg} onChange={handleChange} />
                        <label htmlFor="rg">RG</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action">
                            Enviar <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
            <div className="col s12">
                <h2>Clientes Adicionados:</h2>
                <ul>
                    {clientes.map((cliente, index) => (
                    <li key={index}>
                        {cliente.first_name} {cliente.last_name}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FormularioCadastroClientes;
