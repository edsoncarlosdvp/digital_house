function envio() {
    var nome = document.querySelector("#nome").value
    var cidade = $("#cidade").val()

    $.ajax({
        method: "POST",
        url: "http://localhost:3000/usuarios",
        data: {
            "id": 10,
            "nome": nome,
            "cidade": cidade
        },
        sucess: function () {
            alert("Dados salvos com sucesso!")
        },
        error: function () {
            alert("Ocorreu um erro inesperado!")
        }
    })
}