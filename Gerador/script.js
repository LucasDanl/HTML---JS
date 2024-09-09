let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let regex = /[a-zA-Z0-9!]/; 
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
}


function gerarSenha(){
    let pass = '';
    while (pass.length < sliderElement.value) {
      let randomChar = String.fromCharCode(Math.floor(Math.random() * 127)); 
      if (regex.test(randomChar)) { 
        pass += randomChar; 
      }
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
  navigator.clipboard.writeText(novaSenha);
}