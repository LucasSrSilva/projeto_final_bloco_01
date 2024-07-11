import { Produto } from "./Produto";

export class Bolo extends Produto {
    private _validade: number;


	constructor(id: number, nome: string, preco: number, descricao: string, tipo: number, estoque: number, validade: number) {
        super(id, nome, preco, descricao, tipo, estoque);
		this._validade = validade;
	}

	public get validade(): number {
		return this._validade;
	}

	public set validade(value: number) {
		this._validade = value;
	}

    public vizualizar(): void {
        super.vizualizar();
        console.log("A validade é de: " + this._validade + " dias");
    }
}