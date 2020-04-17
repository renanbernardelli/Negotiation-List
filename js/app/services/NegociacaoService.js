class NegociacaoService {

    constructor() {

        this._http = new HttpService();
    }

    obterNegociacaoDaSemana() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    
                    resolve(negociacoes.map((objeto) => {

                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    }))
                })
                .catch(erro => {

                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana!')
                });
        });
    };

    obterNegociacaoDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    
                    resolve(negociacoes.map((objeto) => {

                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    }))
                })
                .catch(erro => {

                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior!')
                });
        });
    };

    obterNegociacaoDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    
                    resolve(negociacoes.map((objeto) => {

                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    }))
                })
                .catch(erro => {

                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada!')
                });
        });
   };

    enviarNegociacao(negociacao) {

        return new Promise((resolve, reject) => {

            this._http
                .post('/negociacoes', negociacao)
                .then(() => {
                    
                    console.log('negociação salva no servidor!');
                    resolve('Negociação adicionada com sucesso!');
                })
                .catch((erro => {

                    console.log(erro);
                    reject(`Erro ao adicionar negociação: ${erro}!`);
                }))
        })
    }
};