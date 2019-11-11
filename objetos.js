"use strict";
class Cliente {
    constructor(nif, nombre, apellidos, telefono) {
        this.dni = dni;
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
    }
}

class Venta {
    constructor(Cliente, Vehiculo, importe, fechaVenta) { //importe es float
        this.Cliente = Cliente;
        this.Vehiculo = Vehiculo;
        this.importe = importe;
        this.fechaVenta = fechaVenta;
    }

    toHtmlRow() {
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
    }
}

class Compra {
    constructor(Cliente, Vehiculo, importe, fechaCompra) {
        this.Cliente = Cliente;
        this.Vehiculo = Vehiculo;
        this.importe = importe;
        this.fechaCompra = fechaCompra;
    }

    toHtmlRow() {
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
        row += "<td>" + this.abs + "</td>";
        row += "<td>" + this.descapotable + "</td>";
        row += "<td>" + this.numPuertas + "</td>";
        row += "</tr>";
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
    }
}

class QuintoCar {
    constructor() {
        this.Clientes = [];
        this.Ventas = [];
        this.Compras = [];
        this.Vehiculos = [];
    }
}

altaCliente(cliente) {
    if (Clientes.filter(clienteTemp => clienteTemp.nif == cliente.nif).length == 0) {
        Clientes.push(cliente);
        return "Cliente dado de alta";
    }
    return "El cliente ya existe";
}

altaVehiculo(vehiculo) {
    if ((Clientes.filter(vehiculotemp => vehiculoTemp.matricula == vehiculo.matricula).length == 0) {
            Clientes.push(vehiculo);
            return "Vehiculo dado de alta";
        }
        return "El vehiculo ya existe";
    }

    buscarCliente(nif) {
        Clientes.foreach()
        return Cliente;
    }

    buscarCompra(Vehiculo) {
        return Compra;
    }

    buscarVenta(Vehiculo) {
        return Venta;
    }

    Comprar(matricula, nif, importe, fecha) {
        return String;
    }

    Vender(matricula, nif, importe, fecha) {
        return String;
    }

    listadoALaVenta() {
        return table;
    }

    listadoVendidosperiodo(fechaInicio, fechaFin) {
        return table;
    }

    listadoComprasperiodo(fechaInicio, fechaFin) {
        return table;
    }

    listadoVehiculos() {
        return table;
    }

    listadoClientes() {
        return table;
    }
}