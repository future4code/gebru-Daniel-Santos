// Exercicio de leitura de código
// 1.
// a. undefined
// b. null
// c. 11
// d. não é um array
// e. 19
// f. array is not defined

//2. SUBI NUM ÔNIBUS EM MIRROCOS
// primeiro a string foi convertida por completo em maiúsculo e depois todos os "A" foram substituídos por "I".

// Exercícios de escrita de código
// 1.
const nome = prompt("Digite seu nome:")
const email = prompt("Digite seu e-mail:")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o) ${nome}!`)

//2.
let comidasPreferidas = ["macarrão", "frango frito", "churrasco", "chocolate", "sorvete"]
console.log(comidasPreferidas)
console.log(`Estas são minhas comidas preferidas:\n${comidasPreferidas[0]}\n${comidasPreferidas[1]}\n${comidasPreferidas[2]}\n${comidasPreferidas[3]}\n${comidasPreferidas[4]}`)

//3.
let listaDeTarefas = []
listaDeTarefas.push(prompt("Digite a primeira tarefa: "))
listaDeTarefas.push(prompt("Digite a segunda tarefa: "))
listaDeTarefas.push(prompt("Digite a terceira tarefa: "))
console.log(listaDeTarefas)

let itemRemovido = Number(prompt("Digite um indice a ser removido."))
listaDeTarefas.splice(itemRemovido, 1)
console.log(listaDeTarefas)