function validar_nombre_usuario(string){
  var elemento = string.value;
  var letra = /^[A-Z]+[a-z]+$/;
  //console.log(letra.test(elemento));
    //console.log(letra.test(elemento));
    if (letra.test(elemento) == true){
      if(elemento.length>=6 && elemento.length<=30){
        return true;
      }
    }
    else{
      alert("El nombre de usuario no cumple con los requisitos");
      return false;
    }
  alert("El nombre de usuario no cumple con los requisitos");
  return false;
}

function validar_anoNacimiento_usuario(valor){
  var numero= valor.value
  //console.log("El año es: " + numero)
  if (isNaN(parseFloat(numero))){
    alert("El año debe ser un numero")
    return false
  }
  else if(numero < 0){
    alert("El año debe ser un numero positivo")
    return false
  }
  else if (numero<1900 || numero>2021){
    alert("El número debe ser igual o mayor a 1900 y menor que 2022")
    return false
  }
  else if (numero >= 2003){
    alert("El usuario es menor de edad")
    return false
  }
  else{
    return true
  }
}

function validar_contrasena(string){
  var pass = string.value
  var regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  //console.log("la contraseña es : " + pass)
  //console.log("el numero de caracteres es : " + pass.length)
  //console.log(regEx.test(pass));
  if (pass.length < 6){
    alert("La contraseña no puede tener menos de 6 caracteres")
    return false
  }
  else if (regEx.test(pass) == false){
    alert("La contraseña no cumple con las")
    return false
  }
  else {
    return true
  }
  
}

function confirmar_contrasena(stringA, stringB) {
  validar_contrasena(stringA)
  var pass1 = stringA.value
  //console.log("la contraseña 1 es : " + pass1)
  validar_contrasena(stringB)
  var pass2 = stringB.value
  //console.log("la contraseña 2 es : " + pass2)
  if (pass1 != pass2) {
    alert("Las contraseñas deben de coincidir");
    return false;
  } 
  else {
    return true; 
  }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;