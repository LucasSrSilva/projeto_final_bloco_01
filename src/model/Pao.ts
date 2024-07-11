import { Produto } from "./Produto";

export class Pao extends Produto {
    private _quente: boolean;


	constructor(id: number, nome: string, preco: number, descricao: string, tipo: number, estoque: number, quente: boolean) {
        super(id, nome, preco, descricao, tipo, estoque);
		this._quente = quente;
	}


	public get quente(): boolean {
		return this._quente;
	}

	public set quente(value: boolean) {
		this._quente = value;
	}

    public vizualizar(): void {
        super.vizualizar();
        this._quente ? console.log("O pão está quentinho! Aproveite para comprar!") : console.log("O pão é de ontem :( ");
    }
}