let nome
let age
console.log (typeof nome)
console.log (typeof age)
/*undefined, por que não foi atribuido nenhum valor para nome e 
nenhum valor em age*/

nome=prompt("Qual o seu nome?")
console.log (nome)
age=prompt("Qual a sua idade?")
console.log (age)

console.log (typeof nome)
console.log (typeof age) 
/* 
Atribuindo valores para nome e age foi possivel notar que o
navegador nao distingue numeros de letras. Trata tudo como string.
*/
 
console.log("Olá",nome,", você tem", age, "anos") //separar variáveis por virgula, adiciona espaço
console.log(`Olá ${nome}, você tem ${age} anos`) //separar variaveis por template string a virgula ficou no lugar correto

//Parte 2

const pergunta1 = "Seu mouse é sem fio?"
const pergunta2 = "Você está usando um notebook?"
const pergunta3 = "Está chovendo?"

const resposta1 = prompt(pergunta1)
const resposta2 = prompt(pergunta2)
const resposta3 = prompt(pergunta3)

console.log(pergunta1, "-", resposta1)
console.log(pergunta2, "-", resposta2)
console.log(pergunta3, "-", resposta3)