// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaDoRetangulo = Number(prompt("Digite a altura do retangulo: ")) 
  const larguraDoRetangulo = Number(prompt("Digite a largura do retangulo: ")) 
  const areaDoRetangulo = alturaDoRetangulo * larguraDoRetangulo

  console.log(areaDoRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual: "))
  let anoNascimento = Number(prompt("Digite o ano do seu nascimento: "))
  let idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let IMC = peso / (altura * altura)
 
  return IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nomeUsuario = prompt("Digite seu nome:")
  const idadeUsuario = prompt("Digite sua idade:")
  const emailUsuario = prompt("Digite seu e-mail:")
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log("Meu nome é " + nomeUsuario + ", tenho " + idadeUsuario + " anos, e o meu email é " + emailUsuario + ".")

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let primeiraCor = prompt("Digite sua primeira cor favorita: ")
  let segundaCor = prompt("Digite sua segunda cor favorita: ")
  let terceiraCor = prompt("Digite sua terceira cor favorita: ")
  let coresFavoritas = [primeiraCor,segundaCor,terceiraCor]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let lastElement = array[array.length - 1]
  return array[lastElement]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  // console.log(array)
  let provisorio = array.pop()
  // console.log(array)  
  array[array.length] = array[0]
  // console.log(array)
  array[0] = provisorio
  // console.log(array)


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const igualdade = string1.toUpperCase() === string2.toUpperCase()
  return igualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtualRG = Number(prompt("Em que ano estamos? "))
  const anoNascimentoRG = Number(prompt("Em que ano você nasceu? "))
  let emissaoRG = Number(prompt("Em que ano sua carteira de identidade foi emitida? "))
  
  let renovaEmCinco = (anoAtualRG - anoNascimentoRG) <= 20 && (anoAtualRG - emissaoRG) >= 10
  let renovaEmDez = (anoAtualRG - anoNascimentoRG) > 20 && (anoAtualRG - anoNascimentoRG) <= 50 && (anoAtualRG - emissaoRG) >= 10
  let renovaEmQuinze = (anoAtualRG - anoNascimentoRG) > 50 && (anoAtualRG - emissaoRG) >= 15

  console.log(renovaEmCinco || renovaEmDez || renovaEmQuinze)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 400 === 0){
    return true
  } else if (ano % 4 === 0 && (ano % 100 !== 0 && ano % 400 === 0)){
      return true
  }
    else{
      return false
    }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  alert("Digite Sim ou Não para as perguntas seguir")
  const idadeLabenu = prompt("Você tem mais de 18 anos? ")
  const ensinoMedio = prompt("Você possui ensino ensino médio? ")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? ")

  idadeLabenu = idadeLabenu.toLocaleUpperCase()
  ensinoMedio = ensinoMedio.toLocaleUpperCase()
  disponibilidade = disponibilidade.toLocaleUpperCase()

  let apto = (idadeLabenu === "SIM" && ensinoMedio === "SIM" && disponibilidade === "SIM")
  
  console.log(apto)

}