function executeCesar(option) {
  do {
    var patt = /[A-z\s]/;
    var respuesta = prompt('Ingrese el texto que deseas cifrar o decifrar');
    if (patt.test(respuesta) === false) {
      alert('Ingrese solo letras de la A a la Z');
    }
  } while (respuesta === '' || patt.test(respuesta) === false || respuesta === null);

  do {
    var respuesta2 = prompt('Escriba un número: 1) Cifrar o 2) Descifrar');
    if (respuesta2 !== '') {
      if (respuesta2 === '1') {
        cipher(); // Llama a la funcion cifrar
      } else if (respuesta2 === '2') {
        decipher(); // Llama a la funcion descifrar
      } else {
        alert('Ingrese una opción válida: 1 o 2');
      }
    }
  } while (respuesta2 === '' || (respuesta2 !== '1' && respuesta2 !== '2'));

  /* Función que cifra el texto ingresado */
  function cipher() { 
    var newWord = [];
    for (var i = 0; i < respuesta.length; i++) {
      var numberOfLetter = respuesta.charCodeAt(i); // Se obtiene el número equivalente en ASCII 

      if (numberOfLetter >= 65 && numberOfLetter <= 90) {
        var newNumber = (numberOfLetter - 65 + 33) % 26 + 65; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la derecha
        var newLetter = String.fromCharCode(newNumber); // El número equivalente lo traduce a letra
        newWord.push(newLetter);
      }
      if (numberOfLetter >= 97 && numberOfLetter <= 122) {
        var newNumber2 = (numberOfLetter - 97 + 33) % 26 + 97;
        var newLetter2 = String.fromCharCode(newNumber2);
        newWord.push(newLetter2);
      }
      if (numberOfLetter === 32) {
        newWord.push(' ');
      }
    }
    return alert('Tu texto cifrado es: ' + newWord.join(''));
  }

  /* Función que descifra el texto ingresado */
  function decipher() {
    var newWord = [];
    for (var i = 0; i < respuesta.length; i++) {
      var numberOfLetter = respuesta.charCodeAt(i); // Se obtiene el número equivalente en ASCII 
      if (numberOfLetter >= 65 && numberOfLetter <= 90) {
        var newNumber3 = (numberOfLetter - 65 - 33 + 2 * 26) % 26 + 65; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la izquierda
        var newLetter3 = String.fromCharCode(newNumber3); // El número equivalente lo traduce a letra
        newWord.push(newLetter3);
      }
      if (numberOfLetter >= 97 && numberOfLetter <= 122) {
        var newNumber4 = (numberOfLetter - 97 - 33 + 2 * 26) % 26 + 97;
        var newLetter4 = String.fromCharCode(newNumber4);
        newWord.push(newLetter4);
      }
      if (numberOfLetter === 32) {
        newWord.push(' '); // Devuelve un espacio al array
      }
    }
    return alert('Tu texto cifrado es: ' + newWord.join(''));
  }
}

executeCesar();