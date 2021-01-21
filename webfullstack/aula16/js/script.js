function envio() {
    var nome = document.querySelector("#nome").value
    var cidade = $("#cidade").val()

    $.ajax({
        method: "POST",
        url: "http://localhost:3000/usuarios",
        data: {
            "id": 13,
            "nome": nome,
            "cidade": cidade
        },
        success: function () {
            alert("Dados salvos com sucesso!")
        },
        error: function () {
            alert("Ocorreu um erro inesperado!")
        }
    })
}

function buscar(id) {
    $.get("http://localhost:3000/usuarios" + id, function (dados) {
        $("#nome").val(dados.nome)
        $("#cidade").val(dados.cidade)
    })
}