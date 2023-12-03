import React, { useEffect, useState } from "react";
import axios from "axios";
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
    tema: string
}

type ClienteMaisConsumiu = {
    id: number;
    nome: string;
    quantidade: number;
};

type ClienteMenosConsumiu = {
    id: number;
    nome: string;
    quantidade: number;
}

type ClienteMaisConsumiuValor = {
    id: number;
    nome: string;
    valorTotal: number;
}

type ProdutosMaisConsumidos = {
    nomeProduto: string;
    quantidade: number;
  };
  
type ServicosMaisConsumidos = {
    nomeServico: string;
    quantidade: number;
};

type ClienteFeminino = {
  nome: string;
  genero: string;
};

type ClienteMasculino = {
  nome: string;
  genero: string;
};

  

export default function Listagem({ tema }: Props) {
    const [clientesMaisConsumiram, setClientesMaisConsumiram] = useState<ClienteMaisConsumiu[]>([]);
    const [clientesMenosConsumiram, setClientesMenosConsumiram] = useState<ClienteMenosConsumiu[]>([]);
    const [clientesMaisConsumiramValor, setClientesMaisConsumiramValor] = useState<ClienteMaisConsumiuValor[]>([]);
    const [produtosMaisConsumidos, setProdutosMaisConsumidos] = useState<ProdutosMaisConsumidos[]>([]);
    const [servicosMaisConsumidos, setServicosMaisConsumidos] = useState<ServicosMaisConsumidos[]>([]);
    const [clienteFeminino, setClienteFeminino] = useState<ClienteFeminino[]>([]);
    const [clienteMasculino, setClienteMasculino] = useState<ClienteMasculino[]>([]);

    useEffect(() => {
        axios.get<ClienteMaisConsumiu[]>('http://localhost:3001/clientesMaisConsumiram')
            .then(response => {
                setClientesMaisConsumiram(response.data);
            })
            .catch(error => {
                console.error('Error fetching top consuming clients:', error);
            });
    }, []);

    useEffect(() => {
        axios.get<ClienteMenosConsumiu[]>('http://localhost:3001/clientesMenosConsumiram')
          .then(response => {
            setClientesMenosConsumiram(response.data);
          })
          .catch(error => {
            console.error('Error fetching least consuming clients:', error);
          });
      }, []);

    
    useEffect(() => {
        axios.get<ClienteMaisConsumiuValor[]>('http://localhost:3001/clientesMaisConsumiramValor')
          .then(response => {
            setClientesMaisConsumiramValor(response.data);
          })
          .catch(error => {
            console.error('Error fetching top spending clients:', error);
          });
      }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/produtosMaisConsumidos')
          .then(response => {
            setProdutosMaisConsumidos(response.data);
          })
          .catch(error => {
            console.error('Error fetching most consumed products:', error);
          });
      
        axios.get('http://localhost:3001/servicosMaisConsumidos')
          .then(response => {
            setServicosMaisConsumidos(response.data);
          })
          .catch(error => {
            console.error('Error fetching most consumed services:', error);
          });
      }, []);

    useEffect(() => {
        axios.get<ClienteFeminino[]>('http://localhost:3001/clientesFemininos')
          .then(response => {
            setClienteFeminino(response.data);
          })
          .catch(error => {
            console.error('Error fetching female clients:', error);
          });
      }, []);
      
    useEffect(() => {
        axios.get<ClienteMasculino[]>('http://localhost:3001/clientesMasculinos')
          .then(response => {
            setClienteMasculino(response.data);
          })
          .catch(error => {
            console.error('Error fetching male clients:', error);
          });
      }, []);;
      
    
    let estilo = `collection-item active ${tema}`;

    return (
        <div className="container">
            <table className="striped">
                <thead>
                    <tr>
                        <th className={estilo}>Clientes que mais consumiram em quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {clientesMaisConsumiram.map((cliente, index) => (
                        <tr key={index}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.quantidade} produtos/serviços consumidos</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="striped">
                <thead>
                    <tr>
                        <th className={estilo}>Clientes que menos consumiram produtos ou serviços</th>
                    </tr>
                </thead>
                <tbody>
                    {clientesMenosConsumiram.map((cliente, index) => (
                        <tr key={index}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.quantidade} produtos/serviços consumidos</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="striped">
                <thead>
                    <tr>
                        <th className={estilo}>Clientes que mais consumiram em valor</th>
                    </tr>
                </thead>
                <tbody>
                    {clientesMaisConsumiramValor.map((cliente, index) => (
                        <tr key={index}>
                            <td>{cliente.nome}</td>
                            <td>Valor Total: R${cliente.valorTotal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="striped">
                <thead>
                    <tr>
                        <th className={estilo}>Produtos mais consumidos</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosMaisConsumidos.map((produto, index) => (
                        <tr key={index}>
                            <td>{produto.nomeProduto}</td>
                            <td>Quantidade: {produto.quantidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="striped">
                <thead>
                    <tr>
                        <th className={estilo}>Serviços mais consumidos</th>
                    </tr>
                </thead>
                <tbody>
                    {servicosMaisConsumidos.map((servico, index) => (
                        <tr key={index}>
                            <td>{servico.nomeServico}</td>
                            <td>Quantidade: {servico.quantidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="striped">
                <thead>
                    <tr>
                        <th className={estilo}>Clientes Femininos</th>
                    </tr>
                </thead>
                <tbody>
                    {clienteFeminino.map((cliente, index) => (
                        <tr key={index}>
                            <td>{cliente.nome}</td>
                            <td>Gênero: {cliente.genero}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="striped">
                <thead>
                    <tr>
                        <th className={estilo}>Clientes Masculinos</th>
                    </tr>
                </thead>
                <tbody>
                    {clienteMasculino.map((cliente, index) => (
                        <tr key={index}>
                            <td>{cliente.nome}</td>
                            <td>Gênero: {cliente.genero}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}