var Calculadora = {
	init: function(){
    	document.onclick = this.eventoCapturaNumero;
	},
	eventoCapturaNumero: function(event){

		var reducir = document.getElementById("on");
		var reducir1 = document.getElementById("sign");
		var reducir2 = document.getElementById("dividido");
		var reducir3 = document.getElementById("7");
		var reducir4 = document.getElementById("8");
		var reducir5 = document.getElementById("9");
		var reducir6 = document.getElementById("por");
		var reducir7 = document.getElementById("4");
		var reducir8 = document.getElementById("5");
		var reducir9 = document.getElementById("6");
		var reducir10 = document.getElementById("menos");
		var reducir11 = document.getElementById("1");
		var reducir12 = document.getElementById("2");
		var reducir13 = document.getElementById("3");
		var reducir14 = document.getElementById("0");
		var reducir15 = document.getElementById("punto");
		var reducir16 = document.getElementById("igual");
		var reducir17 = document.getElementById("mas");

		reducir.addEventListener("mousedown",function(){
						reducir.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir.addEventListener("mouseup",function(){
						reducir.setAttribute("style","transform:scale(1,1)")
				})

		reducir1.addEventListener("mousedown",function(){
						reducir1.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir1.addEventListener("mouseup",function(){
						reducir1.setAttribute("style","transform:scale(1,1)")
				})

		reducir2.addEventListener("mousedown",function(){
						reducir2.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir2.addEventListener("mouseup",function(){
						reducir2.setAttribute("style","transform:scale(1,1)")
				})

		reducir3.addEventListener("mousedown",function(){
						reducir3.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir3.addEventListener("mouseup",function(){
						reducir3.setAttribute("style","transform:scale(1,1)")
				})

		reducir4.addEventListener("mousedown",function(){
						reducir4.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir4.addEventListener("mouseup",function(){
						reducir4.setAttribute("style","transform:scale(1,1)")
				})

		reducir5.addEventListener("mousedown",function(){
						reducir5.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir5.addEventListener("mouseup",function(){
						reducir5.setAttribute("style","transform:scale(1,1)")
				})

		reducir6.addEventListener("mousedown",function(){
						reducir6.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir6.addEventListener("mouseup",function(){
						reducir6.setAttribute("style","transform:scale(1,1)")
				})

		reducir7.addEventListener("mousedown",function(){
						reducir7.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir7.addEventListener("mouseup",function(){
						reducir7.setAttribute("style","transform:scale(1,1)")
				})

		reducir8.addEventListener("mousedown",function(){
						reducir8.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir8.addEventListener("mouseup",function(){
		 				reducir8.setAttribute("style","transform:scale(1,1)")
				})

		reducir9.addEventListener("mousedown",function(){
						reducir9.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir9.addEventListener("mouseup",function(){
						reducir9.setAttribute("style","transform:scale(1,1)")
				})

		reducir10.addEventListener("mousedown",function(){
						 reducir10.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir10.addEventListener("mouseup",function(){
						 reducir10.setAttribute("style","transform:scale(1,1)")
				})

		reducir11.addEventListener("mousedown",function(){
						 reducir11.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir11.addEventListener("mouseup",function(){
  					 reducir11.setAttribute("style","transform:scale(1,1)")
				})

		reducir12.addEventListener("mousedown",function(){
             reducir12.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir12.addEventListener("mouseup",function(){
						 reducir12.setAttribute("style","transform:scale(1,1)")
				})

		reducir13.addEventListener("mousedown",function(){
						 reducir13.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir13.addEventListener("mouseup",function(){
		         reducir13.setAttribute("style","transform:scale(1,1)")
			  })

		reducir14.addEventListener("mousedown",function(){
         		 reducir14.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir14.addEventListener("mouseup",function(){
						 reducir14.setAttribute("style","transform:scale(1,1)")
				})

		reducir15.addEventListener("mousedown",function(){
						 reducir15.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir15.addEventListener("mouseup",function(){
		         reducir15.setAttribute("style","transform:scale(1,1)")
				})

		reducir16.addEventListener("mousedown",function(){
		         reducir16.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir16.addEventListener("mouseup",function(){
						 reducir16.setAttribute("style","transform:scale(1,1)")
				})

		reducir17.addEventListener("mousedown",function(){
			       reducir17.setAttribute("style","transform:scale(0.85,0.85)")
				}),
		reducir17.addEventListener("mouseup",function(){
						 reducir17.setAttribute("style","transform:scale(1,1)")
				})

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
