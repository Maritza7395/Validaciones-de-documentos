  //Recibiendo el parámetro "dato" desde le input
  validation_rut_uruguay(dato) {
    //Eliminando caracteres especiales
    dato = dato.replace(/[^\w]/g, '');
    let cuerpo = dato.slice(0, -1);
    //recibiendo el digito verificador desde la funcion
    let resultadoDv = this.validation_digit_uruguay(cuerpo);
    let dv = dato.slice(-1);
    cuerpo = cuerpo.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    this.destino.rutUser = cuerpo + '-' + dv;
    //verificando si el digito verificador es igual al ingresado
    if (resultadoDv != dv) {
      return false;
    }
    else {
      return true;
    }
  }

  //Validando el digito verificador de Uruguay
  validation_digit_uruguay(ci){
    let a = 0;
    if(ci.length <= 6){
      for(let i = ci.length; i < 7; i++){
        ci = '0' + ci;
      }
    }
    for(let i = 0; i < 7; i++){
      a += (parseInt("2987634"[i]) * parseInt(ci[i])) % 10;
    }
    if(a%10 === 0){
      return 0;
    }else{
      return 10 - a % 10;
    }
  }

//RUT de pruebas
//******Validos********
//    9.999.999-9
//    4.907.760-2
//    1.234.567-2
//*****Invalidos*******
//    9.999.999-6
//    4.907.760-5
//    1.234.567-3
