import { Component } from "react";
import axios from "axios";

type Props = {
  tema: string;
};

type State = {
  servico: Servico[];
  servicoParaEdicao: Servico | null;
};

type Servico = {
  id: number;
  nomeServico: string;
  preco: number;
};

export default class ListaServico extends Component<Props, State> {
  state: State = {
    servico: [],
    servicoParaEdicao: null,
  };

  componentDidMount() {
    this.fetchCliente();
  }

  handleRemover = (servicoId: number) => {
    axios
      .delete(`http://localhost:3001/servico/${servicoId}`)
      .then((response) => {
        console.log("Serviço removido com sucesso");
        this.fetchCliente();
      })
      .catch((error) => {
        console.error("Erro ao remover serviço:", error);
      });
  };

  fetchCliente = () => {
    axios
      .get("http://localhost:3001/servico")
      .then((response) => {
        this.setState({ servico: response.data });
      })
      .catch((error) => {
        console.error("Error fetching servico:", error);
      });
  };

  handleAbrirEdicao = (servico: Servico) => {
    this.setState({
      servicoParaEdicao: {
        id: servico.id,
        nomeServico: servico.nomeServico,
        preco: servico.preco,
      },
    });
  };

  handleCancelarEdicao = () => {
    this.setState({
      servicoParaEdicao: null,
    });
  };

  handleSalvarEdicao = () => {
    const { servicoParaEdicao } = this.state;

    if (servicoParaEdicao) {
      axios
        .put(`http://localhost:3001/servico/${servicoParaEdicao.id}`, servicoParaEdicao)
        .then((response) => {
          console.log("Servico atualizado com sucesso");
          this.setState({ servicoParaEdicao: null });
          this.fetchCliente();
        })
        .catch((error) => {
          console.error("Erro ao atualizar servico:", error);
        });
    }
  };

  handleChangeCampoEdicao = (campo: keyof Servico, valor: string) => {
    const { servicoParaEdicao } = this.state;
    if (servicoParaEdicao) {
      this.setState({
        servicoParaEdicao: {
          ...servicoParaEdicao,
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
          {this.state.servico.map((servico, index) => (
            <li
              key={servico.id}
              className={`collection-item ${index % 2 === 0 ? "rosa" : ""}`}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {this.state.servicoParaEdicao &&
                this.state.servicoParaEdicao.id === servico.id ? (
                  <>
                    <div className={estiloInput}>
                      <label htmlFor="nomeServico">Nome do Serviço</label>
                      <input
                        type="text"
                        value={this.state.servicoParaEdicao.nomeServico}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao("nomeServico", e.target.value)
                        }
                      />
                    </div>
                    <div className={estiloInput}>
                      <label htmlFor="preco">Preco</label>
                      <input
                        type="number"
                        value={this.state.servicoParaEdicao.preco}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao(
                            "preco",
                            e.target.value
                          )
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
                    <span>{servico.nomeServico}</span>
                    <span>{servico.preco}</span>
                    <div>
                      <button
                        className={estiloBotao}
                        type="button"
                        onClick={() => this.handleAbrirEdicao(servico)}
                        style={{ color: "blue", marginRight: "5px" }}
                      >
                        Editar
                      </button>
                      <button
                        className={estiloBotao}
                        type="button"
                        onClick={() => this.handleRemover(servico.id)}
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
