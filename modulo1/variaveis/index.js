/* Questão 1.
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Resposta:
    10
    10,5
*/

/* Questão 2.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

Resposta:

    10, 10, 10
*/

/* Questão 3.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

Resposta:

    let cargaHoraria = prompt("Quantas horas você trabalha por dia?")
    let valorDoDia = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${valorDoDia/cargaHoraria} por hora`)
*/

// Exercício 1.

let nome
let idade

console.log(typeof(nome))
console.log(typeof(idade))

// As duas variáveis são do tipo undefined pois não tem nenhnum tipo atribuído à elas.

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log("Olá nome", nome, "você tem", idade, "anos.")

// Exercício 2.

let aulaHoje = prompt("Você tem aula hoje?")
let banhoDiario = prompt("Você tomou banho hoje?")
let trabalho = prompt("Você trabalhou hoje?")

console.log("Você tem aula? -", aulaHoje)
console.log("Você tomou banho hoje? -", banhoDiario)
console.log("Você trabalhou hoje? -", trabalho)

// Exercício 3.

let a = prompt("Digite o valor de a")
let b = prompt("Digite o valor de b")
let c

a = Number(a)
b = Number(b)
c = Number(c)

// Aqui faremos uma lógica para trocar os valores

c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 

// Desafio

let primeiroValor = prompt("Digite o primeiro valor: ")
let segundoValor = prompt("Digite o segundo valor: ")

primeiroValor = Number(primeiroValor)
segundoValor = Number(segundoValor)
let soma = primeiroValor + segundoValor
let multiplicacao = primeiroValor * segundoValor

console.log("O primeiro valor somado ao segundo valor resulta em", soma)
console.log("O primeiro valor multiplicado ao segundo valor resulta em", multiplicacao)
