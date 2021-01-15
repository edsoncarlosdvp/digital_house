function somar() {
    var numero1 = 10
    var numero2 = 20
    resultado = numero1 + numero2

    console.log("O resultado da soma é: " + resultado)
}

somar(10, 40)

function boasVindas() {
    alert("Seja bem-vindo, você pressionou  o botão cinza!")
}

function boasVindasLog() {
    alert("Seja bem-vindo, você pressionou  o botão cinza!")
}

function verificaMudançadeTexto() {
    alert("Seja bem-vindo, houve uma mudança!")
}

// CALCULADORA

function limparParcial() {
    var num1 = document.querySelector("#num1").value = ""
    var num2 = document.querySelector("#num2").value = ""
    var opc = document.querySelector("#operacao").value = ""
}

function limpar() {
    var num1 = document.querySelector("#num1").value = ""
    var num2 = document.querySelector("#num2").value = ""
    var opc = document.querySelector("#operacao").value = ""
    document.querySelector("#resultado").value = ""
}

function calcular() {
    var num1 = document.querySelector("#num1").value
    var num2 = document.querySelector("#num2").value
    var opc = document.querySelector("#operacao").value
    var res

    if (num1 == "" || num2 == "") {
        alert("Digite os valores para efetuar o cálculo.")
    } else {

        switch (opc) {
            case "adi":
                res = Number(num1) + Number(num2)
                break
            case "sub":
                res = Number(num1) - Number(num2)
                break
            case "mult":
                res = Number(num1) * Number(num2)
                break
            case "div":
                if (num2 == 0) {
                    alert("Não divisível por 0");
                    return false;
                }
                res = Number(num1) / Number(num2)
                break
            default:
                alert("Escolha uma operação válida!")
        }
        limparParcial()
        document.querySelector("#resultado").value = res
    }
}