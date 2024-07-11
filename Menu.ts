import { colors } from "./src/util/Colors";
import rl = require("readline-sync");
import { Pao } from "./src/model/Pao";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Bolo } from "./src/model/Bolo";

export function main(): void {
    let loop: boolean = true; 
    let quente: boolean ;
    let opcao, preco, estoque, validade, id: number;
    let nome,  tipo, descricao: string;

    const tipoProdutos = ["Pao", "Bolo"];

    const produtos: ProdutoController = new ProdutoController()
    produtos.cadastrarProduto(new Pao(produtos.gerarId(), "Pão frances", 0.75, "Saboroso", 1, 10, true))

    console.log(colors.fg.green);
    console.log("*************************************************************");
    console.log("                                                             ");
    console.log("                        PadariaVirtual                       ");
    console.log("                                                             ");
    console.log("*************************************************************");
    console.log("                                                             ");
    console.log("                1 - Listar todos os produtos                 ");
    console.log("                2 - Listar produto pelo ID                   ");
    console.log("                3 - Cadastrar Produto                        ");
    console.log("                4 - Atualizar Produto                        ");
    console.log("                5 - Deletar Produto                          ");
    console.log("                0 - Sair                                     ");
    console.log("                                                             ");
    console.log("*************************************************************");
    console.log("                                                             ");
    console.log(colors.reset);

    while (loop) {

        console.log(colors.fg.green, "\nEntre com a opção desejada: ", colors.reset);
        opcao = rl.questionInt("");

        switch (opcao) {
            case 0: //sair
                console.log(colors.fg.blue ,"\nObrigado por Utilizar nossos serviços incríveis e maravilhosos. Nota 10!\n");
                sobre();
                loop = false;
                break;
            case 1: //Listar todos os produtos
                console.log(colors.fg.bluestrong, "\n*************************Listar Produtos*************************\n", colors.reset);
                produtos.listarTodos();
                break;
            case 2: //Listar produto pelo ID
                console.log(colors.fg.bluestrong, "\n*************************Listar Produtos pelo ID*************************\n", colors.reset);
                console.log("Digite o ID do produto: ");
                id = rl.questionInt("");
                produtos.listarPorId(id);
                break;
            case 3: //Cadastrar Produto
                console.log(colors.fg.bluestrong, "\n*************************Cadastrar Produto*************************\n", colors.reset);
                console.log("Digite o nome");
                nome = rl.question("");
                console.log("Digite o preco");
                preco = rl.questionInt("");
                console.log("Digite a descricao");
                descricao = rl.question("");
                console.log("Digite o estoque");
                estoque = rl.questionInt("");
                console.log("Digite o tipo");
                tipo = rl.keyInSelect(tipoProdutos, "", {cancel: false}) + 1;
                

                switch(tipo) {
                    case 1:
                        console.log("esta quente? ");
                        quente = rl.keyInYNStrict();
                        produtos.cadastrarProduto(new Pao(produtos.gerarId(), nome, preco, descricao, 1, estoque, quente))
                        break;
                    case 2:
                        console.log("Digite a validade em dias");
                        validade = rl.questionInt("");
                        produtos.cadastrarProduto(new Bolo(produtos.gerarId(), nome, preco, descricao, 1, estoque, validade))
                        break;
                }
                
                break;
            case 4: //Atualizar Produto
                console.log(colors.fg.bluestrong, "\n*************************Atualizar Produto*************************\n", colors.reset);
                id = rl.questionInt("Digite o ID do produto: ")
                let produto = produtos.buscarNaLista(id);
                if (produto == null) {console.log("Conta não encontrada!\n"); return;};

                console.log("Digite o nome");
                nome = rl.question("");
                console.log("Digite o preco");
                preco = rl.questionInt("");
                console.log("Digite a descricao");
                descricao = rl.question("");
                console.log("Digite o estoque");
                estoque = rl.questionInt("");
                console.log("Digite o tipo");
                tipo = rl.keyInSelect(tipoProdutos, "", {cancel: false}) + 1;
                

                switch(tipo) {
                    case 1:
                        console.log("esta quente? ");
                        quente = rl.keyInYNStrict();
                        produtos.cadastrarProduto(new Pao(id, nome, preco, descricao, 1, estoque, quente))
                        break;
                    case 2:
                        console.log("Digite a validade em dias");
                        validade = rl.questionInt("");
                        produtos.cadastrarProduto(new Bolo(id, nome, preco, descricao, 1, estoque, validade))
                        break;
                }
                
                break;
            case 5: //Deletar Produto
                console.log(colors.fg.bluestrong, "\n*************************Deletar Produto*************************\n", colors.reset);
                id = rl.questionInt("Digite o ID do produto: ");
                produtos.deletarProduto(id);
                break;
            default:
                console.log("\nOpção inválida! Tente novamente\n");
                break;
        }
    }

}

export function sobre(): void {
    console.log(colors.fg.magenta)
    console.log("\n*************************************************************");
    console.log("   Projeto desenvolvido por: Lucas Souza Ribeiro da Silva      ");
    console.log("               lucasouzaribeiro12345@gmail.com                 ");
    console.log("               https://github.com/LucasSrSilva/                ");
    console.log("***************************************************************");
}

main();