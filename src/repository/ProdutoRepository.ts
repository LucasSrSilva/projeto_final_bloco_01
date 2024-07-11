import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    listarTodos(): void;
    listarPorId(id: number): void;
    cadastrarProduto(produto: Produto): void;
    atualizarProduto(produto: Produto): void;
    deletarProduto(id: number): void;

    // comprar(id: number): void;
    // adicionarEstoque(id: number): void;
}