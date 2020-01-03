//this.variable es la variable que hace referencia al input
let cuerpo = this.variable.replace(/[^\w]/g, "").slice(0, -1);

//Se llama a la función para obtener el dígito verificador
let dv = this.validation_ruc_paraguay(cuerpo)

//se valida si el digito verificador es igual al ingresado en el input por el usuario
this.validRut = (dv ==  this.destino.rutUser.slice(-1))? false: true;

//************************************************************************************************

//Recibiendo el parámetro desde el input
validation_ruc_paraguay(p_numero, p_basemax = 11){
    //Eliminando cualquier caracter ingresado por el usuario
    p_numero = p_numero.replace(/[^\w]/g, '');
    let v_numero_aux;
    let v_numero_al = "";
    for (let i = 0; i < p_numero.length; i++) {
        let c = p_numero.charAt(i);       
        v_numero_al += c.toString();
    } 
    let k = 2;
    let v_total = 0;
    for (let i = v_numero_al.length - 1; i >= 0; i --) {
        if(k > p_basemax){
          k = 2
        }
        v_numero_aux = v_numero_al.charAt(i);
        v_total += (v_numero_aux * k);
        k = k + 1;    
    }
    let v_digit = 0;
    let v_resto = v_total % 11;  
    if(v_resto > 1){
      v_digit  = 11 - v_resto
    } else { 
      v_digit = 0
    };
    return v_digit;
  }
