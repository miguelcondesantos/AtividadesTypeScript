import React, { useState } from "react";

function FormularioCadastroProdutos(props) {
  const estiloBotao = `btn waves-effect waves-light ${props.tema}`;

  const [formState, setFormState] = useState({
    nomeProduto: "",
    precoProduto: ""
  });

  const [produtos, setProdutos] = useState([]); 

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = { ...formState };
    setProdutos([...produtos, novoProduto]);
    console.log("Formulário submetido:", novoProduto);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="nomeProduto"
              type="text"
              className="validate"
              value={formState.nomeProduto}
              onChange={handleChange}
            />
            <label htmlFor="nomeProduto">Nome do Produto</label>
          </div>
          <div className="input-field col s6">
            <input
              id="precoProduto"
              type="number"
              className="validate"
              value={formState.precoProduto}
              onChange={handleChange}
            />
            <label htmlFor="precoProduto">Preço</label>
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

      <div className="row">
        <div className="col s12">
          <h2>Produtos Adicionados:</h2>
          <ul>
            {produtos.map((produto, index) => (
              <li key={index}>
                {produto.nomeProduto} - R${produto.precoProduto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FormularioCadastroProdutos;
