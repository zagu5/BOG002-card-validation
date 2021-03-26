const validator = {
  // ...Funcion validar tarjeta de credito
  isValid:  function creditCardNumber (value) {
    //funcion que acepta solo digitos, guiones o espacios
    if (/[^0-9-\s]+/.test(value))
      return false;
    
       
    let sum = 0, 
        numMult = false;
        //value = value.replace(/\D/g, ""); //reemplace todo lo que no es digito o punto por un espacio
    for (let i = value.length - 1; i >= 0; i--) {
        let string = value.charAt(i), //El charAt() método devuelve el carácter en el índice especificado de una cadena. 
        numEnt = parseInt(string, 10); //parseInt convierte string a un entero
        if (numMult && (numEnt *= 2) > 16) numEnt -= 9; sum +=  numEnt; numMult = !numMult;
    }
    return (sum % 10) == 0;
  } 

  
};

export default validator;
