"use strict";
class Cliente {
    constructor(nif, nombre, apellidos, telefono) {
        this.nif = nif;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }

    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.nif + "</td>";
        row += "<td>" + this.nombre + "</td>";
        row += "<td>" + this.apellidos + "</td>";
        row += "<td>" + this.telefono + "</td>";
        row += "</tr>";
        return row;
    }
}

class Venta {
    constructor(cliente, vehiculo, importe, fechaVenta) { //importe es float
        this.cliente = cliente;
        this.vehiculo = vehiculo;
        this.importe = importe;
        this.fechaVenta = fechaVenta;
    }

    toHtmlRow() { // Necesita acceso a las compras
        let row = "<tr>";
        row += "<td>" + this.nif + "</td>";
        row += "<td>" + this.nombre + "</td>";
        row += "<td>" + this.apellidos + "</td>";
        row += "<td>" + this.telefono + "</td>";
        row += "<td>" + this.matricula + "</td>";
        row += "<td>" + this.marca + "</td>";
        row += "<td>" + this.modelo + "</td>";
        row += "<td>" + this.combustible + "</td>";
        row += "<td>" + this.importe + "</td>";
        row += "<td>" + this.fechaVenta + "</td>";
        row += "</tr>";
        return row;
    }
}

class Compra {
    constructor(cliente, vehiculo, importe, fechaCompra) {
        this.cliente = cliente;
        this.vehiculo = vehiculo;
        this.importe = importe;
        this.fechaCompra = fechaCompra;
    }

    toHtmlRow() { // Necesita acceso a las ventas
        let row = "<tr>";
        row += "<td>" + this.nif + "</td>";
        row += "<td>" + this.nombre + "</td>";
        row += "<td>" + this.apellidos + "</td>";
        row += "<td>" + this.telefono + "</td>";
        row += "<td>" + this.matricula + "</td>";
        row += "<td>" + this.marca + "</td>";
        row += "<td>" + this.modelo + "</td>";
        row += "<td>" + this.combustible + "</td>";
        row += "<td>" + this.importe + "</td>";
        row += "<td>" + this.fechaCompra + "</td>";
        row += "</tr>";
        return row;
    }
}

class Vehiculo {
    constructor(matricula, marca, modelo, combustible) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.combustible = combustible;
    }

    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.matricula + "</td>";
        row += "<td>" + this.marca + "</td>";
        row += "<td>" + this.modelo + "</td>";
        row += "<td>" + this.combustible + "</td>";
        row += "</tr>";
        return row;
    }
}

class Turismo extends Vehiculo {
    constructor(matricula, marca, modelo, combustible, abs, descapotable, numPuertas) {
        super(matricula, marca, modelo, combustible);
        this.abs = abs;
        this.descapotable = descapotable;
        this.numPuertas = numPuertas;
    }

    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.matricula + "</td>";
        row += "<td>" + this.marca + "</td>";
        row += "<td>" + this.modelo + "</td>";
        row += "<td>" + this.combustible + "</td>";
        row += "<td>" + (this.abs?"Sí":"No") + "</td>";
        row += "<td>" + (this.descapotable?"Sí":"No") + "</td>";
        row += "<td>" + this.numPuertas + "</td>";
        row += "</tr>";
        return row;
    }
}

class V4x4 extends Vehiculo {
    constructor(matricula, marca, modelo, combustible, pendienteMax) {
        super(matricula, marca, modelo, combustible);
        this.pendienteMax = pendienteMax;
    }

    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.matricula + "</td>";
        row += "<td>" + this.marca + "</td>";
        row += "<td>" + this.modelo + "</td>";
        row += "<td>" + this.combustible + "</td>";
        row += "<td>" + this.pendienteMax + "</td>";
        row += "</tr>";
        return row;
    }
}

class QuintoCar {
    constructor() {
        this.clientes = [];
        this.ventas = [];
        this.compras = [];
        this.vehiculos = [];
    }

    altaCliente(cliente) {
        if (this.clientes.filter(clienteTemp => clienteTemp.nif == cliente.nif).length == 0) {
            this.clientes.push(cliente);
            return "Cliente dado de alta";
        }
        return "El cliente ya existe";
    }

    altaVehiculo(vehiculo) {
        if (this.vehiculos.filter(vehiculoTemp => vehiculoTemp.matricula == vehiculo.matricula).length == 0) {
                this.vehiculos.push(vehiculo);
                return "Vehiculo dado de alta";
        }
        return "El vehiculo ya existe";
    }

