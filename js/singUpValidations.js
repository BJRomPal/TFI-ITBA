export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid && input.value.trim().length > 0){
      input.parentElement.classList.remove("input-container--invalid")
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
      if (input.value.trim().length == 0) {
          input.parentElement.classList.add("input-container--invalid")
          input.parentElement.querySelector(".input-message-error").innerHTML = "El campo no puede estar vacío";  
      }
      else { 
      input.parentElement.classList.add("input-container--invalid")
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
      }
  };
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
      patternMismatch:
        "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    }
  };

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje
}