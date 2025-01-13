class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.vendidos = 0;
    }
}

class Inventario {
    constructor(productoList = []) {//Relación de clases un inventario puede tener muchos productos
        this.productoList = productoList; // Lista de productos
    }

    agregarProductos(objProducto) {//
        this.productoList.push(objProducto);
    }

    listarProductosOrdenados() { 
        this.productoList.sort((a, b) => a.precio - b.precio);
    }

    filtrarProductosCategoria(categoria) { // Filtrar productos por categoría
        return this.productoList.filter(producto => producto.categoria === categoria);
    }

    aplicarDescuento(categoria, porcentaje) {
        for(let producto of this.productoList){
            if (producto.categoria === categoria) {
                producto.precio -= producto.precio * (porcentaje / 100);
            }
        }
        
        console.log(`Descuento del ${porcentaje}% aplicado a los productos de la categoría '${categoria}'.`);
    }

    getP() {
        return this.productoList;
    }
}

class Venta {
    constructor(inventario) {
        this.ventas = []; // Lista de ventas realizadas
        this.totalIngresos = 0;
        this.inventario = inventario;
    }

    realizarVenta(nombreProducto, cantidad) {
        const producto = this.inventario.productoList.find(p => p.nombre === nombreProducto);
        if (!producto) {
            console.log(`Producto ${nombreProducto} no encontrado en el inventario.`);
            return false;
        }

        if (producto.cantidad < cantidad) {
            console.log(`No hay suficiente cantidad de ${nombreProducto} disponible.`);
            return false;
        }

        producto.cantidad -= cantidad;
        producto.vendidos += cantidad;
        const ingreso = producto.precio * cantidad;
        this.totalIngresos += ingreso;

        const fecha = new Date();
        this.ventas.push({
            producto: nombreProducto,
            cantidad,
            ingreso,
            fecha,
        });

        console.log(`Venta realizada: ${cantidad} de ${nombreProducto}. Ingreso: $${ingreso}`);
        return true;
    }

    generarReporte(inventario) {
        const productoMasVendido = inventario.productoList.reduce((masVendido, producto) => {
            return producto.vendidos > (masVendido?.vendidos || 0) ? producto : masVendido;
        }, null);

        console.log("\n === Reporte Detallado ===");
        console.log("Inventario Actualizado:");
        console.log("\nVentas Realizadas:");
        for(let venta of this.ventas){
            console.log(`[${venta.fecha}] Producto: ${venta.producto}, Cantidad: ${venta.cantidad}, Ingreso: $${venta.ingreso}`);
        }
       
        console.log(`\nTotal Ingresos Generados: $${this.totalIngresos}`);
        if (productoMasVendido) {
            console.log(`Producto Más Vendido: ${productoMasVendido.nombre} (${productoMasVendido.vendidos} unidades)`);
        }
    }
}

let pro1 = new Producto("Manzana", 1.25, 12, "Fruta");
let pro2 = new Producto("Pera", 1.5, 8, "Fruta");
let pro3 = new Producto("Cereal", 4.99, 5, "Granos");
let pro4 = new Producto("Sandia" ,5.26, 25, "frutas");
let pro5 = new Producto("Lechuga",1.25,15, "Verduras");
let pro6 = new Producto("Pepino",4.25,18, "Verduras");

let inv = new Inventario();
inv.agregarProductos(pro1);
inv.agregarProductos(pro2);
inv.agregarProductos(pro3);
inv.agregarProductos(pro4);
inv.agregarProductos(pro5);
inv.agregarProductos(pro6);

//Método que me sirve para verificar si los productos se están ordenando
inv.listarProductosOrdenados();
console.log(inv.getP());//
let venta = new Venta(inv);


//Método que me sirve para filtrar productos por categoría
const productos_categoria = inv.filtrarProductosCategoria("Fruta");
console.log(productos_categoria);



//Realizamos una venta con un producto que no existe y la cantidad no es la suficiente
venta.realizarVenta("Electrodomesticos",4);
venta.realizarVenta("Manzana",800);

//Realizamos las ventas con datos válidos

venta.realizarVenta( "Manzana", 5);
venta.realizarVenta("Pera", 3);
venta.realizarVenta("Sandia",24);

venta.generarReporte(inv);

