//Exercícios de interpretação de código
/* 
Exercício de leitura 1.
Respostas: 
- False
- False
- True
- Boolean

Exercício de leitura 2.
Resposta:
Em vez de somar, será concatenado os dois valores, pois estão como String.

Exercício de leitura 3.
Resposta:
Para que a soma seja efetuada com sucesso, é necessário inserir a função Number() para transformar o valor que o console.log retorna.
*/

//Exercícios de escrita de código
// Exercício de código 1.
let idade = Number(prompt("Qual é a sua idade? "))
let idadeDoMelhorAmigo = Number(prompt("Qual é a idade do(a) seu(a) melhor amigo(a)? "))
let idadeMaior = idade > idadeDoMelhorAmigo

console.log(idade)
console.log(idadeDoMelhorAmigo)
console.log("Sua idade é maior do que a do seu amigo? ", idadeMaior)


// Exercício de código 2.
let numeroPar = Number(prompt("Insira um número par"))
restoPorDois = numeroPar % 2
console.log("O resto da divisão é: ", restoPorDois) /*o resto da divisão por 2 sempre será zero.*/
/*se o usuário inserir um número impar, o resto será sempre 1.*/


// Exercício de código 3.
let idadeEmAnos = Number(prompt("Quantos anos você tem? "))
idadeEmMeses = idadeEmAnos * 12
idadeEmDias = idadeEmAnos * 365
idadeEmHoras = idadeEmDias * 24

console.log("Sua idade em meses é: ", idadeEmMeses)
console.log("Sua idade em dias é: ", idadeEmDias)
console.log("Sua idade em horas é: ", idadeEmHoras)


// Exercício de código 4.
let primeiroNumero = Number(prompt("Digite o primeiro número: "))
let segundoNumero = Number(prompt("Digite o segundo número: "))

let primeiroMaior = primeiroNumero > segundoNumero
let primeiroIgualSegundo = primeiroNumero === segundoNumero
let primeiroDivisivel = (primeiroNumero % segundoNumero) === 0
let segundoDivisivel = (segundoNumero % primeiroNumero) === 0

console.log("O primeiro numero é maior que segundo? ", primeiroMaior)
console.log("O primeiro numero é igual ao segundo? ", primeiroIgualSegundo)
console.log("O primeiro numero é divisível pelo segundo? ", primeiroDivisivel)
console.log("O segundo numero é divisível pelo primeiro? ", segundoDivisivel)

//DESAFIOS
//Desafio 1.

let kelvin
let fahrenheit
let celsius

fahrenheit = 77
kelvin = (fahrenheit - 32)*(5/9) + 273.15
console.log("77°F valem ", kelvin,"°K")

celsius = 80
fahrenheit = (celsius)*(9/5) + 32   
console.log("80°C valem ", fahrenheit,"°F")

celsius = 30
fahrenheit = (celsius)*(9/5) + 32
kelvin = (fahrenheit - 32)*(5/9) + 273.15
console.log("30°C valem ", fahrenheit,"°F e", kelvin, "°K")

//Desafio 2.
const quilowattHora = 0.05
consumoPorResidencia = Number(prompt("Qual foi a quantidade de quilowatt consumida? ")) 
let valorASerPago = quilowattHora * consumoPorResidencia
let valorComDesconto = valorASerPago * 0.85

console.log("O valor a ser pago com um consumo de", consumoPorResidencia, "quilowatt-hora é:", valorASerPago)
console.log("O valor a ser pago com um desconto de 15% é:", valorComDesconto)

//Desafio 3.

//a)
let librasEmKg = 20 / 2.2046
console.log("20lb equivalem a",librasEmKg, "kg")
//b)
let oncasEmKg = 10.5 / 35.274
console.log("10.5oz equivalem a",oncasEmKg, "kg")
//c)
let milhasEmMetros = 100 / 0.00062137
console.log("100mi equivalem a", milhasEmMetros, "m")
//d)
let pesEmMetros = 50 / 3.2808
console.log("50ft equivalem a", pesEmMetros, "m")
//e)
let galoesEmLitros = 103.56 / 0.26417
console.log("103.56gal equivalem a", galoesEmLitros, "l")
//f)
let valorXicara = Number(prompt("Insira o valor da xícara para conversão em litros: "))
const xicarasEmLitros = valorXicara * 0.24
console.log(valorXicara,"xic equivalem a", xicarasEmLitros,"l")
