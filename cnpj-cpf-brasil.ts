//Recibiendo el parámetro "cnpj" desde un input
validation_CNPJ_CPF(cnpj) {
    //Elimina cualquier caracter puesto en un input
    cnpj = cnpj.replace(/[^\w]/g, "");
    //Si el largo de la variable es 14 es un CNPJ
    if (cnpj.length == 14) {
      // Elimina CNPJs invalidos conocidos
      if (cnpj == "00000000000000" ||
          cnpj == "11111111111111" ||
          cnpj == "22222222222222" ||
          cnpj == "33333333333333" ||
          cnpj == "44444444444444" ||
          cnpj == "55555555555555" ||
          cnpj == "66666666666666" ||
          cnpj == "77777777777777" ||
          cnpj == "88888888888888" ||
          cnpj == "99999999999999")
            return false;
      // Valida DVs
      let tamano = cnpj.length - 2
      let numeros = cnpj.substring(0, tamano);
      let digitos = cnpj.substring(tamano);
      let suma = 0;
      let pos = tamano - 7;
      for (let i = tamano; i >= 1; i--) {
        suma += numeros.charAt(tamano - i) * pos--;
        if (pos < 2){
          pos = 9;
        }
      }
      let resultado = suma % 11 < 2 ? 0 : 11 - suma % 11;
      if (resultado != digitos.charAt(0)){
        return false;
      }
      tamano = tamano + 1;
      numeros = cnpj.substring(0, tamano);
      suma = 0;
      pos = tamano - 7;
      for (let i = tamano; i >= 1; i--) {
        suma += numeros.charAt(tamano - i) * pos--;
        if (pos < 2){
          pos = 9;
        }
      }
      resultado = suma % 11 < 2 ? 0 : 11 - suma % 11;
      if (resultado != digitos.charAt(1)){
        return false;
      }
    //Se le da formato del CNPJ al input XX.XXX.XXX/YYYY-ZZ
      this.variable = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5")
      return true;
    //si el largo de la variable es 11 es un CPF
    } else if (cnpj.length == 11) {
      let Suma;
      let Resto;
      Suma = 0;
      // Elimina CPFs invalidos conocidos
      if (cnpj == "00000000000" ||
          cnpj == "11111111111" ||
          cnpj == "22222222222" ||
          cnpj == "33333333333" ||
          cnpj == "44444444444" ||
          cnpj == "55555555555" ||
          cnpj == "66666666666" ||
          cnpj == "77777777777" ||
          cnpj == "88888888888" ||
          cnpj == "99999999999") {
            return false;
      }
      for (let i = 1; i <= 9; i++){
        Suma = Suma + parseInt(cnpj.substring(i - 1, i)) * (11 - i);
      }
      Resto = (Suma * 10) % 11;
      if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
      }
      if (Resto != parseInt(cnpj.substring(9, 10))) {
        return false;
      }
      Suma = 0;
      for (let i = 1; i <= 10; i++){
        Suma = Suma + parseInt(cnpj.substring(i - 1, i)) * (12 - i);
      }
      Resto = (Suma * 10) % 11;
      if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
      }
      if (Resto != parseInt(cnpj.substring(10, 11))){
         return false;
      }
    //Se le da formato del CPF al input XXX.XXX.XXX-YY
      this.variable = cnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
      return true;
    //Si el largo no es ni 14 ni 11, el numero ingresado en invalido
    } else{
      return false;
    }
  } 


    //CNPJs y CPFs de pruebas
    //******CNPJs Validos********
    //    29.083.780/4721-70
    //    16823872289165
    //******CPFs Validos*********
    //    85535084557
    //    784.047.332-60
    //    39053344705	
    //******CPF Invalido*********
    //    231.002.999-00
