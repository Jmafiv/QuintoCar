"use strict";
/////////////////// Eventos de la página ///////////////////
// Asignar a los elementos un evento (Evitando poner onclick en el html)
var opcion; // Guarda qué se está mostrando y según lo que muestra envia una cosa u otra
function eventoEn(elemento,tipo,funcion){
	let boton=document.getElementById(elemento);
	boton.addEventListener(tipo, funcion, false);
}
eventoEn("clickAltaCliente","click",mostrarAltaCliente);
eventoEn("clickAltaVehiculo","click",mostrarAltaVehiculo);
eventoEn("clickCompraVehiculo","click",mostrarCompraVehiculo);
eventoEn("clickVentaVehiculo","click",mostrarVentaVehiculo);
eventoEn("tipo","change",mostrarSegunTipo);

function mostrarAltaCliente () {
	opcion = "altaCliente";
	ocultaCosas(["T-altaCliente","F-altaVehiculo","F-comprarVehiculo","F-venderVehiculo"]); // Se define con T/F (True/False) + el id del elemento a mostrar/ocultar
}
function mostrarAltaVehiculo () {
	opcion = "altaVehiculo";
	ocultaCosas(["F-altaCliente","T-altaVehiculo","F-comprarVehiculo","F-venderVehiculo"]);
	mostrarSegunTipo();
}
function mostrarCompraVehiculo () {
	opcion = "compraVehiculo";
	ocultaCosas(["F-altaCliente","F-altaVehiculo","T-comprarVehiculo","F-venderVehiculo"]);
}
function mostrarVentaVehiculo () {
	opcion = "ventaVehiculo";
	ocultaCosas(["F-altaCliente","F-altaVehiculo","F-comprarVehiculo","T-venderVehiculo"]);
}
function mostrarSegunTipo(){ // Oculta los detalles según el tipo del vehículo señalado
	if(document.getElementById("tipo").value=="Turismo"){ ocultaCosas(["F-pendiente","T-abs","T-descapotable","T-numPuertas"]);	}
	else{ ocultaCosas(["T-pendiente","F-abs","F-descapotable","F-numPuertas"]); }
}

/////////////////// Mostrar/Ocultar los formularios ///////////////////
function ocultaCosas(array){
	formulario.classList.remove("oculta");
	for (var i = 0; i < array.length; i++) {
		if(array[i].substring(0,1)=="F"){ //Si no se tiene que mostrar:
			document.getElementById(array[i].substring(2)).classList.add("oculta"); // Oculta los divs que no se deben mostrar
			document.getElementById("menu").getElementsByTagName('li')[i].classList.remove("active"); // le quita en el menú el color blanco
			deshabilitaInputs(array[i].substring(2),true); // todos los inputs dentro del elemento los deshabilita
		}
		else if(array[i].substring(0,1)=="T"){ //Si se tiene que mostrar:
			document.getElementById(array[i].substring(2)).classList.remove("oculta"); // Muestra los divs que no se deben mostrar
			document.getElementById("menu").getElementsByTagName('li')[i].classList.add("active"); // le añade en el menú el color blanco
			deshabilitaInputs(array[i].substring(2),false); // todos los inputs dentro del elemento los habilita
		}
	}
}
// Los campos requeridos se deshabilitan dejando solo los que se muestran activos
function deshabilitaInputs(elemento,NoSi){ 
	for(let i=0; i < document.getElementById(elemento).getElementsByTagName('input').length;i++){
		document.getElementById(elemento).getElementsByTagName('input')[i].disabled = NoSi;
	}
}

/////////////////// Botón Enviar ///////////////////
eventoEn("enviar","click",enviar);

function enviar(){ // Según lo que se muestra en pantalla se envia a un método o a otro
	switch (opcion) {
		case "altaCliente":
			altaCliente();
			break;
		case "altaVehiculo":
			altaVehiculo();
			break;
		case "compraVehiculo":
			compraVehiculo();
			break;
		case "ventaVehiculo":
			ventaVehiculo();
			break;
		default:
			return false;
	}
}

function altaCliente(){
}
function altaVehiculo(){
}
function compraVehiculo(){
}
function ventaVehiculo(){
}