//Exercício de interpretação de código
//1.
//a) 10
// 50

//b) Mostra que existe um objeto.

//2.
//a) A função retorna a verificação se no texto há a palavra "cenoura", antes converte tudo pra minusculo.
// Também atribui o valor do retunr a uma variável

//b)
//i. true
//ii. true
//iii. true


//Exercícios de escrita de código
//1.
//a)
function retornoTexto(){
    return "Eu sou Daniel, tenho 33 anos, moro em Itaquiraí e sou estudante."
}

console.log(retornoTexto())

//b

function texto(nome, idade, cidade, profissao){
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(texto("Daniel", 33, "Itaquiraí", "Programador"))

//3.
//a)
function soma(numeroUm, numeroDois){
    return numeroDois + numeroUm
}

const resultado = soma(2,3)
console.log(resultado)

//b)
function comparacao(numeroUm, numeroDois){
    return numeroUm >= numeroDois
}

console.log(comparacao(3,4))

//c.
function numeroEhPar(numero){
    return (numero % 2) === 0
}

console.log(numeroEhPar(8))

//d.
function rertornaTamanho(string){
    return `O tamanho da string é ${string.length}, e ela em letras maiúsculas é assim: ${string.toUpperCase()}`
}

console.log(rertornaTamanho("Jogo Ao Vivo"))

//3.
function somaNum(numeroUm, numeroDois){
    return numeroUm + numeroDois
}
function subtraiNum(numeroUm, numeroDois){
    return numeroUm - numeroDois
}
function multiplicaNum(numeroUm, numeroDois){
    return numeroUm * numeroDois
}
function divideNum(numeroUm, numeroDois){
    return numeroUm / numeroDois
}

primeiroNum = Number(prompt("Digite o primeiro número: "))
segundoNum = Number(prompt("Digite o segundo número: "))

console.log(somaNum(primeiroNum, segundoNum))
console.log(subtraiNum(primeiroNum, segundoNum))
console.log(multiplicaNum(primeiroNum, segundoNum))
console.log(divideNum(primeiroNum, segundoNum))

//desafio.
const imprimir = (parametro) => {
    return parametro
}

console.log(imprimir("Star Wars"))

const somaNumeros = (numeroUm, numeroDois) => {
    return soma = numeroUm + numeroDois
}

console.log(imprimir(somaNumeros(2,5)))