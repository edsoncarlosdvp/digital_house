if((numero % 2) != 0){
    console.log("Número ímpar!")
}else{
    console.log("Número par!")
}

var numero = 5
numero % 2 == 0 ? console.log("Número é par!") : console.log("Número é ímpar!")

var idade = 15
var mensagem = idade >= 18 ? "Seja bem vindo!" : "Fora daqui!"

console.log(mensagem)

var primeiraValidacao = true
var segundaValidacao = false

var acesso = primeiraValidacao ? segundaValidacao ? "2 - Acesso Permitido" : "2 - Acesso Recusado" : "1 - Acesso Recusado"

console.log(acesso)

var fruta = "mamão"

switch(fruta){
    case "abacaxi":
        console.log("É um abacaxi")
        break
        
    case "mamão":
        console.log("É mamão")
        break
    default:
        console.log("É outra fruta")
}

var cargo = "gerente"
var salario = 3000

switch (cargo){
    case "gerente": salario *= 1.15
    break

    case "supervisor": salario *= 1.10
    break

    default:
        salario *= 1.05
}

console.log(`Cargo: ${cargo}. Salário: ${salario.toFixed(2)}`)

var mes = "abril"

switch (mes) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
    case "março":
        console.log("Verão")
        break;
    
    case "abril":
    case "maio": 
    case "junho":
        console.log("Outono")
        break;

    case "julho":
    case "agosto":
    case "setembro":
        console.log("Inverno")
        break;

    case "outubro":
    case "novembro":
        console.log("Primavera")
        break;

    default:
        console.log("Não é um mês!")
        break;
}

var mes2 = "julho"

if(mes2 == "janeiro" || mes2 == "fevereiro" || mes2 == "março"){
    console.log("Estamos no Verão")
}else if(mes2 == "abril" || mes2 == "maio" || mes2 == "junho"){
    console.log("Estamos no Outono")
}else if(mes2 == "julho" || mes2 == "agosto" || mes2 == "setembro"){
    console.log("Estamos no Inverno")
}else if(mes2 == "outubro" || mes2 == "novembro" || mes2 == "dezembro"){
    console.log("Estamos no Primavera")
}else{
    console.log("Mês esquisito esse hein!")
}