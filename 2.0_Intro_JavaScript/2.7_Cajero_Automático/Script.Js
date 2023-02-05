const name = "00-INDEX.HTML"
let contador = 0;
const myFunction = (params) => {
    contador += 1;
    console.log (contador);
    return "sumé" ;
};

const cuentas = {
    { Mali: “Mali”, saldo: 200 }
    { Gera: “Gera”, saldo: 290 }
    { Maui: “Maui”, saldo: 67 }
};

document.addEventListener("DOMContentLoaded", function () {
    // login credentials
    const validCredentials = [
      { username: "Mali", password: "1234" },
      { username: "Gera", password: "1234" },
      { username: "Maui", password: "1234" },
    ];

    // submit button
  document.getElementById("INGRESAR").addEventListener("click", function () {
    // get values entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // validación de credenciales
    const isValid = validCredentials.some(
        (credential) =>
          credential.username === username && credential.password === password
      );

      if (isValid) {
        // if valid, show success message and redirect to the next page
        document.getElementById("message").innerHTML = "Login Successful!";
        setTimeout(() => {
          window.location.href = "00-INDEX.HTML";
        }, 1000);
      } else {
        // if not valid, show error message
        document.getElementById("message").innerHTML = "Login Failed. Try Again.";
      }
    });
  });