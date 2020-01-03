validation_Cuil_Cuit(cuit) {
    cuit = cuit.replace(/[^\w]/g, "");
    if(cuit.length != 11){
      return false
    }
    let acumulado = 0;
    let digitos = cuit.split("");
    let digito = digitos.pop();
    for(let i = 0; i < digitos.length; i++) {
      acumulado += digitos[9 - i] * (2 + (i % 6));
    }
    let verif = 11 - (acumulado % 11);
    if(verif == 11){
      verif = 0
    }
    this.destino.rutUser = cuit.replace(/(\d{2})(\d{8})(\d{1})/g, "\$1-\$2-\$3")
    return digito == verif;
  }
