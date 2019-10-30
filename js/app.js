var Calculadora = {
	init: function(){
		document.onclick = this.eventoCapturaNumero;
	//	this.asignarEventosBotones('boton-accion');
		//var teclas = document.getElementsId('calculadoraFondo');
		//document.getElementById('calculadoraFondo').onclick = aumentarTamañoLetra;
		//var evento = teclas.event
		//teclas.addEventListener.onclick(eventoCapturaNumero.onclick);
	//	eventoCapturaNumero.onclick();
	},
	eventoCapturaNumero: function(event){
		var tecla_pulsada = event.target.id;
		var pantalla = document.getElementById('display');
		var longitud = pantalla.length;
		alert(longitud);
		switch(tecla_pulsada){
	    case "on":
	    document.getElementById('display').innerHTML = 0;
	    break;

			case "sign":
			if (document.getElementById('display').length < 8) {
			  document.getElementById('display').value = document.getElementById('display').value + tecla_pulsada;
			  document.getElementById('display').innerHTML = document.getElementById('display').value;
		  }
	    break;

	    case "igual":
	    var resultado = eval(document.getElementById('display').value);
	    document.getElementById('display').innerHTML = resultado;
			//document.getElementById('display').innerHTML = nodoTextoPantalla.nodeValue
	    break;

	    default:
			alert(tecla_pulsada);
			alert(document.getElementById('display').length);
	    if (document.getElementById('display').length < 8) {
				document.getElementById('display').value = document.getElementById('display').value + tecla_pulsada;
				document.getElementById('display').innerHTML = document.getElementById('display').value;
			}
		}
	}
}

Calculadora.init();
