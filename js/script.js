//Perguntando número
let numero = window.prompt('Qual o seu número?');
numero = Number(numero);
//Titulo
const numeroTitulo = document.getElementById('numero-titulo');
const numeroTexto = document.getElementById('texto');
numeroTitulo.innerHTML = numero;

//Raiz Quadrada
const raizNumero = document.getElementById('raizQuadrada');
raizNumero.innerHTML = numero ** (0.5);

//Numero inteiro
const mostraNumero = document.getElementById('numeroeinteiro')
mostraNumero.innerHTML = numero;
const numeroInteiro = document.getElementById('inteiro');
numeroInteiro.innerHTML = Number.isInteger(numero);

//Numero NaN
const numeroeNan = document.getElementById('numeronan');
numeroeNan.innerHTML = Number.isNaN(numero);

//Arredondando para cima
const arredondaCima = document.getElementById('numeroCima');
arredondaCima.innerHTML = Math.ceil(numero);

//Arredondando para baixo
const arredondaBaixo = document.getElementById('numeroBaixo');
arredondaBaixo.innerHTML = Math.floor(numero);

//Duas casas decimais
const duasCasas = document.getElementById('numeroDecimal');
duasCasas.innerHTML = numero.toFixed(2);