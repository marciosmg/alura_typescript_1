export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // Array<Negociação> pode ser escrito também como -> Negociacao[]
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // ReadOnlyArray<Negociação> pode ser escrito também como -> readonly Negociacao[]
        return this.negociacoes;
    }
}
