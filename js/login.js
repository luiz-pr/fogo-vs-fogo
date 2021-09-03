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

    if (textoNome == ""){
        alert("Nome Inválido tente Novamente")
    }
    if (textoEmail == ""){
        alert("Email Inválido tente Novamente")
    }
    if (textoPass == ""){
        alert("Senha Inválido tente Novamente")
    }
    else{
        console.log(textoNome);
        console.log(textoEmail);
        console.log(textoPass);
    }
}