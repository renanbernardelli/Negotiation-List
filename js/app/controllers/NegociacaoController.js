class NegociacaoController {

    constructor() {

        const $ = document.querySelector.bind(document);
    
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._negociacaoView = new NegociacoesView($('#negociacao-view'));

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacaoView,
            ['adiciona', 'esvazia']
        );
        
        this._mensagemView = new MensagemView($('#mensagem-view'))

        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            ['texto']
        );
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        this._mensagem.texto = 'Negociação efetuada com sucesso!';

        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    apaga() {
        
        this._listaNegociacoes.esvazia();
        
        this._mensagem.texto = 'Negociações apagadas com sucesso!';
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}

/*
        console.log(typeof(this._inputData.value));//! O valor retornado pelo input é uma strig

        //* É preciso transformar a string em DATA para enviar ao construtor da classe Negociacao.

        //? Primeiro método é transformar a string em array:
        const data = new Date(this._inputData.value.split('-'));
        console.log(data);

        //? Segundo método é trocar os "-" por "," usando expressão regular.
        const data1 = new Date (this._inputData.value.replace(/-/g, ',')); //(o "g" significa global)
        console.log(data1);

        //? Terceiro método é gerar um spread "..." para desmembrar a array e aplicar o método "map()"
        const data2 = new Date(...this._inputData.value.split('-').map((item, indice)=>{
            return item - indice % 2;
        }));
        console.log(data2);
        //! ao usar uma arrow function com apenas uma instrução, é possível deixar o código ainda mais simples: 
        const data3 = new Date(...this._inputData.value.split('-').map((item, indice) => item - indice % 2));
        console.log(data3);
*/