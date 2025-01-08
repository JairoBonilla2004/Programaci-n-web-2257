const inventario_tienda = {
  producto1: { nombre: "Shampoo", precio: 1.5, cantidad: 50 },
  producto2: { nombre: "Protector Solar", precio: 22.0, cantidad: 40 },
  producto3: { nombre: "Protector labial eucerin", precio: 1.2, cantidad: 60 },
  producto4: { nombre: "Rasuradora", precio: 11.8, cantidad: 30 },
};

Object.seal(inventario_tienda);

function venderProducto(nombre, cantidad) {
  for (const inv in inventario_tienda) {
    const producto = inventario_tienda[inv];
    if (producto.nombre === nombre) {
      if (producto.cantidad >= cantidad) {
        producto.cantidad -= cantidad;
        console.log(
          `Venta realizada exitosamente!: ${cantidad} ${nombre}. Quedan ${producto.cantidad} en stock.`
        );
        return;
      } else {
        console.log(
          `Error al realizar la compra: Stock insuficiente para ${nombre}!`
        );
        return;
      }
    }
  }
  console.log(
    `Error al realizar la compra: El producto ${nombre} no existe en el inventario!`
  );
}

function aplicarDescuento(porcentaje) {
  for (const key in inventario_tienda) {
    const producto = inventario_tienda[key];
    const descuento = producto.precio * (porcentaje / 100);

    if (producto.precio - descuento >= 0) {
      producto.precio -= descuento;
    } else {
      producto.precio = 0;
    }
  }
  console.log(`Descuento del ${porcentaje}% aplicado a todos los productos.`);
}

venderProducto("Shampoo", 10);
venderProducto("Protector Solar", 50);
venderProducto("Gel", 5);

aplicarDescuento(10);

console.log("Inventario final:", inventario_tienda);
