// Exercícios e interpretação de código
// 1.
// a) Matheus Nachtergaele  
// Virginia Cavendish
// canal: "Canal Brasil", horario: "19h"


//2.
//a) nome: "Juca", idade: 3, raca: "SRD"
//   nome: "Juba", idade: 3, raca: "SRD"
//   nome: "Jubo", idade: 3, raca: "SRD"

//b) Os três pontos copiam as informação do objeto/array em questão para o que está sendo construído.


//3.
//a) Live enable reaload, diz que a propriedade existe no objeto.
//b) Retorna false pois não existe a propriedade "altura" no objeto pessoa.


//Exercícios de escrita de código
//1.

function imprimeNome(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`)
}

const pessoa = {
    nome: "Daniel",
    apelidos: ["Dani","Dan", "Daniboy"]
}

const outrosApelidos = {
    ...pessoa,
    apelidos: ["Dandan", "Adam", "Tesouro"]
}

imprimeNome(pessoa)
imprimeNome(outrosApelidos)

//2.
const primeiraPessoa = {
    nome: "Marcos",
    idade: 29,
    profissao: "Analista de BI"
}

const segundaPessoa = {
    nome: "Sabrina",
    idade: 28,
    profissao: "Professora"
}

function retornaValor(objeto){
    const texto = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    return texto
}

console.log(retornaValor(primeiraPessoa))
console.log(retornaValor(segundaPessoa))

//3.
const carrinho = []

const fruta1 = {
    nome: "banana",
    disponibilidade: true
}
const fruta2 = {
    nome: "mamao",
    disponibilidade: true
}
const fruta3 = {
    nome: "laranja",
    disponibilidade: false
}

function carrinhoFruta(objeto){
    carrinho.push(objeto)
}

carrinhoFruta(fruta1)
carrinhoFruta(fruta2)
carrinhoFruta(fruta3)

console.log(carrinho)


//desafio
//1

function questionario(){
    const nome = prompt("Digite seu nome: ")
    const idade = Number(prompt("Digite sua idade: "))
    let profissao = prompt("Digite sua profissão: ")

    return pessoaNova = {
        Nome: nome,
        idade: idade,
        profissao: profissao
    }

}

questionario()
console.log(pessoaNova)
console.log(typeof pessoaNova)

//2

const primeiroFilme = {
    nome: "Jumaji",
    lancamento: 1995
}
const segundoFilme = {
    nome: "Interstellar",
    lancamento: 2014
}

function filmes(primeiro, segundo){
    const lancadoPrimeiro = primeiro.lancamento>segundo.lancamento
    const lancadoIgual = primeiro.lancamento===segundo.lancamento

    return "O primeiro filme foi lançado antes do segundo? " + lancadoPrimeiro + "\n" + 
    "O primeiro filme foi lançado no mesmo ano do segundo? " + lancadoIgual

}

console.log(filmes(primeiroFilme,segundoFilme))

//3
function disponibilidadeFruta(objeto){
    disponivel = !objeto.disponibilidade
    return disponivel
}

console.log(disponibilidadeFruta(fruta1))