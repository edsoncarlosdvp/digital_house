console.log("Hello World!")

var nome = "Rafael"

console.log("Olá! " + nome + "!")

var numero1 = 15
var numero2 = 10
var soma = numero1 + numero2

console.log("A soma entre " + numero1 + " e " + numero2 + " é: " + soma)

var subtracao = numero1 - numero2

console.log("A subtração entre " + numero1 + " e " + numero2 + " é: " + subtracao)

var multiplicacao = numero1 * numero2

console.log("A subtração entre " + numero1 + " e " + numero2 + " é: " + multiplicacao)

var divisao = numero1 / numero2

var resto = numero1 % numero2
console.log("O resto da divisão é: " + resto)

console.log("A subtração entre " + numero1 + " e " + numero2 + " é: " + divisao)

var idade = 17

if(idade >= 18){
    console.log("Você é maior de idade!")
}else{
    console.log("Você é menor de idade!")
}

/*
> maior
< menor 
>= maior ou igual
<= menor ou igual
== igual 
!= diferente

&& E (ambas precisam ser verdadeiras para que toda expressão seja)
|| OU (se uma for verdadeira, toda expressão torna-se verdadeira)

*/

/*
Voto obrigatório: >= 18 e < 65
Voto facultativo: >= 16 e < 18 e >=65
Não pode votar: < 16
*/

var idade = 17

if(idade < 16){
    console.log("Não pode votar!")
} else{
    if(idade >= 18 && idade < 65){
        console.log("Voto obrigatório!")
    }else{
        console.log("Voto facultativo!")
    }
}

var numero = -2

if(numero < 0){
    console.log("Este número é negativo")
}else{
    console.log("Este número é positivo")
}

var resto = 2 % 2

if(resto == 0){
    console.log("Este número é par")
}else{
    console.log("Este número é ímpar")
}