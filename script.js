/* Uma empresa comercial quer um programa para controlar o orçamento de seus
projetos. Crie uma função para criar um projeto, essa função deve solicitar ao
usuário o nome do projeto e o seu orçamento total. Crie também uma função que
recebe 3 parâmetros: o nome do projeto, um valor e o tipo de despesa (“R” - receita
e “D” - despesa), uma receita deve ser somada ao saldo e uma despesa subtraída
do saldo, seu código deve impedir uma despesa maior que o saldo disponível e no
final exibir o saldo atual desse projeto. */

let orcamentoTotal = []
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
}