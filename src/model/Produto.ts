export abstract class Produto {
    private _id: number;
    private _nome: string;
    private _preco: number;
    private _descricao: string;
    private _tipo: number;
    private _estoque: number;


    constructor(id: number, nome: string, preco: number, descricao: string, tipo: number, estoque: number) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._descricao = descricao;
        this._tipo = tipo;
        this._estoque = estoque;
    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get preco(): number {
        return this._preco;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public get estoque(): number {
        return this._estoque;
    }

    public set id(value: number) {
        this._id = value;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public set preco(value: number) {
        this._preco = value;
    }

    public set descricao(value: string) {
        this._descricao = value;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public set estoque(value: number) {
        this._estoque = value;
    }

    // public comprar(quantidade: number): void {
    //     this._estoque -= quantidade;
    // }

    // public adicionarEstoque(quantidade: number){
    //     this._estoque += quantidade;
    // }

    public vizualizar() {
        let tipo: string;

        switch(this._tipo){
            case 1:
                tipo = "Pão";
                break;
            case 2:
                tipo = "Bolo";
                break;
            default:
                throw new Error("Há um problema no Tipo de produto");
        }

        console.log("\n*****************************************************\n");
        console.log("                  Informações do produto:                ");
        console.log("\n*****************************************************\n");
        console.log("ID do produto: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Descrição do produto: " + this.descricao);
        console.log("Estoque: " + this._estoque);
        console.log("Tipo de produto: " + tipo);
        console.log("Preço: " + this._preco.toFixed(2));
    }
}