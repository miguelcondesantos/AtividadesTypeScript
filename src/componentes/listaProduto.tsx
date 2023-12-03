import { Component } from "react";
import axios from "axios";

type Props = {
  tema: string;
};

type State = {
  produtos: Produto[];
  produtoParaEdicao: Produto | null;
  nomeProdutoEdicao: string;
  precoEdicao: string;
};

type Produto = {
  id: number;
  nomeProduto: string;
  preco: number;
};

export default class ListaProduto extends Component<Props, State> {
  state: State = {
    produtos: [],
    produtoParaEdicao: null,
    nomeProdutoEdicao: "",
    precoEdicao: "",
  };

  componentDidMount() {
    this.fetchProdutos();
  }

  handleRemover = (produtoId: number) => {
    axios
      .delete(`http://localhost:3001/produto/${produtoId}`)
      .then((response) => {
        console.log("Produto removido com sucesso");
        this.fetchProdutos();
      })
      .catch((error) => {
        console.error("Erro ao remover produto:", error);
      });
  };

  fetchProdutos = () => {
    axios
      .get("http://localhost:3001/produto")
      .then((response) => {
        this.setState({ produtos: response.data });
      })
      .catch((error) => {
        console.error("Error fetching produtos:", error);
      });
  };

  handleAbrirEdicao = (produto: Produto) => {
    this.setState({
      produtoParaEdicao: {
        id: produto.id,
        nomeProduto: produto.nomeProduto,
        preco: produto.preco,
      },
      nomeProdutoEdicao: produto.nomeProduto,
      precoEdicao: produto.preco.toString(),
    });
  };

  handleCancelarEdicao = () => {
    this.setState({
      produtoParaEdicao: null,
      nomeProdutoEdicao: "",
      precoEdicao: "",
    });
  };

  handleSalvarEdicao = () => {
    const { produtoParaEdicao, nomeProdutoEdicao, precoEdicao } = this.state;

    if (produtoParaEdicao) {
      const produtoAtualizado: Produto = {
        ...produtoParaEdicao,
        nomeProduto: nomeProdutoEdicao,
        preco: parseFloat(precoEdicao),
      };

      axios
        .put(`http://localhost:3001/produto/${produtoAtualizado.id}`, produtoAtualizado)
        .then((response) => {
          console.log("Produto atualizado com sucesso");
          this.fetchProdutos();
          this.handleCancelarEdicao();
        })
        .catch((error) => {
          console.error("Erro ao atualizar produto:", error);
        });
    }
  };

  handleChangeCampoEdicao = (campo: keyof Produto, valor: string) => {
    this.setState({
      [campo + "Edicao"]: valor,
    } as any);
  };

  render() {
    const { tema } = this.props;
    const estiloBotao = `btn waves-effect waves-light ${tema}`;
    const estiloInput = "input-field inline smaller-input";;

    return (
      <div>
        <ul className="collection">
          {this.state.produtos.map((produto, index) => (
            <li
              key={produto.id}
              className={`collection-item ${index % 2 === 0 ? "rosa" : ""}`}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {this.state.produtoParaEdicao &&
                this.state.produtoParaEdicao.id === produto.id ? (
                  <>
                    <div className={estiloInput}>
                      <label htmlFor="nomeProduto">Nome do Produto</label>
                      <input
                        type="text"
                        value={this.state.nomeProdutoEdicao}
                        onChange={(e) =>
                          this.handleChangeCampoEdicao("nomeProduto", e.target.value)
                        }
                      />
                    </div>
                    <div className={estiloInput}>
                      <label htmlFor="preco">Preço</label>
                      <input
                        type="number"
                        value={this.state.precoEdicao}
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
                    <span>{produto.nomeProduto}</span>
                    <span>{produto.preco}</span>
                    <div>
                      <button
                        className={estiloBotao}
                        type="button"
                        onClick={() => this.handleAbrirEdicao(produto)}
                        style={{ color: "blue", marginRight: "5px" }}
                      >
                        Editar
                      </button>
                      <button
                        className={estiloBotao}
                        type="button"
                        onClick={() => this.handleRemover(produto.id)}
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
