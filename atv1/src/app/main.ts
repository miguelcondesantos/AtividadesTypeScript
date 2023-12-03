import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import AtualizarCliente from "../negocio/cliente/atualizarCliente";
import DeletarCliente from "../negocio/cliente/deletarCliente";
import ListagemClientes from "../negocio/cliente/listarCliente";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import AtualizarProduto from "../negocio/produto/atualizarProduto";
import DeletarProduto from "../negocio/produto/deletarProduto";
import ListagemProduto from "../negocio/produto/listarProduto";
import CadastroServico from "../negocio/servico/cadastroServico";
import AtualizarServico from "../negocio/servico/atualizarServico";
import ListagemServico from "../negocio/servico/listarServico";
import DeletarServico from "../negocio/servico/deletarServico";
import ListagemGenero from "../negocio/listagens/listarGênero";
import ListagemMenosConsumido from "../negocio/listagens/listarClienteMenosConsumiu";
import ListagemQuantidade from "../negocio/listagens/listarClienteConsumiu";
import ProdutosPorGenero from "../negocio/listagens/listarMaisConsumidoGenero";
import ProdutosConsumidos from "../negocio/listagens/listarProdutosConsumidos";
import ListagemValor from "../negocio/listagens/listarValorConsumidoCliente";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

    empresa.setProdutos = [
        new Produto("Gel de cabelo", 22),
        new Produto("Sabonete", 12),
        new Produto("Vinho", 9),
        new Produto("Condicionador", 15),
        new Produto("Suco de laranja", 4),
        new Produto("Escova de cabelo", 10),
        new Produto("Café premium", 6),
        new Produto("Máscara capilar", 60),
        new Produto("Camiseta estampada", 80),
        new Produto("Caneca personalizada", 20),
    ];
  
    empresa.setServicos = [
        new Servico("Corte moderno", 35),
        new Servico("Coloração de cabelo", 20),
        new Servico("Barba completa", 25),
        new Servico("Corte de cabelo artístico", 40),
        new Servico("Design de barba", 35),
        new Servico("Corte detalhado", 50),
        new Servico("Tratamento capilar especial", 55),
        new Servico("Maquiagem", 30),
        new Servico("Pedicure", 25),
        new Servico("Massagem relaxante", 40),
    ];
  
    empresa.setClientes = [
        new Cliente("Mariana", "MarianaSocial", new CPF("12345678900", new Date()), "Feminino"),
        new Cliente("Carlos", "CarlosSocial", new CPF("12345678901", new Date()), "Maculino"),
        new Cliente("Ana", "AnaSocial", new CPF("12345678902", new Date()), "Feminino"),
        new Cliente("Pedro", "PedroSocial", new CPF("12345678903", new Date()), "Maculino"),
        new Cliente("Camila", "CamilaSocial", new CPF("12345678904", new Date()), "Feminino"),
        new Cliente("Lucas", "LucasSocial", new CPF("12345678905", new Date()), "Maculino"),
        new Cliente("Juliana", "JulianaSocial", new CPF("12345678906", new Date()), "Feminino"),
        new Cliente("Fernando", "FernandoSocial", new CPF("12345678907", new Date()), "Maculino"),
        new Cliente("Cristina", "CristinaSocial", new CPF("12345678908", new Date()), "Feminino"),
        new Cliente("Ricardo", "RicardoSocial", new CPF("12345678909", new Date()), "Maculino"),
    ];

    empresa.getClientes[0].getRgs.push(new RG("1234567", new Date()));
    empresa.getClientes[0].getTelefones.push(new Telefone("11", "123456789"));
    empresa.getClientes[0].getProdutosConsumidos.push(empresa.getProdutos[0]);
    empresa.getClientes[0].getServicosConsumidos.push(empresa.getServicos[0]);
    

    empresa.getClientes[1].getRgs.push(new RG("9876543", new Date()));
    empresa.getClientes[1].getTelefones.push(new Telefone("33", "111223344"));
    empresa.getClientes[1].getProdutosConsumidos.push(
        empresa.getProdutos[0],
        empresa.getProdutos[1]
    );
    empresa.getClientes[1].getServicosConsumidos.push(
        empresa.getServicos[0],
        empresa.getServicos[1]
    );
    

    empresa.getClientes[2].getRgs.push(new RG("7654321", new Date()));
    empresa.getClientes[2].getTelefones.push(new Telefone("22", "987654321"));
    empresa.getClientes[2].getProdutosConsumidos.push(
        empresa.getProdutos[0],
        empresa.getProdutos[1],
        empresa.getProdutos[2]
    );
    empresa.getClientes[2].getServicosConsumidos.push(
        empresa.getServicos[0],
        empresa.getServicos[1],
        empresa.getServicos[2]
    );
    


    empresa.getClientes[3].getRgs.push(new RG("3456789", new Date()));
    empresa.getClientes[3].getTelefones.push(new Telefone("44", "555666777"));
    empresa.getClientes[3].getProdutosConsumidos.push(
        empresa.getProdutos[0],
        empresa.getProdutos[1],
        empresa.getProdutos[2],
        empresa.getProdutos[3]
    );
    empresa.getClientes[3].getServicosConsumidos.push(
        empresa.getServicos[0],
        empresa.getServicos[1],
        empresa.getServicos[2],
        empresa.getServicos[3]
    );


    empresa.getClientes[4].getRgs.push(new RG("3456789", new Date()));
    empresa.getClientes[4].getTelefones.push(new Telefone("44", "555666777"));
    empresa.getClientes[4].getProdutosConsumidos.push(
        empresa.getProdutos[0],
        empresa.getProdutos[1],
        empresa.getProdutos[2],
        empresa.getProdutos[3]
    );
    empresa.getClientes[4].getServicosConsumidos.push(
        empresa.getServicos[0],
        empresa.getServicos[1],
        empresa.getServicos[2],
        empresa.getServicos[3]
    );



    empresa.getClientes[5].getRgs.push(new RG("9876543", new Date()));
    empresa.getClientes[5].getTelefones.push(new Telefone("55", "777888999"));
    empresa.getClientes[5].getProdutosConsumidos.push(
        empresa.getProdutos[0],
        empresa.getProdutos[1],
        empresa.getProdutos[2],
        empresa.getProdutos[3],
        empresa.getProdutos[4]
    );
    empresa.getClientes[5].getServicosConsumidos.push(
        empresa.getServicos[0],
        empresa.getServicos[1],
        empresa.getServicos[2],
        empresa.getServicos[3],
        empresa.getServicos[4]
    );


    empresa.getClientes[6].getRgs.push(new RG("7654321", new Date()));
    empresa.getClientes[6].getTelefones.push(new Telefone("22", "987654321"));
    empresa.getClientes[6].getProdutosConsumidos.push(
        empresa.getProdutos[0],
        empresa.getProdutos[1],
        empresa.getProdutos[2],
        empresa.getProdutos[3],
        empresa.getProdutos[4],
        empresa.getProdutos[5]
    );
    empresa.getClientes[6].getServicosConsumidos.push(
        empresa.getServicos[0],
        empresa.getServicos[1],
        empresa.getServicos[2],
        empresa.getServicos[3],
        empresa.getServicos[4],
        empresa.getServicos[5]
    );



    empresa.getClientes[7].getRgs.push(new RG("3456789", new Date()));
    empresa.getClientes[7].getTelefones.push(new Telefone("33", "111223344"));
    empresa.getClientes[7].getProdutosConsumidos.push(
        empresa.getProdutos[0],
        empresa.getProdutos[1],
        empresa.getProdutos[2],
        empresa.getProdutos[3],
        empresa.getProdutos[4],
        empresa.getProdutos[5],
        empresa.getProdutos[6]
    );
    empresa.getClientes[7].getServicosConsumidos.push(
        empresa.getServicos[0],
        empresa.getServicos[1],
        empresa.getServicos[2],
        empresa.getServicos[3],
        empresa.getServicos[4],
        empresa.getServicos[5],
        empresa.getServicos[6]
    );



    empresa.getClientes[8].getRgs.push(new RG("7654321", new Date()));
    empresa.getClientes[8].getTelefones.push(new Telefone("22", "987654321"));
    empresa.getClientes[8].getProdutosConsumidos.push(
        empresa.getProdutos[0],
        empresa.getProdutos[1],
        empresa.getProdutos[2],
        empresa.getProdutos[3],
        empresa.getProdutos[4],
        empresa.getProdutos[5],
        empresa.getProdutos[6],
        empresa.getProdutos[7]
    );
    empresa.getClientes[8].getServicosConsumidos.push(
        empresa.getServicos[0],
        empresa.getServicos[1],
        empresa.getServicos[2],
        empresa.getServicos[3],
        empresa.getServicos[4],
        empresa.getServicos[5],
        empresa.getServicos[6],
        empresa.getServicos[7]
    );


    
    empresa.getClientes[9].getRgs.push(new RG("9876543", new Date()));
    empresa.getClientes[9].getTelefones.push(new Telefone("66", "999888777"));
    empresa.getClientes[9].getProdutosConsumidos.push(
        empresa.getProdutos[0],
        empresa.getProdutos[1],
        empresa.getProdutos[2],
        empresa.getProdutos[3],
        empresa.getProdutos[4],
        empresa.getProdutos[5],
        empresa.getProdutos[6],
        empresa.getProdutos[7],
        empresa.getProdutos[8],
        empresa.getProdutos[9]
    );
    empresa.getClientes[9].getServicosConsumidos.push(
        empresa.getServicos[0],
        empresa.getServicos[1],
        empresa.getServicos[2],
        empresa.getServicos[3],
        empresa.getServicos[4],
        empresa.getServicos[5],
        empresa.getServicos[6],
        empresa.getServicos[7],
        empresa.getServicos[8],
        empresa.getServicos[9]
    );



