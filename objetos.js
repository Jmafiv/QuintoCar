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
        row += "<td>" + this.Cliente.nif + "</td>";
        row += "<td>" + this.Cliente.nombre + "</td>";
        row += "<td>" + this.Cliente.apellidos + "</td>";
        row += "<td>" + this.Cliente.telefono + "</td>";
        row += "</tr>";
    }
}
class Venta {
    constructor(Cliente, Vehiculo, importe, fVenta) {
        this.Cliente = Cliente;
        this.Vehiculo = Vehiculo;
        this.importe = importe;
        this.fVenta = fVenta;
    }
    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.Cliente.nif + "</td>";
        row += "<td>" + this.Cliente.nombre + "</td>";
        row += "<td>" + this.Cliente.apellidos + "</td>";
        row += "<td>" + this.Cliente.telefono + "</td>";
        row += "<td>" + this.Vehiculo.matricula + "</td>";
        row += "<td>" + this.Vehiculo.marca + "</td>";
        row += "<td>" + this.Vehiculo.modelo + "</td>";
        row += "<td>" + this.Vehiculo.combustible + "</td>";
        row += "<td>" + this.Venta.importe + "</td>";
        row += "<td>" + this.Venta.fVenta + "</td>";
        row += "</tr>";
    }
}
class Compra {
    constructor(Cliente, Vehiculo, importe, fCompra) {
        this.Cliente = Cliente;
        this.Vehiculo = Vehiculo;
        this.importe = importe;
        this.fCompra = fCompra;
    }
    toHtmlRow() {

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
        row += "<td>" + this.Vehiculo.matricula + "</td>";
        row += "<td>" + this.Vehiculo.marca + "</td>";
        row += "<td>" + this.Vehiculo.modelo + "</td>";
        row += "<td>" + this.Vehiculo.combustible + "</td>";
        row += "</tr>";
    }
}
class Turismo extends Vehiculo {
    super(matricula, marca, modelo, combustible);
    constructor(abs, descapotable, numPuertas) {
        this.abs = abs;
        this.descapotable = descapotable;
        this.numPuertas = numPuertas;
    }
    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.Vehiculo.matricula + "</td>";
        row += "<td>" + this.Vehiculo.marca + "</td>";
        row += "<td>" + this.Vehiculo.modelo + "</td>";
        row += "<td>" + this.Vehiculo.combustible + "</td>";
        row += "<td>" + this.Turismo.abs + "</td>";
        row += "<td>" + this.Turismo.descapotable + "</td>";
        row += "<td>" + this.Turismo.numPuertas + "</td>";
        row += "</tr>";
    }
}
class V4x4 {
    super(matricula, marca, modelo, combustible);
    constructor(pendienteMax) {
        this.pendienteMax = pendienteMax;
    }
    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.Vehiculo.matricula + "</td>";
        row += "<td>" + this.Vehiculo.marca + "</td>";
        row += "<td>" + this.Vehiculo.modelo + "</td>";
        row += "<td>" + this.Vehiculo.combustible + "</td>";
        row += "<td>" + this.V4x4.pendienteMax + "</td>";
        row += "</tr>";
    }
}

class QuintoCar {
    constructor(Clientes, Ventas, Compras, Vehiculos) {
        this.Clientes = [];
        this.Ventas = [];
        this.Compras = [];
        this.Vehiculos = [];
    }

}