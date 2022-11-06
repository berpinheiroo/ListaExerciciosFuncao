/*Uma empresa comercial quer um programa para controlar o orçamento de seus
projetos. Crie uma função para criar um projeto, essa função deve solicitar ao
usuário o nome do projeto e o seu orçamento total. Crie também uma função que
recebe 3 parâmetros: o nome do projeto, um valor e o tipo de despesa (“R” - receita
e “D” - despesa), uma receita deve ser somada ao saldo e uma despesa subtraída
do saldo, seu código deve impedir uma despesa maior que o saldo disponível e no
final exibir o saldo atual desse projeto.*/

/*let nome = prompt("Digite o nome do projeto")
let orcamento = parseInt(prompt("Qual o orcamento deste projeto"))
let tipoDespesa = parseInt(prompt("Qual o tipo da despesa? 1 para receita ou 2 para despesa"))
let valor = parseInt(prompt("Insira um valor para a despesa/receita"))

function CriarProjeto(nome, orcamento){
    console.log("O projeto:", nome, "tem um orcamento de", orcamento, "R$")
    return orcamento
}

function CriarProjeto2(nome, valor, tipoDespesa){
    if(tipoDespesa == "1"){
        orcamento = orcamento + valor
        console.log("Apos as receitas, o orcamento do", nome, "e de:", orcamento)
    } else if(tipoDespesa == "2" && valor < orcamento){
        orcamento = orcamento - valor
        console.log("Apos as despesas, o orcamento do", nome, "e de:", orcamento)
    } else if(valor > orcamento){
        console.log("Nao tem dinheiro suficiente, faltam", (valor - orcamento), "R$")
    }
}

CriarProjeto(nome, orcamento, valor, tipoDespesa)
CriarProjeto2(nome, valor, tipoDespesa)*/