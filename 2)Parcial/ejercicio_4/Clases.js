class Conductor {

    #informacionPersonal; //atributo para proteger información sensible del conductor
    constructor(nombre, licencia, informacionPersonal) {
        this.nombre = nombre;
        this.licencia = licencia;
        this.#informacionPersonal = informacionPersonal; 
        this.rutas = [];
    }

    registrarRuta(ruta) {
        this.rutas.push(ruta);
        console.log(`Ruta registrada para el conductor ${this.nombre}: ${ruta}`);
    }

    obtenerInformacionPersonal() {
        return this.#informacionPersonal; 
    }
}

class Vehiculo {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
        this.asignado = false;
    }

    asignar() {
        if (!this.asignado) {
            this.asignado = true;
            console.log(`Vehículo ${this.modelo} con placa ${this.placa} asignado.`);
        } else {
            console.log(`El vehículo ${this.modelo} ya está asignado.`);
        }
    }

    liberar() {
        if (this.asignado) {
            this.asignado = false;
            console.log(`Vehículo ${this.modelo} con placa ${this.placa} liberado.`);
        } else {
            console.log(`El vehículo ${this.modelo} ya está libre.`);
        }
    }
}


class ConductorVIP extends Conductor {
    constructor(nombre, licencia, informacionPersonal) {
        super(nombre, licencia, informacionPersonal);
        this.vehiculoPreferido = null;
    }

    asignarVehiculoPreferido(vehiculo) {
        if (vehiculo instanceof Vehiculo && !vehiculo.asignado) {
            this.vehiculoPreferido = vehiculo;
            vehiculo.asignar();
            console.log(`Vehículo preferido del conductor VIP ${this.nombre}: ${vehiculo.modelo}`);
        } else {
            console.log(`No es permito asignar un vehículo a ${this.nombre}.`);
        }
    }

    liberarVehiculoPreferido() {
        if (this.vehiculoPreferido) {
            this.vehiculoPreferido.liberar();
            console.log(`Vehículo preferido liberado para el conductor VIP ${this.nombre}.`);
            this.vehiculoPreferido = null;
        } else {
            console.log(`${this.nombre} no tiene un vehículo asignado.`);
        }
    }
}


const conductor1 = new Conductor("Carlos Pérez", "ABC123", { telefono: "555-1234", direccion: "Calle Falsa 123" });
const conductorVIP = new ConductorVIP("Ana Gómez", "XYZ987", { telefono: "555-5678", direccion: "Avenida Siempreviva 742" });
const vehiculo1 = new Vehiculo("Toyota Corolla", "XYZ-456");
const vehiculo2 = new Vehiculo("Honda Civic", "ABC-123");

conductor1.registrarRuta("Ruta 1");
conductorVIP.asignarVehiculoPreferido(vehiculo1);
conductorVIP.liberarVehiculoPreferido();
