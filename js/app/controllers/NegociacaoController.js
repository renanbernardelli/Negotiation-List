class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ordemAtual = '';
         
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem');
       
        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');

        this._service = new NegociacaoService();
        
    }
    
    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso'; 
        
        this._service.enviarNegociacao(this._criaObjetoNegociacao());
        console.log(this._criaObjetoNegociacao);
        
        this._limpaFormulario();
    }

    importaNegociacoes() {

        Promise.all([
            this._service.obterNegociacaoDaSemana(),
            this._service.obterNegociacaoDaSemanaAnterior(),
            this._service.obterNegociacaoDaSemanaRetrasada()
        ])
        .then(negociacoes => {
            
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => {
                    this._listaNegociacoes.adiciona(negociacao)
                });
            this._mensagem.texto = 'Negociações importadas com sucesso!'
        })
        .catch(error => this._mensagem.texto = error);

    };
    
    ordena(coluna) {

        if (this._ordemAtual == coluna) {
            
            this._listaNegociacoes.inverteOrdem();
        }
        else {

            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
    };

    apaga() {
        
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    };
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    };
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    };

    _criaObjetoNegociacao() {

        const negociacao = {
            data: DateHelper.textoParaData(this._inputData.value),
            quantidade: this._inputQuantidade.value,
            valor: this._inputValor.value
        }

        return negociacao;
    }
};