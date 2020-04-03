class NegociacaoService {

    obterNegociacaoDaSemana() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest;

            xhr.open('GET', 'negociacoes/semana');

            /* estados AJAX 
            
            0: requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição concluída e a resposta está pronta

            */

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {
                    
                    if (xhr.status == 200) {
                        
                        console.log('Obtendo as negociações do servidor');
                        console.log(JSON.parse(xhr.responseText));
                        
                        resolve(JSON.parse(xhr.responseText).map((objeto) => {

                            return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);

                        }));
                    }
                    else {

                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana!');
                    };
                };
            };

            xhr.send();
        });
    };

    obterNegociacaoDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest;

            xhr.open('GET', 'negociacoes/anterior');

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {
                    
                    if (xhr.status == 200) {
                        
                        console.log('Obtendo as negociações do servidor');
                        console.log(JSON.parse(xhr.responseText));
                        
                        resolve(JSON.parse(xhr.responseText).map((objeto) => {

                            return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);

                        }));
                    }
                    else {

                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana anterior!');
                    };
                };
            };

            xhr.send();
        });
    };

    obterNegociacaoDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest;
    
            xhr.open('GET', 'negociacoes/retrasada');
    
            xhr.onreadystatechange = () => {
    
                if (xhr.readyState == 4) {
                    
                    if (xhr.status == 200) {
                        
                        console.log('Obtendo as negociações do servidor');
                        console.log(JSON.parse(xhr.responseText));
                        
                        resolve(JSON.parse(xhr.responseText).map((objeto) => {
    
                            return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
    
                        }));
                    }
                    else {
    
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana retrasada!');
                    };
                };
            };
    
            xhr.send();
        });
   };
};