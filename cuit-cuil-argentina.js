//Recibiendo el parámetro "cuit" desde un input
validation_Cuil_Cuit(cuit) {
    //limpiamos el input en caso de que el usuario ingrese "-"
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
    //Dando formato en pantalla
    this.variable = cuit.replace(/(\d{2})(\d{8})(\d{1})/g, "\$1-\$2-\$3")
    
    return digito == verif;
  }

//CUIT y CUIL de pruebas
//   33-37145386-0
//   33371453860
//   20172543597
//   20131048131
//   20-48028763-1
//   33-25497340-3 
//   33-35036407-8
//   20-12145175-2
//   33-37145386-0
//   20-13104813-3