    buscarCliente(nif) {
        let c;
        this.clientes.forEach(compara);

        function compara(cliente, index) {
            if (cliente.nif == nif) {
                c = cliente;
            }
        }
        return c;
    }

    buscarCompra(vehiculo) {
        let c;
        this.compras.forEach(compara);
        function compara(compra, index) {
            if (compra.vehiculo.matricula == vehiculo.matricula) {
               c = compra;
            }
        }
        return c;
    }

    buscarVenta(vehiculo) {
        let v;
        this.ventas.forEach(compara);
        function compara(venta, index) {
            if (venta.vehiculo.matricula == vehiculo.matricula) {
               v = venta;
            }
        }
        return v;
    }
    buscarVehiculo(matricula){
        let v;
        this.vehiculos.forEach(compara);
        function compara(vehiculo, index) {
            if (vehiculo.matricula == matricula) {
               v = vehiculo;
            }
        }
        return v;
    }
    comprar(matricula, nif, importe, fecha) {
        let mensaje="";
    	var vehiculo = this.buscarVehiculo(matricula);
        let cliente = this.buscarCliente(nif);

        if(vehiculo == undefined)
        {
            mensaje = "Ese vehículo no está registrado<br>";
        }
        else if(cliente == undefined)
        {
            mensaje += "No se ha encontrado el cliente<br>";
        }
        else if(this.buscarCompra(vehiculo) != undefined)
        {
            mensaje += "Ese vehículo se ha comprado ya<br>";
        }
        else if (this.buscarVenta(vehiculo) != undefined)
        {
            mensaje += "Ese vehículo se ha vendido ya<br>";
        }
        else{
            mensaje = "Se ha comprado correctamente";
        }

        let compra = new Compra(cliente,vehiculo,importe,fecha);
        this.compras.push(compra);
        return mensaje;
    }

    vender(matricula, nif, importe, fecha) {
        let mensaje;
        let vehiculo = this.vehiculos.forEach(compara);
        let cliente = this.buscarCliente(nif);
        function compara(vehiculo, index) {
            if (vehiculo.matricula == matricula) {
                return vehiculo;
            }
        }

        if(vehiculo == undefined)
        {
            mensaje = "Ese vehículo no está registrado\n";
        }
        if(cliente == undefined)
        {
            mensaje += "No se ha encontrado el cliente\n";
        }
        if(this.buscarCompra(vehiculo) != undefined)
        {
            mensaje += "Ese vehículo se ha comprado ya\n";
        }
        if (this.buscarVenta(vehiculo) != undefined)
        {
            mensaje += "Ese vehículo se ha vendido ya\n";
        }

        let venta = new Venta(cliente,vehiculo,importe,fecha);
        this.ventas.push(venta);
        return mensaje;
    }

    listadoALaVenta() {
        let tabla = "<table class='table'><thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th>ABS</th><th>Descapotable</th><th>Nº Puertas</th><th>Pendiente Máxima</th></tr></thead><tbody>";
        this.compras.forEach( (compra) => {
           tabla += this.todosLosDatosVehiculo(compra.vehiculo);
        });
        tabla += "</tbody></table>";
        return tabla;
    }

