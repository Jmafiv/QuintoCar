# QuintoCar
Práctica grupal para entorno cliente | 2º Desarrollo de aplicaciones Web

* [Trello](https://trello.com/b/fT76CUSb) - Tablero de tareas para la organización del equipo

## Guía de funciones
### principal.js
Aquí se definen los métodos que trabajan como intermediarios entre la interfaz y las clases.

#### Visualización:
---
* **mensaje(texto)** - Muestra en la interfaz un mensaje de error o confirmación.
* **mostrarAltaCliente()** - Muestra en pantalla el formulario de alta clientes y oculta el resto.
* **mostrarAltaVehiculo()** - Muestra en pantalla el formulario de alta clientes y oculta el resto.
* **mostrarCompraVehiculo()** - Muestra en pantalla el formulario de alta clientes y oculta el resto.
* **mostrarVentaVehiculo()** - Muestra en pantalla el formulario de alta clientes y oculta el resto.
* **mostrarSegunTipo()** - Muestra los atributos de los vehículos según su tipo.
* **function ocultaCosas(array,menu)** - Recibe un array con cada elemento de la interfaz y según su prefijo lo oculta o lo muestra. El parámetro menú señala cuando tiene que modificar el apartado del navbar activo.
* **deshabilitaInputs(elemento,NoSi)** - Desactiva la introducción de datos en los formularios ocultos.
* **eventoEn(elemento,tipo,funcion)** - Asigna a un elemento la función indicada según que evento se produzca.

#### Envío de formularios:
---
* **enviar()** - Función que realiza el botón enviar y, según que apartado se muestra, realiza una función u otra.
* **altaCliente()** - Recoge los datos del formulario e introduce el cliente en la base de datos.
* **altaVehiculo()** - Recoge los datos del formulario e introduce el vehículo en la base de datos.
* **compraVehiculo()** - Recoge los datos del formulario e introduce la compra en la base de datos.
* **ventaVehiculo()** - Recoge los datos del formulario e introduce la venta en la base de datos.

#### Listados:
---
* **abreListadoPestaña(listado,titulo)** - Muestra en otra pestaña el listado dado con el título recibido.
* **clickLVehiculoVenta()** - Al hacer clic en el menú, muestra los vehículos en venta.
* **clickLVehiculos()** - Al hacer clic en el menú, muestra todos los vehículos.
* **clickLClientes()** - Al hacer clic en el menú, muestra todos los clientes.
* **clickLVendidos()** - Al hacer clic en el menú, guarda que ha sido pulsado.
* **clickLComprados()**  - Al hacer clic en el menú, guarda que ha sido pulsado.
* **botonModal()** - Según el clic dado en el menú, señala un modal para introducir un periodo y muestra el listado correspondiente.

#### Validaciones: 
---
* **mensajeErrorDebajo(elemento,mensaje)** - Muestra un mensaje bajo el input del formulario erróneo.

### objetos.js
Aquí se declaran las clases y sus métodos.

#### Clases:
---
* **Cliente** - Contiene los atributos de cliente y la función *toHTMLRow* que crea la línea de la tabla con los datos de cada cliente.
* **Venta** - Contiene los atributos de venta y la función *toHTMLRow* que crea la línea de la tabla con los datos de cada venta.
* **Compra** - Contiene los atributos de compra y la función *toHTMLRow* que crea la línea de la tabla con los datos de cada compra.
* **Vehiculo** - Contiene los atributos de vehículo y la función *toHTMLRow* que crea la línea de la tabla con los datos de cada vehículo.
* **Turismo** *extends Vehiculo* - Contiene los atributos específicos de este tipo de vehículo y la función *toHTMLRow* que crea la línea de la tabla con los datos de cada turismo.
* **V4x4** *extends Vehiculo* - Contiene los atributos específicos de este tipo de vehículo y la función *toHTMLRow* que crea la línea de la tabla con los datos de cada V4x4.
* **QuintoCar** - Contiene las listas de clientes, ventas, compras y vehículos. También, los métodos para introducir y manipular estas listas.

#### Clase QuintoCar:
---
* **altaCliente(cliente)** - Mete un cliente recibido en la lista clientes.
* **altaVehiculo(vehiculo)** - Mete un vehículo recibido en la lista vehículos.
* **buscarCliente(nif)** - Busca en la lista clientes un cliente por su nif.
* **buscarCompra(vehiculo)** - Busca en la lista compras un compra por el vehículo comprado.
* **buscarVenta(Vehiculo)** - Busca en la lista ventas una venta por el vehículo vendido.
* **Comprar(matricula, nif, importe, fecha)** - Mete en la lista compras la compra realizada.
* **Vender(matricula, nif, importe, fecha)** - Mete en la lista ventas la venta realizada.
* **listadoALaVenta()** - Busca los vehículos a la venta y devuelve una string con la tabla de datos.
* **listadoVendidosperiodo(fechaInicio, fechaFin)** - Busca los vehículos vendidos en un periodo y devuelve una string con la tabla de datos.
* **listadoComprasperiodo(fechaInicio, fechaFin)** - Busca los vehículos comprados y devuelve una string con la tabla de datos.
* **listadoVehiculos()** - Busca todos los vehículos y devuelve una string con la tabla de datos.
* **listadoClientes()** - Busca todos los clientes y devuelve una string con la tabla de datos.