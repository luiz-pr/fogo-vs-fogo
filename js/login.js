// Itputs texto

var inputNome = document.querySelector("#nome");
var inputEmail = document.querySelector("#email")
var inputPass = document.querySelector("#pass")

// Input Button
var button = document.getElementById('button-enviar').addEventListener("click", click)

function click() {
    var textoNome = inputNome.value;
    var textoEmail = inputEmail.value
    var textoPass = inputPass.value

    if ((textoNome == "") || (textoEmail == "") || (textoPass == "")) {
        alert("Informe Os Valores Corretamente!!!")
    }
    // if (textoNome == ""){
    //     alert("Nome Inválido tente Novamente")
    // }else if (textoEmail == ""){
    //     alert("Email Inválido tente Novamente")
    // }else if (textoPass == ""){
    //     alert("Senha Inválido tente Novamente")
    // }else if((textoNome == "") && (textoEmail == "") && (textoPass == "")){
    //     alert("Informe algo")
    // }
    else{
        console.log(textoNome);
        console.log(textoEmail);
        console.log(textoPass);

        window.location.assign("index-PT.html")
    }
}