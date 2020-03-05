class DateHelper {

    //! Um método "static" é invocado para que não haja necessidade de sempre instanciar a classe para chamar o método.
    //! É interessante criar um construtor com a palavra "throw" onde é possível informar que a classe não pode ser istanciada

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

    static textoParaData(texto) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd')
        }
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }

}