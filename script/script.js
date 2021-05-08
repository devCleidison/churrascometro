let qtdAdultos = document.getElementById('adultos');
let qtdCriancas = document.getElementById('criancas');
let qtdDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

let popup = document.getElementById('popup');
let inputFomr = document.getElementById('input-form');

function calcular() {
	let adultos = qtdAdultos.value;
	let criancas = qtdCriancas.value;
	let duracao = qtdDuracao.value;

	let qtdTotalCarne = totalCarnePP(duracao) * adultos + (totalCarnePP(duracao) / 2 * criancas);
	let qtdTotalCerveja = totalCervejaPP(duracao) * adultos;
	let qtdTotalBebidas = totalBebidaPP(duracao) * adultos + (totalBebidaPP(duracao) / 2 * criancas);

	resultado.innerHTML = `<h1>Lista de compras</h1>`
	resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
	resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja</p>`
	resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's de 2L de Bebidas</p>`

	inputFomr.hidden = true;
	popup.hidden = false;
}

function totalCarnePP(duracao) {
	if (duracao >= 6) {
		return 650
	} else {
		return 400;
	}
}
function totalCervejaPP(duracao) {
	if (duracao >= 6) {
		return 2000;
	} else {
		return 1200;
	}
}
function totalBebidaPP(duracao) {
	if (duracao >= 6) {
		return 1500;
	} else {
		return 1000;
	}
}

function ocultarPopup() {
	inputFomr.hidden = false;
	popup.hidden = true;

	qtdAdultos.value = '';
	qtdCriancas.value = '';
	qtdDuracao.value = '';
}

function pesquisar() {
	let pesquisa = 'https://www.google.com/search?q=supermercado';
	window.open(pesquisa);
}
