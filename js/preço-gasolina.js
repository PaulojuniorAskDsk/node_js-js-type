/*faça um programa para calcular um gasto de uma viagem.
se utilizando do const/let e operadores
suas variaveis são:
1- preço do combustivel
2- gasto medio de combustivel por km
3- distancia percorrida em km*/

const valorDaGasolina = 5.60;
const kmRodadoVeiculo = 2.5;
const distanciaPercorrida = 100;
let gastoDoCarro = valorDaGasolina/kmRodadoVeiculo

let valorFormatado = valorGasto.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

console.log("O valor gasto é de:", valorFormatado);