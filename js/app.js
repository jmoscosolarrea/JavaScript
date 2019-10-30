var Calculadora = {
	init: function(){
		var texto = "";
		document.onclick = this.eventoCapturaNumero;
	},
	eventoCapturaNumero: function(event){
		var tecla_pulsada = event.target.id;
		var pantalla = document.getElementById('display');
		var texto = pantalla.innerHTML;
  	switch(tecla_pulsada){
	    case "on":
			texto = "0";
	    pantalla.innerHTML = texto;
	    break;

			case "sign":
			if (texto == "0") {
			  texto = "-";
			  pantalla.innerHTML = texto;
		  }else if (texto == "-"){
				texto= "0";
				pantalla.innerHTML = texto;
			}
	    break;

			case "mas":
			if (texto != "0") {
				texto = texto + "+";
				pantalla.innerHTML = texto;
			}
			break;

			case "dividido":
			if (texto != "0") {
				texto = texto + "/";
				pantalla.innerHTML = texto;
			}
			break;

			case "menos":
			if (texto != "0") {
				texto = texto + "-";
				pantalla.innerHTML = texto;
			}
			break;

			case "por":
			if (texto != "0") {
				texto = texto + "*";
				pantalla.innerHTML = texto;
			}
			break;

	    case "igual":
	    var resultado = eval(texto);
	    pantalla.innerHTML = resultado;
			break;

			case "punto":
			if (texto != "0") {
				texto = texto + ".";
				pantalla.innerHTML = texto;
			}
			break;

	    default:
			if (texto == "0"){
				  texto = tecla_pulsada;
					pantalla.innerHTML = texto;
			}else if (texto.length < 8) {
				  texto = texto + tecla_pulsada;
				  pantalla.innerHTML = texto;
			}
		}
	}
}

Calculadora.init();
