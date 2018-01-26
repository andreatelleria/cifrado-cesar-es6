$(document).ready(() => {
  const input = $('#textarea');
  const cipher = $('#btnC');
  const decipher = $('#btnD');
  const resultbox = $('#showResult');
  const patt = /[A-z\s]/;

  /* Evento para que botones se habiliten */
  $('#textarea').on('keyup', ()=> {
    if (this !== '' || patt.test(this) !== false || this !== null) {
      $('#btnC').removeAttr('disabled');
      $('#btnD').removeAttr('disabled');
    }
  });

  /* Evento click para cifrar texto */
  $('#btnC').on('click', ()=> {
    let newWord = [];
    for (i = 0; i < input.val().length; i++) {
      let numberOfLetter = input.val().charCodeAt(i); // Se obtiene el número equivalente en ASCII 

      if (numberOfLetter >= 65 && numberOfLetter <= 90) {
        let newNumber = (numberOfLetter - 65 + 33) % 26 + 65; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la derecha
        let newLetter = String.fromCharCode(newNumber); // El número equivalente lo traduce a letra
        newWord.push(newLetter);
      }
      if (numberOfLetter >= 97 && numberOfLetter <= 122) {
        let newNumber2 = (numberOfLetter - 97 + 33) % 26 + 97;
        let newLetter2 = String.fromCharCode(newNumber2);
        newWord.push(newLetter2);
      }
      if (numberOfLetter === 32) {
        newWord.push(' ');
      }
    }  
    $('#showResult').append('<div>' + 'Tu texto cifrado es "' + newWord.join('') + '"</div>');
    input.val('');
  });


  /* Evento click para descifrar texto */
  $('#btnD').on('click', ()=> {
    let newWord = [];
    for (i = 0; i < input.val().length; i++) {
      let numberOfLetter = input.val().charCodeAt(i); // Se obtiene el número equivalente en ASCII 
      if (numberOfLetter >= 65 && numberOfLetter <= 90) {
        let newNumber3 = (numberOfLetter - 65 - 33 + 2 * 26) % 26 + 65; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la izquierda
        let newLetter3 = String.fromCharCode(newNumber3); // El número equivalente lo traduce a letra
        newWord.push(newLetter3);
      }
      if (numberOfLetter >= 97 && numberOfLetter <= 122) {
        let newNumber4 = (numberOfLetter - 97 - 33 + 2 * 26) % 26 + 97;
        let newLetter4 = String.fromCharCode(newNumber4);
        newWord.push(newLetter4);
      }
      if (numberOfLetter === 32) {
        newWord.push(' '); // Devuelve un espacio al array
      }
    }
    $('#showResult').append('<div>' + 'Tu texto descifrado es "' + newWord.join('') + '"</div>');
    input.val('');
  });
});