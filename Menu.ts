import { LOADIPHLPAPI } from "dns";
import { colors } from "./src/util/Colors";
import rl = require("readline-sync");
import { Pao } from "./src/model/Pao";

export function main(): void {
    let loop: boolean = true;
    let opcao: number;

    const pao1 = new Pao(true, 1, "Pão francês", 1.00, "Gostoso saboroso", 1, 10);
    pao1.vizualizar();
    pao1.adicionarEstoque(10);
    pao1.comprar(2);
    pao1.vizualizar();
    
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
                break;
            case 2: //Listar produto pelo ID
                console.log(colors.fg.bluestrong, "\n*************************Listar Produtos pelo ID*************************\n", colors.reset);
                break;
            case 3: //Cadastrar Produto
                console.log(colors.fg.bluestrong, "\n*************************Cadastrar Produto*************************\n", colors.reset);
                break;
            case 4: //Atualizar Produto
                console.log(colors.fg.bluestrong, "\n*************************Atualizar Produto*************************\n", colors.reset);
                break;
            case 5: //Deletar Produto
                console.log(colors.fg.bluestrong, "\n*************************Deletar Produto*************************\n", colors.reset);
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