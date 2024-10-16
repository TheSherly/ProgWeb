function validaSenha(){
    var senha = document.getElementById("senha");
    var confisenha = document.getElementById("confisenha");
    var msg = document.getElementById("senhaErro");
    if(senha.value == confisenha.value && senha.value != ""){
        msg.style.display = "none"
    }
    else{
        msg.style.display = "block"
        senha.focus();
    }
}

function buscarNome(rga){
    const listaEstudantes = new Map();

    listaEstudantes.set("2000.0222.019-1", "Jane Dirce")
    listaEstudantes.set("2023.1907.078-5", "Kenyo o mais poderoso")
    listaEstudantes.set("2023.1907.032-7", "Arthur")

    if(listaEstudantes.has(rga)){
        return listaEstudantes.get(rga);

    }
    else{
        return"";
    }

}

function validaRga(){
    var rga = document.getElementById("rga");
    var nome = document.getElementById("nome");
    var spanRgaErro = document.getElementById("spanRgaErro");

    var result = buscarNome(rga.value);
    if(result != ''){
        nome.value = result;
        spanRgaErro.style.display = "none";
    }
    else{
        rga.focus();
        nome.value = "Não encontrado";
        spanRgaErro.style.display = "block"
    }
}

function validaDate(){
    var botao = document.getElementById("enviar");
    var mensagem = document.getElementById("dataErro");
    var dataIni = document.getElementById("dataIni");
    var hoje = new Date();

    var Data = new Date(dataIni.value + " 00:00:00");
    if(Data <= hoje){
        dataIni.focus();
        mensagem.style.display = "block";

    }
    else{
        botao.focus();
        mensagem.style.display = "none";
    }
}