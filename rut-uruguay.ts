  //Validando el RUT de Uruguay
  validation_rut_uruguay(dato) {
    dato = dato.replace(/[^\w]/g, '');
    let cuerpo = dato.slice(0, -1);
    let resultadoDv = this.validation_digit_uruguay(cuerpo);
    let dv = dato.slice(-1);
    cuerpo = cuerpo.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    this.destino.rutUser = cuerpo + '-' + dv;
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
