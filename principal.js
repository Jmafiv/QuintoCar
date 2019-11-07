"use strict";
var opcion; // Guarda qué se está mostrando y según lo que muestra envia una cosa u otra

// Asignar a los elementos un evento (Evitando poner onclick en el html)
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
	ocultaCosas(["T-altaCliente","F-altaVehiculo","F-comprarVehiculo","F-venderVehiculo"]);
}
function mostrarAltaVehiculo () {
	opcion = "altaVehiculo";
	ocultaCosas(["F-altaCliente","T-altaVehiculo","F-comprarVehiculo","F-venderVehiculo"]);
}
function mostrarCompraVehiculo () {
	opcion = "compraVehiculo";
	ocultaCosas(["F-altaCliente","F-altaVehiculo","T-comprarVehiculo","F-venderVehiculo"]);
}
function mostrarVentaVehiculo () {
	opcion = "ventaVehiculo";
	ocultaCosas(["F-altaCliente","F-altaVehiculo","F-comprarVehiculo","T-venderVehiculo"]);
}
function mostrarSegunTipo(){
	if(document.getElementById("tipo").value=="Turismo"){
		document.getElementById("pendiente").classList.add("oculta");
		document.getElementById("abs").classList.remove("oculta");
		document.getElementById("descapotable").classList.remove("oculta");
		document.getElementById("numPuertas").classList.remove("oculta");
	}
	else{
		document.getElementById("pendiente").classList.remove("oculta");
		document.getElementById("abs").classList.add("oculta");
		document.getElementById("descapotable").classList.add("oculta");
		document.getElementById("numPuertas").classList.add("oculta");
	}
}

// Mostrar/Ocultar elementos
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
