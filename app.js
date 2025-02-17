const hortifruti = [];
const laticinios = [];
const congelados = [];
const bebidas = [];
const doces = [];
const proteinas = [];
const outros = [];

function adicionar() {
    let pergunta;
    let continuar = true;
    do {
        pergunta = confirm('Você deseja adicionar um produto à sua lista de compras?');
        if (pergunta === true) {
            let item = prompt('O que você gostaria de adicionar?');
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
        } else {
            continuar = false;
        }
    } while (continuar === true);
     alert('Sua lista de compras:\nHorti-fruti: ' + hortifruti.join(', ') + '\nLaticínios: ' + laticinios.join(', ') + '\nCongelados: ' + congelados.join(', ') + '\nBebidas: ' + bebidas.join(', ') + '\nDoces: ' + doces.join(', ') + '\nProteínas: ' + proteinas.join(', ') + '\nOutros: ' + outros.join(', '));
}

adicionar();