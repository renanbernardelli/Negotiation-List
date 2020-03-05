class ListaNegociacoes {

    constructor() {
        this._listaNegociacoes = [];
    }

    adiciona(negociacao) {
        this._listaNegociacoes.push(negociacao);
    }

    esvazia() {
        this._listaNegociacoes = [];
    }

    get negociacoes(){
        return [].concat(this._listaNegociacoes); //! progração defensiva usada para retornar uma cópia da lista (array vazio concatenado com minha lista), evitando qualquer modificação nela.
    }
}