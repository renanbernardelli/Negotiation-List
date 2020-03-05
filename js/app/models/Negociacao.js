class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime()); //!programação defensiva, pois é um objeto dentro de outro objeto.
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(); //! esse método proteje apenas este objeto, não proteje objetos dentro dele.
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}

/* 

    //! Dessa forma está gerando um método para acessar a propriedade. Deve-se udar "o nome do inteiro do método para acessá-la. Ex: getData(), get Quantidade()"... Mas essa não é a melhor forma de acessá-la.

    getVolume() {
        return this._quantidade * this._valor;
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade
    }

    getValor() {
        return this._valor;
    }

    //! Então para acessar as propriedades, a melhor forma é usando o "getter" e "setter". Dessa forma é possível acessar a propriedade escrevendo os métodos sem os "()".

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());//! retorna uma cópia da propriedade como forma de segurança.
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
*/