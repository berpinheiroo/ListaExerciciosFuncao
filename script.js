// EXERCICIO 1 ---------------------------------------------

/* Uma empresa comercial quer um programa para controlar o orçamento de seus
projetos. Crie uma função para criar um projeto, essa função deve solicitar ao
usuário o nome do projeto e o seu orçamento total. Crie também uma função que
recebe 3 parâmetros: o nome do projeto, um valor e o tipo de despesa (“R” - receita
e “D” - despesa), uma receita deve ser somada ao saldo e uma despesa subtraída
do saldo, seu código deve impedir uma despesa maior que o saldo disponível e no
final exibir o saldo atual desse projeto. */

/*let orcamentoTotal = []
let nomeProjeto = []
let index = 0

function CriarProjeto(){
    nomeProjeto.push(prompt("Insira o nome do projeto"))
    orcamentoTotal.push(parseIntprompt("Insira o orcamento total do projeto"))
}

let tipoDespesa

function AtualizarProjeto(nome, valor, tipoDespesa){
   let index = nomeProjeto.indexOf(nome)
   if(tipoDespesa == "r"){
    orcamentoTotal[index] = orcamentoTotal[index] + valor
   } else if(valor <= orcamentoTotal[index]){
    orcamentoTotal[index] = orcamentoTotal[index] - valor
   }
   console.log(orcamentoTotal[index])
}

let continuar = "s"
while(continuar == "s"){
    let opcao = prompt("Deseja criar ou atualizar um projeto? 1 = criar; 2 = atualizar")
    if(opcao == "1"){
        CriarProjeto()
    } else {
        let nomeProjeto = prompt("Insira o nome do projeto que deseja atualizar ")
        let valor = parseInt(prompt("Insira o valor que deseja atualizar"))
        let despesa = prompt("Insira o tipo de despesa r ou d")
        AtualizarProjeto(nomeProjeto, valor, despesa)
    }
    continuar = prompt("Deseja continuar sim ou nao? 's' para sim")
}*/


// EXERCICIO 2 ---------------------------------------------

/*Faça uma função que verifique se um número é perfeito ou não. Um valor é dito
perfeito quando ele é igual a soma dos seus divisores. Ex.: 6 é perfeito, 6 = 1 + 2 +
3, que são seus divisores. A função deve retornar um valor booleano.*/

/*function Verificar(){
    let divisores = []
    let numero = parseInt(prompt("Insira um numero a verificar"))
    for(let index = 1; index < numero; index++){
        if(numero % index == 0){
            divisores.push(index)
        }
    }
    let perfeito = 0
    divisores.forEach(x => {
        perfeito = perfeito + x
        console.log(perfeito)
    })
    
    if(perfeito == numero) {
        return true
    } else {
        return false
    }
}*/


// EXERCICIO 3 ---------------------------------------------

/* A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando
dados sobre o salário e o número de filhos. A prefeitura deseja saber:
a. A média do salário da população;
b. A média do número de filhos;
c. O maior salário;
d. A porcentagem de pessoas com salários até R$1.500,00
Salve os dados dos habitantes em arrays, crie uma função para cada item que
retorna o que é pedido. */

/*let salarios = [1000, 1200, 1500, 2000, 2200, 4000]
let filhos = [0, 1, 3, 2, 0, 4]

function CalcularMediaSalarial(){
    let media = 0
    salarios.forEach(salario => media = salario + media)
    media = media / salarios.length
    return media
}

function CalcularMediaFilhos() {
    let media = 0
    filhos.forEach(x => media = x + media)
    media = media / filhos.length
    return media
}

function VerificarMaiorSalario() {
    let maiorSalario = 0
    salarios.forEach(x => {
        if(x > maiorSalario){
            maiorSalario = x
        }
    })

    return maiorSalario
}

function CalcularPorcentagem(){
    let porcentagem = 0
    let salariosAte1500 = 0
    salarios.forEach(salario => {
        if(salario <= 1500){
            salariosAte1500++
        }
    })

    porcentagem = salariosAte1500 / salarios.length
    return porcentagem*100 + "%"
}

console.log(CalcularMediaSalarial())
console.log(CalcularMediaFilhos())
console.log(VerificarMaiorSalario())
console.log(CalcularPorcentagem() + "%") */

// EXERCICIO 3 ---------------------------------------------

/* Crie uma função que recebe 3 notas de um aluno como parâmetro e uma letra. Se a
letra for A a função calcula a média aritmética das notas do aluno, se for P, a sua
média ponderada (pesos: 5, 3 e 2). A média calculada deve ser retornada */

function CalcularMedia(nota1, nota2, nota3, media){
    let mediaAritmetica = 0
    let mediaPonderada = 0
    if(media == "a"){
        mediaAritmetica = (nota1 + nota2 + nota3) / 3
        return mediaAritmetica
    } else {
        mediaPonderada = ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) / 10
        return mediaPonderada
    }
}