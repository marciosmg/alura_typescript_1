import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
    // Array<Negociação> pode ser escrito também como -> Negociacao[]

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        // ReadOnlyArray<Negociação> pode ser escrito também como -> readonly Negociacao[]
        return this.negociacoes;
    }
}

