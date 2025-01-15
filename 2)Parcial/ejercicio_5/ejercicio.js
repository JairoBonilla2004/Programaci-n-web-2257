class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio > 0 ? precio : 0;
        this._categoria = categoria;
        this._stock = stock >= 0 ? stock : 0; 
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio > 0 ? precio : 0;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        this._stock = stock >= 0 ? stock : 0;
    }

    disminuirStock(cantidad) {
        if (this._stock >= cantidad) {
            this._stock -= cantidad;
        } else {
            console.log(`No hay suficiente stock de ${this._nombre}`);
        }
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}, categoría: ${this._categoria}, stock: ${this._stock}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.stock > 0) {
                this._productos.push(producto);
                producto.disminuirStock(1);
            } else {
                console.log(`El producto ${producto.nombre} no tiene suficiente stock.`);
            }
        } else {
            console.log("No se puede agregar más productos a la Orden");
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const producto of this._productos) {
            let descuento = (producto.categoria === 'Electrónica') ? 0.1 : 0;
            totalVenta += producto.precio * (1 - descuento);
        }
        return totalVenta;
    }

    mostrarOrden() {
        let productosOrden = '';
        for (const producto of this._productos) {
            productosOrden += `\n{${producto.toString()}}`;
        }

        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal().toFixed(2)}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto('Pantalón', 200, 'Ropa', 10);
let producto2 = new Producto('Vestido', 300, 'Ropa', 5);
let producto3 = new Producto('Televisor', 500, 'Electrónica', 2);

console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto3); 
orden1.agregarProducto(producto3);
orden1.mostrarOrden();

console.log(producto1.toString());
console.log(producto3.toString());
