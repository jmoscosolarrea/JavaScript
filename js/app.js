var Calculadora = {
	init: function(){
		document.onclick = this.eventoCapturaNumero;
		document.getElementsByClassName('teclado').onclick = aumentarTamañoButon;
		document.getElementsByClassName('teclado').onclick = reducirTamañoButon;
	},
	eventoCapturaNumero: function(event){
		var tecla_pulsada = event.target.id;
		var pantalla = document.getElementById('display');
		var texto = pantalla.innerHTML;
		switch(tecla_pulsada){
	    case "on":
				texto = limpiar();
				pantalla.innerHTML = texto;
	    	break;

			case "sign":
				texto = cambiar_signo(texto);
				pantalla.innerHTML = texto;
		  	break;

			case "mas":
				if (texto != "0") {
					signo = "+";
					operando1 = parseFloat(texto);
					pantalla.innerHTML = "";
					bandera = 0;
				}
				break;

			case "dividido":
				if (texto != "0") {
					signo = "/";
					operando1 = parseFloat(texto);
					pantalla.innerHTML = "";
					bandera = 0;
				}
				break;

			case "menos":
				if (texto != "0") {
					signo = "-";
					operando1 = parseFloat(texto);
				  pantalla.innerHTML = "";
					bandera = 0;
				}
				break;

			case "por":
				if (texto != "0") {
					signo = "*";
					operando1 = parseFloat(texto);
					pantalla.innerHTML = "";
					bandera = 0;
				}
				break;

	    case "igual":
				var resultado = 0;
				if (bandera == 0) {
					bandera = 1;
					operando2 = parseFloat(texto);
				}
				switch (signo) {
					case ("+"):
						resultado = suma(operando1,operando2);
						break;

					case ("-"):
						resultado = resta(operando1,operando2);
						break;

					case ("*"):
						resultado = multiplica(operando1,operando2);
						//resultado = operando1 * operando2
						break;

					case ("/"):
						resultado = divide(operando1,operando2);
						break;
				}
		  	pantalla.innerHTML = resultado;
				operando1 = resultado;
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

function limpiar(){
	texto = "0";
	operando1 = 0;
	operando2 = 0;
	bandera = 0;
	return texto;
}

function cambiar_signo(texto1){
	texto1 = texto1 * -1;
	return texto1;
}

function suma(oper1,oper2){
	var resul = oper1 + oper2;
	return resul;
}

function resta(oper1,oper2){
	var resul = oper1 - oper2;
	return resul;
}

function multiplica(oper1,oper2){
	var resul = oper1 * oper2;
	return resul;
}

function divide(oper1,oper2){
	var resul = oper1 / oper2;
	return resul;
}

var operando1=0;
var operando2=0;
var signo="";
var bandera = 0;

Calculadora.init();
