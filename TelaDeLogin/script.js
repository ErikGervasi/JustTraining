var isEmail = /\S+@\S+\.\S+/;
var botao = document.getElementById('send');
var fieldEmail = document.getElementById('email');
var fieldSenha = document.getElementById('senha');


// Mensagens de erro
function aoClicar() {
    var emailStr = fieldEmail.value;
    var senhaStr = fieldSenha.value;
    var msgEmail = document.getElementById('form-field');
    

    if(senhaStr.length <= 4){
        document.getElementById('senha-error').style.display = "block"
    }
    else{
        document.getElementById('senha-error').style.display = "none"
    }


    if(!isEmail.test(emailStr)){
        document.getElementById('email-error').style.display = "block"
    }else{
        document.getElementById('email-error').style.display = "none"
    }

}
// Enviar ao apertar ENTER
addEventListener("keypress" , function(e){

    if(e.key === "Enter") {

        const btn = document.querySelector("#send");

        btn.click();
    }
})
