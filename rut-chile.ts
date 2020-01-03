//Recibiendo el parámetro "dato" desde el input
validation_rut(dato) {
    const regex = /[^\w]/g;
    if (dato == "") {
      return false;
    } else {
    //Eliminando caracteres especiales
      dato = dato.replace(regex, '');
      let cuerpo = dato.slice(0, -1);
      //Calculando el digito verificador
      let resultadoDv = this.calculaDV(cuerpo);
      let dv = dato.slice(-1).toUpperCase();
      //Dando el formato XX.XXX.XXX-Y o X.XXX.XXX-Y al input
      cuerpo = cuerpo.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      //this.variable hace referencia al input
      this.variable = cuerpo + '-' + dv;
      //Verificando si el digito verificador es igual al ingresado
      if (resultadoDv != dv) {
        return false;
      }
      else {
        return true;
      }
    }
  }

  calculaDV(rut) {
    let rutAsString = '' + rut;
    let numeros = rutAsString.split("");
    numeros.reverse();
    let serie = 2;
    let resultados = [];
    for (let i = 0; i < numeros.length; i++) {
      let numero;
      numero = numeros[i];
      let resultadoMultiplicacion = numero * serie;
      resultados.push(resultadoMultiplicacion);
      serie++;
      if (serie > 7) {
        serie = 2;
      }
    }
    let sumaResultados = resultados.reduce(function (a, b) { return a + b; });
    let resto = sumaResultados % 11;
    let dv;
    dv = 11 - resto;
    if (dv === 10) {
      dv = 'K'
    } else if (dv === 11) {
      dv = 0;
    }
    return dv;
  }
