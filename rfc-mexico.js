  //Recibiendo el parámetro "rfc" desde el input
  validation_rfc_mexico(rfc) {
    let regex = /^([ A-ZÑ&]?[A-ZÑ&]{3}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
    //Validando si el formato ingresado es valido
    let validado = rfc.match(regex);
    if (!validado)
      return false;
    let digitoVerificador = validado.pop()
    let rfcSinDigito = validado.slice(1).join('')
    let diccionario = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ"
    let lngSuma = 0.0
    let digitoEsperado;
    if (rfcSinDigito.length == 11) {
      rfc = " " + rfc;
    }
    for(let i=0; i<13; i++){
        lngSuma = lngSuma + diccionario.indexOf(rfcSinDigito.charAt(i)) * (13 - i);
    }
    digitoEsperado = 11 - lngSuma % 11;
    if (digitoEsperado == 11){
      digitoEsperado = 0;
    }
    if (digitoEsperado == 10){ 
      digitoEsperado = "A";
    }
    return digitoVerificador == digitoEsperado;
  }


//GENERADOR DE RFC
// http://www.datafakegenerator.com/genrfc.php
