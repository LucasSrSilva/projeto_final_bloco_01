import { log } from "console";
import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Array<Produto> = new Array<Produto>();
    public id: number = 0;

    listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.vizualizar();
        }
    }
    listarPorId(id: number): void {
        let buscaProduto = this.buscarNaLista(id);

        if(buscaProduto !== null){
            buscaProduto.vizualizar();
        }else{
            console.log("\nProduto não encontrado\n");
            
        }

    }
    cadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("Produto cadastrado!")
    }
    atualizarProduto(produto: Produto): void {
        let buscaProduto = this.buscarNaLista(produto.id);

        if(buscaProduto !== null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nO produto foi atualizado!");
        }
        else{
            console.log("\nO produto não foi encontrado!\n");
        }
    }
    deletarProduto(id: number): void {
        let buscaProduto = this.buscarNaLista(id);

        if(buscaProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
            console.log("\nProduto foi excluido!");
        }
        else{
            console.log("\nProduto não encontrado!");
        }
    }
    // comprar(id: number): void {
    //     throw new Error("Method not implemented.");
    // }
    // adicionarEstoque(id: number): void {
    //     throw new Error("Method not implemented.");
    // }

    public gerarId(): number {
        return ++ this.id;
    }

    public buscarNaLista(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if(produto.id === id){
                return produto
            }
        }

        return null;
    }

}