    listadoVendidosperiodo(fechaInicio, fechaFin) {
        // Cabecera de la tabla
        let tabla = "<div class='table-responsive'><table class='table'><thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th>ABS</th><th>Descapotable</th><th>Nº Puertas</th><th>Pendiente Máxima</th><th>Fecha Compra</th><th>Importe Venta</th><th>Importe Compra</th><th>Fecha Venta</th><th>Beneficio</th></tr></thead><tbody>";
        // Ordenación ascendente
        this.ventas.sort(function(venta,otraVenta){
            if (venta.fechaVenta > otraVenta.fechaVenta) {return 1;}
            if (venta.fechaVenta < otraVenta.fechaVenta) {return -1;}
            return 0;
        });
        // Línea de cada venta
        this.ventas.forEach( (venta) => {
            let compraCoche = this.buscarCompra(venta.vehiculo); // Busca la compra del coche que se ha vendido
            if(venta.fechaVenta > fechaInicio && venta.fechaVenta < fechaFin){ // Comprueba si se vendió en el periodo dado
                tabla += this.todosLosDatosVehiculo(venta.vehiculo).substring(0,-5);
                tabla+="<td>"+compraCoche.fechaCompra.toLocaleDateString()+"</td><td>"+venta.fechaVenta.toLocaleDateString()+"</td><td>"+compraCoche.importe+"</td><td>"+venta.importe+"</td><td>"+(venta.importe - compraCoche.importe)+"</td></tr>";
           }
        });
        tabla += "</tbody></table></div>";
        return tabla;
    }
    listadoCompradosperiodo(fechaInicio, fechaFin) {
        // Cabecera de la tabla
        let tabla = "<div class='table-responsive'><table class='table'><thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th>ABS</th><th>Descapotable</th><th>Nº Puertas</th><th>Pendiente Máxima</th><th>Fecha Compra</th><th>Importe Venta</th><th>Importe Compra</th><th>Fecha Venta</th><th>Beneficio</th></tr></thead><tbody>";
        // Ordenación descendente 
        this.compras.sort(function(compra,otraCompra){
            if (compra.fechacompra > otraCompra.fechaVenta) {return -1;}
            if (compra.fechaVenta < otraCompra.fechaVenta) {return 1;}
            return 0;
        });
        // Línea de cada compra
        this.compras.forEach( (compra) => {
            if(compra.fechaCompra > fechaInicio && compra.fechaCompra < fechaFin){ // Comprueba si se compró en el periodo dado
                tabla += this.todosLosDatosVehiculo(compra.vehiculo).substring(0,-5);
                tabla +="<td>"+compraCoche.fechaCompra.toLocaleDateString()+"</td><td>"+compra.fechaCompra.toLocaleDateString()+"</td><td>"+compraCoche.importe+"</td><td>"+venta.importe+"</td><td>"+(venta.importe - compraCoche.importe)+"</td></tr>";
           }
        });
        tabla += "</tbody></table></div>";
        return tabla;    }

    listadoVehiculos(tipo,combustible) {
        let tabla = "";
        tabla = "<table class='table'><thead class='thead-light'><tr><th colspan='100%' class='text-center'>Tipo: "+tipo+" - Combustible: "+combustible+"</th></tr></thead>";
        if(tipo=="Turismo"){
            tabla += "<thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th scope='col'>ABS</th><th scope='col'>Descapotable</th><th scope='col'>Nº Puertas</th></tr></thead><tbody>";
            this.vehiculos.forEach( (vehiculo) => {
                if(vehiculo instanceof Turismo && (vehiculo.combustible == combustible  || combustible == "Todos")){ tabla+=vehiculo.toHtmlRow();}
            });
        }
        else if(tipo=="V4x4"){
            tabla += "<thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th scope='col'>Pendiente Máxima</th></thead><tbody>";
            this.vehiculos.forEach( (vehiculo) => {
                if(vehiculo instanceof V4x4 && (vehiculo.combustible == combustible || combustible == "Todos")){ tabla+=vehiculo.toHtmlRow();}
            });
        }
        else{
            tabla += "<thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th>ABS</th><th>Descapotable</th><th>Nº Puertas</th><th>Pendiente Máxima</th></tr></thead><tbody>";
            this.vehiculos.forEach( (vehiculo) => {
                if(vehiculo.combustible == combustible || combustible == "Todos"){ tabla+=this.todosLosDatosVehiculo(vehiculo);}
            });
        }
        return tabla;
    }
    todosLosDatosVehiculo(vehiculo){
        let linea = "<tr><td>"+vehiculo.matricula+"</td><td>"+vehiculo.marca+"</td><td>"+vehiculo.modelo+"</td><td>"+vehiculo.combustible+"</td>";
        if(vehiculo instanceof Turismo){
           linea+= "<td>"+(vehiculo.abs?"Sí":"No")+"</td><td>"+(vehiculo.descapotable?"Sí":"No")+"</td><td>"+vehiculo.numPuertas+"</td><td>-</td></tr>";   
        }
        else{
            linea += "<td>-</td><td>-</td><td>-</td><td>"+vehiculo.pendienteMax+"</td></tr>";   
        }
        return linea;
    }
    listadoClientes() {
        this.clientes.sort(function(cliente,otroCliente)
        {
            if (cliente.apellidos > otroCliente.apellidos) {return 1;}
            if (cliente.apellidos < otroCliente.apellidos) {return -1;}
            return 0;
        });

        let tabla = "<table class='table'><thead class='thead-dark'><tr><th scope='col'>NIF</th><th scope='col'>Nombre</th><th scope='col'>Apellidos</th><th scope='col'>Teléfono</th></tr></thead><tbody>";
        this.clientes.forEach( function(cliente) {
            tabla+=cliente.toHtmlRow();
        });
        tabla += "</tbody></table>";
        return tabla;
    }
}