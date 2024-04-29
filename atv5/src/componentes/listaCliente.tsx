import { Component } from "react";
import axios from "axios";

type Props = {
  tema: string;
};

type State = {
  cliente: Cliente[];
  clienteParaEdicao: Cliente | null;
};

type Cliente = {
  id: number;
  nome: string;
  sobrenome: string;
  nomeSocial: string;
  telefone: string;
  email: string;
  genero: string;
  rg: string;
  cpf: string;
};

export default class ListaCliente extends Component<Props, State> {
  state: State = {
    cliente: [],
    clienteParaEdicao: null,
  };

  componentDidMount() {
    this.fetchCliente();
  }

  handleRemover = (clienteId: number) => {
    axios
      .delete(`http://localhost:3001/cliente/${clienteId}`)
      .then((response) => {
        console.log("Cliente removido com sucesso");
        this.fetchCliente();
      })
      .catch((error) => {
        console.error("Erro ao remover cliente:", error);
      });
  };

  fetchCliente = () => {
    axios
      .get("http://localhost:3001/cliente")
      .then((response) => {
        this.setState({ cliente: response.data });
      })
      .catch((error) => {
        console.error("Error fetching cliente:", error);
      });
  };

  handleAbrirEdicao = (cliente: Cliente) => {
    this.setState({
      clienteParaEdicao: {
        id: cliente.id,
        nome: cliente.nome,
        sobrenome: cliente.sobrenome,
        nomeSocial: cliente.nomeSocial,
        telefone: cliente.telefone,
        email: cliente.email,
        genero: cliente.genero,
        rg: cliente.rg,
        cpf: cliente.cpf,
      },
    });
  };

  handleCancelarEdicao = () => {
    this.setState({
      clienteParaEdicao: null,
    });
  };

  handleSalvarEdicao = () => {
    const { clienteParaEdicao } = this.state;

    if (clienteParaEdicao) {
      axios
        .put(`http://localhost:3001/cliente/${clienteParaEdicao.id}`, clienteParaEdicao)
        .then((response) => {
          console.log("Cliente atualizado com sucesso");
          this.setState({ clienteParaEdicao: null });
          this.fetchCliente();
        })
        .catch((error) => {
          console.error("Erro ao atualizar cliente:", error);
        });
    }
  };

  handleChangeCampoEdicao = (campo: keyof Cliente, valor: string) => {
    const { clienteParaEdicao } = this.state;
    if (clienteParaEdicao) {
      this.setState({
        clienteParaEdicao: {
          ...clienteParaEdicao,
          [campo]: valor,
        },
      });
    }
  };

  render() {
    const { tema } = this.props;
    const estiloBotao = `btn waves-effect waves-light ${tema}`;
    const estiloInput = "input-field inline smaller-input";;
  
    return (
      <div>
        <ul className="collection">
          {this.state.cliente.map((cliente, index) => (
            <li
              key={cliente.id}
              className={`collection-item ${index % 2 === 0 ? "rosa" : ""}`}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {this.state.clienteParaEdicao &&
                this.state.clienteParaEdicao.id === cliente.id ? (
                  <>
                    <div className={estiloInput}>
                      <label htmlFor="nome">Nome</label>
                      <input
                        type="text"
                        value={this.state.clienteParaEdicao.nome}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao("nome", e.target.value)
                        }
                      />
                    </div>
                    <div className={estiloInput}>
                      <label htmlFor="sobrenome">Sobrenome</label>
                      <input
                        type="text"
                        value={this.state.clienteParaEdicao.sobrenome}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao(
                            "sobrenome",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className={estiloInput}>
                      <label htmlFor="nomeSocial">Nome Social</label>
                      <input
                        type="text"
                        value={this.state.clienteParaEdicao.nomeSocial}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao(
                            "nomeSocial",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className={estiloInput}>
                      <label htmlFor="telefone">Telefone</label>
                      <input
                        type="number"
                        value={this.state.clienteParaEdicao.telefone}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao(
                            "telefone",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className={estiloInput}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        value={this.state.clienteParaEdicao.email}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao("email", e.target.value)
                        }
                      />
                    </div>
                    <div className={estiloInput}>
                      <label htmlFor="genero">Gênero</label>
                      <input
                        type="text"
                        value={this.state.clienteParaEdicao.genero}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao("genero", e.target.value)
                        }
                      />
                    </div>
                    <div className={estiloInput}>
                      <label htmlFor="rg">RG</label>
                      <input
                        type="number"
                        value={this.state.clienteParaEdicao.rg}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao("rg", e.target.value)
                        }
                      />
                    </div>
                    <div className={estiloInput}>
                      <label htmlFor="cpf">CPF</label>
                      <input
                        type="number"
                        value={this.state.clienteParaEdicao.cpf}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao("cpf", e.target.value)
                        }
                      />
                    </div>
                    <button
                      className={estiloBotao}
                      type="button"
                      onClick={this.handleSalvarEdicao}
                      style={{ color: "blue", marginLeft: "5px" }}
                    >
                      Salvar
                    </button>
                    <button
                      className={estiloBotao}
                      type="button"
                      onClick={this.handleCancelarEdicao}
                      style={{ color: "red" }}
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <span>{cliente.nome}</span>
                    <span>{cliente.sobrenome}</span>
                    <span>{cliente.nomeSocial}</span>
                    <span>{cliente.telefone}</span>
                    <span>{cliente.email}</span>
                    <span>{cliente.genero}</span>
                    <span>{cliente.rg}</span>
                    <span>{cliente.cpf}</span>
                    <div>
                      <button
                        className={estiloBotao}
                        type="button"
                        onClick={() => this.handleAbrirEdicao(cliente)}
                        style={{ color: "blue", marginRight: "5px" }}
                      >
                        Editar
                      </button>
                      <button
                        className={estiloBotao}
                        type="button"
                        onClick={() => this.handleRemover(cliente.id)}
                        style={{ color: "blue" }}
                      >
                        Remover
                      </button>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
