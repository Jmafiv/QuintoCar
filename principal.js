"use strict";
var quintocar = new QuintoCar();

// Mensaje de si se ha añadido o no las cosas
function mensaje(texto){ document.getElementById("mensaje").innerHTML = texto;}

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
	ocultaCosas(["T-altaCliente","F-altaVehiculo","F-comprarVehiculo","F-venderVehiculo"],true); // Se define con T/F (True/False) + el id del elemento a mostrar/ocultar
}
function mostrarAltaVehiculo () {
	opcion = "altaVehiculo";
	ocultaCosas(["F-altaCliente","T-altaVehiculo","F-comprarVehiculo","F-venderVehiculo"],true);
	mostrarSegunTipo();
}
function mostrarCompraVehiculo () {
	opcion = "compraVehiculo";
	ocultaCosas(["F-altaCliente","F-altaVehiculo","T-comprarVehiculo","F-venderVehiculo"],true);
}
function mostrarVentaVehiculo () {
	opcion = "ventaVehiculo";
	ocultaCosas(["F-altaCliente","F-altaVehiculo","F-comprarVehiculo","T-venderVehiculo"],true);
}
function mostrarSegunTipo(){ // Oculta los detalles según el tipo del vehículo señalado
	if(formulario.tipo.value=="Turismo"){ ocultaCosas(["F-pendiente","T-abs","T-descapotable","T-numPuertas"],false);	}
	else{ ocultaCosas(["T-pendiente","F-abs","F-descapotable","F-numPuertas"],false); }
}

/////////////////// Mostrar/Ocultar los formularios ///////////////////
function ocultaCosas(array,menu){
	mensaje("");
	document.getElementById("mensaje").classList.add("oculta");

	formulario.classList.remove("oculta");
	for (var i = 0; i < array.length; i++) {
		if(array[i].substring(0,1)=="F"){ //Si no se tiene que mostrar:
			document.getElementById(array[i].substring(2)).classList.add("oculta"); // Oculta los divs que no se deben mostrar
			menu ? document.getElementById("menu").getElementsByTagName('li')[i].classList.remove("active"):false; // le quita en el menú el color blanco
			deshabilitaInputs(array[i].substring(2),true); // todos los inputs dentro del elemento los deshabilita
		}
		else if(array[i].substring(0,1)=="T"){ //Si se tiene que mostrar:
			document.getElementById(array[i].substring(2)).classList.remove("oculta"); // Muestra los divs que no se deben mostrar
			menu ? document.getElementById("menu").getElementsByTagName('li')[i].classList.add("active"):false; // le añade en el menú el color blanco
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
	}
	document.getElementById("mensaje").classList.remove("oculta");
}

function altaCliente(){
	let nif = formulario.nif.value;
	let nombre = formulario.nombre.value;
	let apellidos = formulario.apellidos.value;
	let telefono = formulario.telefono.value;
	let cliente = new Cliente(nif,nombre,apellidos,telefono);
	mensaje(quintocar.altaCliente(cliente));
}
function altaVehiculo(){
	let matricula = formulario.matricula.value;
	let marca = formulario.marca.value;
	let modelo = formulario.modelo.value;
	let combustible = formulario.combustible.value;
	let vehiculo;
	if(formulario.tipo.value=="Turismo"){
		let abs = formulario.abs.checked;
		let descapotable = formulario.descapotable.checked;
		let numPuertas = formulario.numPuertas.value;
		vehiculo = new Turismo(matricula,marca,modelo,combustible,abs,descapotable,numPuertas);
	}
	else{
		let pendiente = formulario.pendiente.value;
		vehiculo = new V4x4(matricula,marca,modelo,combustible,pendiente);
	}
	mensaje(quintocar.altaVehiculo(vehiculo));
}
function compraVehiculo(){
}
function ventaVehiculo(){
}

/////////////////// Listados ///////////////////
var pestañaListados = null; // Pestaña donde se mostrará los listados
var pestañaAbierta = false; // Los listados se cargarán en la misma pestaña
eventoEn("clickLVehiculoVenta","click",clickLVehiculoVenta);
eventoEn("clickLVendidos","click",clickLVendidos);
eventoEn("clickLComprados","click",clickLComprados);
eventoEn("clickLVehiculos","click",clickLVehiculos);
eventoEn("clickLClientes","click",clickLClientes);	

function clickLVehiculoVenta(){ abreListadoPestaña("Listado vehículos en venta","Vehículos en venta"); }
function clickLVendidos(){ abreListadoPestaña("Listado vehículos vendidos","Vehículos vendidos"); }
function clickLComprados(){	abreListadoPestaña("Listado vehículos comprados","Vehículos comprados"); }
function clickLVehiculos(){	abreListadoPestaña("Listado vehículos","Vehículos"); }
function clickLClientes(){ abreListadoPestaña(quintocar.listadoClientes(),"Clientes"); }
function abreListadoPestaña(listado,titulo){
	if(!pestañaAbierta){
		pestañaListados = window.open("",titulo);
		pestañaAbierta = true;
	}
	pestañaListados.document.innerHTML = "aaaaa";
}

/////////////////// Validaciones ///////////////////

function mensajeErrorDebajo(elemento,mensaje){
	elemento.parentElement.getElementsByClassName("invalid-feedback")[0].innerHTML = mensaje;
	// formulario.classList.add("was-validated"); // ejemplo
}