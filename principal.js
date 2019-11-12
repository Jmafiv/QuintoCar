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

/////////////////// Botón Enviar Y Validación///////////////////
eventoEn("enviar","click",enviar);

function enviar(){ // Según lo que se muestra en pantalla se envia a un método o a otro
	switch (opcion) {
		case "altaCliente":
		if (formulario.nif.value == "" ||
			formulario.nombre.value == "" ||
			formulario.apellidos.value == "" ||
			formulario.telefono.value == "")
		{
			mensaje("Rellene todos los campos obligatorios");
			break;
		}
		else
			altaCliente();
			break;
		case "altaVehiculo":
		let tipo = formulario.tipo.value;
		switch (tipo)
		{
			case "Turismo":
				if (formulario.matricula.value == "" ||
				formulario.marca.value == "" ||
				formulario.modelo.value == "" ||
				formulario.combustible.value == "")
				{
					mensaje("Rellene todos los campos obligatorios");
					break;
				}
			case "V4x4":
				if (formulario.matricula.value == "" ||
				formulario.marca.value == "" ||
				formulario.modelo.value == "" ||
				formulario.combustible.value == "")
				{
					mensaje("Rellene todos los campos obligatorios");
					break;
				}
			altaVehiculo();
		}
			break;
		case "compraVehiculo":
		if (formulario.clienteCompra.value == "" ||
		    formulario.vehiculoCompra.value == "" ||
		    formulario.importeCompra.value == "" ||
		    formulario.fechaCompra.value == null)
		{
			mensaje("Rellene todos los campos obligatorios");
			break;
		}
		else
			compraVehiculo();
			break;
		case "ventaVehiculo":
		if (formulario.clienteVenta.value == "" ||
		    formulario.vehiculoVenta.value == "" ||
		    formulario.importeVenta.value == "" ||
		    formulario.fechaVenta.value == null)
		{
			mensaje("Rellene todos los campos obligatorios");
			break;
		}
		else
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
	// (new Date(form.fechaCita.value)).toLocaleDateString(); // Para pasar de YYYY-MM-DD a DD/MM/YYYY los formularios "date"
}
function ventaVehiculo(){
}

/////////////////// Listados ///////////////////
var pestañaListados = null; // Pestaña donde se mostrará los listados
let btnModal; // Define si al introducir las fechas va a un listado u otro

eventoEn("clickLVehiculoVenta","click",clickLVehiculoVenta);
eventoEn("clickLVendidos","click",clickLVendidos);
eventoEn("clickLComprados","click",clickLComprados);
eventoEn("clickLClientes","click",clickLClientes);	
eventoEn("verConFiltros","click",clickLVehiculos);
eventoEn("verListado","click",botonModal);	

function clickLVehiculoVenta(){ abreListadoPestaña(quintocar.listadoALaVenta(),"Vehículos en venta"); }
function clickLVehiculos(){abreListadoPestaña(quintocar.listadoVehiculos(formfiltros.filtroTipo.value,formfiltros.filtroCombustible.value),"Vehículos");}
function clickLClientes(){ abreListadoPestaña(quintocar.listadoClientes(),"Clientes"); }
function clickLVendidos(){ btnModal = "vendidos"; }
function clickLComprados(){ btnModal = "comprados"; }
function botonModal(){ // Enseña un listado u otro
	let fInicio = new Date(document.getElementById("fechaInicio").value);
	let fFinal = new Date(document.getElementById("fechaFinal").value);
	if(btnModal == "vendidos"){ abreListadoPestaña(quintocar.listadoVendidosperiodo(fInicio,fFinal),"Vehículos vendidos");}
	else if (btnModal == "comprados"){ abreListadoPestaña(quintocar.listadoCompradosperiodo(fInicio,fFinal),"Vehículos Comprados");}
}

function abreListadoPestaña(listado,titulo){
	if(!pestañaListados || pestañaListados.closed){ pestañaListados = window.open(""); }
	
	pestañaListados.document.head.innerHTML = '<meta charset="utf-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><title>'+titulo+'</title>';
	pestañaListados.document.body.innerHTML = listado;
	pestañaListados.focus();
}

/////////////////// Validaciones /////////////////

function mensajeErrorDebajo(elemento,mensaje){
	elemento.parentElement.getElementsByClassName("invalid-feedback")[0].innerHTML = mensaje;
	// formulario.classList.add("was-validated"); // ejemplo
}

///////////////// Datos Iniciales /////////////////

function datosIniciales() {

    var cliente = new Cliente("12345678A", "Lucas", "Martínez", 954121512);
    quintocar.altaCliente(cliente);
    cliente = new Cliente("23456789B", "Sandra", "Rodríguez", 692477512);
    quintocar.altaCliente(cliente);
    cliente = new Cliente("12121212C", "Asier", "Palomo", 652032147);
    quintocar.altaCliente(cliente);
    cliente = new Cliente("12323434W", "Marta", "Carrasco", 741542658);
    quintocar.altaCliente(cliente);
    cliente = new Cliente("56743281R", "Adrián", "López", 954618295);
    quintocar.altaCliente(cliente);

    var vehiculo = new Turismo("0583CXV","Seat","Ibiza", "Diesel",true,false,5);
    quintocar.altaVehiculo(vehiculo);
    var vehiculo = new V4x4("9588FFT", "Ford", "Fiesta", "Gasolina",15);
    quintocar.altaVehiculo(vehiculo);
    var vehiculo = new Turismo("4231CAV","Renault","Megane", "Gasolina",true,true,3);
    quintocar.altaVehiculo(vehiculo);
    var vehiculo = new Turismo("5578FGA","Opel","Atra", "Diesel",false,true,5);
    quintocar.altaVehiculo(vehiculo);
    var vehiculo = new V4x4("2564DDF", "Renault", "Clio", "Diesel",5);
    quintocar.altaVehiculo(vehiculo); 
   

}