while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2- Cadastrar produto`)
    console.log(`3- Cadastrar serviço`)
    console.log(`4 - Atualizar dados do cliente`);
    console.log(`5 - Atualizar dados do produto`);
    console.log(`6 - Atualizar dados do serviço`);
    console.log(`7 - Listar clientes`);
    console.log(`8 - Listar produtos`);
    console.log(`9 - Listar serviços`);
    console.log(`10 - Listar clientes que mais consumiram em valor`);
    console.log(`11 - Listar clientes que mais consumiram em quantidade`);
    console.log(`12 - Listar clientes que menos consumiram produtos ou serviços`);
    console.log(`13 - Listar produtos e serviços mais consumidos`);
    console.log(`14 - Listar produtos e serviços mais consumidos por gênero`);
    console.log(`15 - Listagem de gênero`);
    console.log(`16 - Deletar cliente`);
    console.log(`17 - Deletar produto`);
    console.log(`18 - Deletar serviço`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastro.cadastrar();
            break;
        case 2:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar();
            break;
        case 3:
            let cadastroServico = new CadastroServico(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
       case 4:
            let atualizarCliente = new AtualizarCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            atualizarCliente.update()
            break;
        case 5:
            let atualizarProduto = new AtualizarProduto(empresa.getProdutos)
            atualizarProduto.update()
            break;
        case 6:
            let atualizarServico = new AtualizarServico(empresa.getServicos)
            atualizarServico.update()
            break;
        case 7:
            let listagemCliente = new ListagemClientes(empresa.getClientes);
            listagemCliente.listar();
            break;
        case 8:
            let listagemProduto = new ListagemProduto(empresa.getProdutos);
            listagemProduto.listar();
            break;
        case 9:
            let listageServico = new ListagemServico(empresa.getServicos);
            listageServico.listar();
            break;
        case 10:
            let consumido = new ListagemValor(empresa.getClientes)
            consumido.listar()
            break;
        case 11:
            let maisconsumido = new ListagemQuantidade(empresa.getClientes)
            maisconsumido.listar()
            break;
        case 12:
            let menosconsumido = new ListagemMenosConsumido(empresa.getClientes)
            menosconsumido.listar()
            break;
        case 13:
            let ProdutoMaisConsumido = new ProdutosConsumidos(empresa.getClientes)
            ProdutoMaisConsumido.listar()
            break;
        case 14:
            let ConsumidoPorGenero = new ProdutosPorGenero(empresa.getClientes)
            ConsumidoPorGenero.listar()
            break;
        case 15:
            let listagemGenero = new ListagemGenero(empresa.getClientes);
            listagemGenero.listar();
            break;
        case 16:
            let deletarCliente = new DeletarCliente(empresa.getClientes)
            deletarCliente.delete()
            break;
        case 17:
            let deletarProduto = new DeletarProduto(empresa.getProdutos)
            deletarProduto.delete()
            break;
        case 12:
            let deletarServico = new DeletarServico(empresa.getServicos)
            deletarServico.delete()
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}