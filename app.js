const hortifruti = [];
const laticinios = [];
const congelados = [];
const bebidas = [];
const doces = [];
const proteinas = [];
const outros = [];
const lista = [hortifruti, laticinios, congelados, bebidas, doces, proteinas, outros];
let item = '';

function adicionar() {
    let primeiroItem = prompt('O que você deseja adicionar à sua lista de compras?').toLowerCase(); // primeira adição
    item = primeiroItem;
    selecionarCategoria();
    let pergunta;
    let continuar = true;
    do {
        pergunta = prompt('Você deseja adicionar um produto à sua lista de compras, retirar um item da lista ou encerrar? Digite 1 para adicionar, 2 para retirar e 0 para encerrar');
        if (pergunta === '1') {
            let novoitem = prompt('O que você gostaria de adicionar?').toLowerCase();
            item = novoitem;
            selecionarCategoria();
        } else if (pergunta === '2') {
            removerProduto();
        } else if (pergunta === '0') {
            continuar = false;
        } else {
            alert('Operação inválida! Digite 1 para adicionar, 2 para retirar e 0 para encerrar')
        }
    } while (continuar === true);
     alert('Sua lista de compras:\nHorti-fruti: ' + hortifruti.join(', ') + '\nLaticínios: ' + laticinios.join(', ') + '\nCongelados: ' + congelados.join(', ') + '\nBebidas: ' + bebidas.join(', ') + '\nDoces: ' + doces.join(', ') + '\nProteínas: ' + proteinas.join(', ') + '\nOutros: ' + outros.join(', '));
}

function selecionarCategoria() {
    let categoria = parseInt(prompt('Digite o número da categoria: 1 - Horti-fruti, 2 - Laticínios, 3 - Congelados, 4 - Bebidas, 5 - Doces, 6 - Proteínas, 7 - Outros.'));

    if (categoria === 1) {
        hortifruti.push(item);
    } else if (categoria === 2) {
        laticinios.push(item);
    } else if (categoria === 3) {
        congelados.push(item);
    } else if (categoria === 4) {
        bebidas.push(item);
    } else if (categoria === 5) {
        doces.push(item);
    } else if (categoria === 6) {
        proteinas.push(item);
    } else if (categoria === 7) {
        outros.push(item);
    } else {
        alert('Digite o número da categoria!')
    }
}

function removerProduto() {
    let produto = prompt('Qual produto você deseja remover da lista?').toLowerCase();

    for (let i = 0; i < lista.length; i++) {
        let array = lista[i];
        //verifica se o item está no array atual
        let index = array.indexOf(produto);
        if (index !== -1) {
            //remover produto do array
            array.splice(index, 1);
            console.log(`Produto ${produto} removido da lista ${i + 1}`);
        }
    }
    alert('Sua lista de compras:\nHorti-fruti: ' + hortifruti.join(', ') + '\nLaticínios: ' + laticinios.join(', ') + '\nCongelados: ' + congelados.join(', ') + '\nBebidas: ' + bebidas.join(', ') + '\nDoces: ' + doces.join(', ') + '\nProteínas: ' + proteinas.join(', ') + '\nOutros: ' + outros.join(', '));
}

adicionar();