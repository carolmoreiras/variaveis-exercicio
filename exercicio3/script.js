

const nomeCompleto = prompt("Nome Completo?")
const diaNascimento = prompt("Que dia você nasceu?")
const mesNascimento = prompt("Que mês você nasceu?")
const anoNascimento = prompt("Que ano você nasceu?")
const dataNascimento = `${diaNascimento}/${mesNascimento}/${anoNascimento}`
const endereco = prompt("Endereço?")
const cpf = prompt("CPF?")
const escolaridade = prompt("Escolaridade?")
const possuiCnh = prompt("Possui CNH?")
const quantidadeFilhos = Number(prompt("Quantos filhos possui?"))
const cargoAtual = prompt("Cargo Atual?")
const salario = Number(prompt("Salário?")).toLocaleString(
    'pt-BR', 
    {
        style: 'currency', 
        currency: 'BRL'
    }
)
const comissao = prompt("Recebe comissão? se sim, informe a porcentagem, caso não, responda com zero?")
const anoAdmissao = Number(prompt("Informe o ano de admissão?"))

console.log(`Tipo nomeCompleto`, typeof nomeCompleto)
console.log(`Tipo dataNascimento`, typeof dataNascimento)
console.log(`Tipo endereco`, typeof endereco)
console.log(`Tipo cpf`, typeof cpf)
console.log(`Tipo escolaridade`, typeof escolaridade)
console.log(`Tipo possuiCnh`, typeof possuiCnh)
console.log(`Tipo quantidadeFilhos`, typeof quantidadeFilhos)
console.log(`Tipo cargoAtual`, typeof cargoAtual)
console.log(`Tipo salario`, typeof salario)
console.log(`Tipo comissao`, typeof comissao)
console.log(`Tipo anoAdmissao`, typeof anoAdmissao)

console.log(`nomeCompleto`, nomeCompleto)
console.log(`dataNascimento`, dataNascimento)
console.log(`endereco`, endereco)
console.log(`cpf`, cpf)
console.log(`escolaridade`, escolaridade)
console.log(`possuiCnh`, possuiCnh)
console.log(`quantidadeFilhos`, quantidadeFilhos)
console.log(`cargoAtual`, cargoAtual)
console.log(`salario`, salario)
console.log(`comissao`, comissao)
console.log(`anoAdmissao`, anoAdmissao)