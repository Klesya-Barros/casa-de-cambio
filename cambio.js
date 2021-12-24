function criarMoeda(nome, sigla, valor) {
    return {nome, sigla, valor};
}

let moedas = {
    usd: criarMoeda('Dólar', 'USD', 5.74),
    eur: criarMoeda('Euro', 'EUR', 6.47),
    gbp: criarMoeda('Libra', 'GBP', 7.57),
    jpy: criarMoeda('Iene', 'JPY', 0.050),
    ars: criarMoeda('Peso argentino', 'ARS', 0.056),
}

let casa = {
    taxa: 0.10
}

casa.proporCompra = function (moeda, quantidade) {
    let valorAjustado = moeda.valor - (moeda.valor * this.taxa);
    return valorAjustado * quantidade;
}

casa.proporVenda = function (moeda, quantidade) {
    let valorAjustado = moeda.valor * (1 + this.taxa);
    return  valorAjustado * quantidade; 
}

casa.proporTroca = function (moeda1, quantidade1, moeda2, quantidade2) {
    let valorCompra = this.proporCompra(moeda1, quantidade1),
        valorVenda = this.proporVenda(moeda2, quantidade2);
        return valorVenda - valorCompra;
}

casa.criarTabela = function (moedas) {
    let tabela = [];

    for (let moeda in moedas) {
        tabela.push({
            "Moeda": moedas[moeda].nome + ' (' + moedas[moeda].sigla + ')',
            "Valor de venda": this.proporVenda(moedas[moeda], 1),
            "Valor de compra": this.proporCompra(moedas[moeda], 1)
        });

        
        return tabela;
    }
}

console.table(casa.CriarTabela(moedas));