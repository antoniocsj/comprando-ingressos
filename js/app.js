let qtdPista = 0;
let qtdSuperior = 0;
let qtdInferior = 0;

// carregar os valores iniciais das quantidades disponiveis de cada tipo de ingresso
document.addEventListener('DOMContentLoaded', () => {
    qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    console.log(qtdPista, qtdSuperior, qtdInferior);
});

function comprar() {
    // obter o tipo de ingresso e a sua quantidade
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    // validar a quantidade
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Quantidade inválida');
        return;
    }

    console.log(tipoIngresso);
    console.log(quantidade);

    // ao comprar, deve-se subtrair a quantidade comprada do tipo de ingresso determinado
    if (tipoIngresso == 'inferior') {
        if (quantidade <= qtdInferior) {
            qtdInferior -= quantidade;
        } else {
            alert('a quantidade solicitada é superior ao disponível.');
        }
    }
    else if (tipoIngresso == 'superior') {
        if (quantidade <= qtdSuperior) {
            qtdSuperior -= quantidade;
        } else {
            alert('a quantidade solicitada é superior ao disponível.');
        }
    }
    else if (tipoIngresso == 'pista') {
        if (quantidade <= qtdPista) {
            qtdPista -= quantidade;
        } else {
            alert('a quantidade solicitada é superior ao disponível.');
        }
    }

    // atualizar a lista que mostra a quantidade disponível de cada tipo de ingresso
    document.getElementById('qtd-inferior').textContent = qtdInferior;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    document.getElementById('qtd-pista').textContent = qtdPista;

    // limpar o campo quantidade
    document.getElementById('qtd').value = '';
}
