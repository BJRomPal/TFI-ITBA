import { valida } from "./singUpValidations.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    })
})

const form = document.querySelector(".formulario-registro-inicioSesion")
form.addEventListener("submit", e => {
    e.preventDefault();
    crearUsuario();
});

const crearUsuario = () => {
    const inputNombre = document.querySelector('#name').value.trim();
    const inputEmail = document.querySelector('#email').value.trim();
    const inputPassword = document.querySelector('#password').value.trim();

    const patternEmail = new RegExp("^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$");
    const pruebaPatternEmail = patternEmail.test(inputEmail); 
    const patternPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$");
    const pruebaPatternPassword = patternPassword.test(inputPassword);

    if (inputNombre.length == 0 || inputEmail.length == 0 || inputPassword == 0) {
        console.log("hay un error en el largo");
        return;
    };
    if (!pruebaPatternEmail) {
        console.log("hay un error en el pattern Email");
        return;
    };
    if (!pruebaPatternPassword) {
        console.log("hay un error en el pattern Password");
        return;
    };
    const configuracion = {
        method: "post",
        url: "https://tfi-itba.herokuapp.com/registro",
        data: {
            nombre: inputNombre,
            email: inputEmail,
            password: inputPassword,
        },
    };
    axios(configuracion)
    .then((resultado) => {console.log(resultado);})
    .catch((error) => {console.log(error);})
}





