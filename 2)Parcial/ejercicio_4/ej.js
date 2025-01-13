/***************
 *            OBJETOS
 **************/

//Caracteristicas principales de los objetos en JavaScript

//Claves y valores 

// La claves son cadenas o simbolos (unicos)
//Los valores pueden ver de cuakquier tipo: numeros, cadenas, funciones, otros objetos, etc.

//Dinamismo

//los objetos pueden modificarse en tiempo de ejecucion (agregar, modificar, o eliminar propiedades).

//Metodos
//los metodos son funciones asociadas a un objeto.

//Propiedades y Metodos

//Declaracion de un objeto

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 25
}

console.log(persona);

//Metodo en OBJETOS

let persona2 = {
    nombre: 'Jairo',
    apellido: 'Bonilla',
    direccion: 'Quito',
    email: 'dvargas@gmail.com',

    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona2.nombreCompleto());


const persona3 = {
    nombre: 'Maria',
    edad: 25,
    saludar: function () {
        console.log(Hola me llamo ${this.nombre});
    }
}
console.log(persona3.nombre);
persona3.saludar();


//crear un objeto usando el constructor ObjeCt
//otra forma de crear un objeto vacio y agregarle propiedades posteriormente  

const persona4 = new Object(); //crea un objeto en memoria, es decir reserva un nuevo espacio de memoria
persona4.nombre = 'Jose';
persona4.apellido = 'Martinez';
persona4.saludar = function () {
    console.log(Hola me llamo ${this.nombre});
};

console.log(persona4.apellido);
persona4.saludar();

//usando la clase Object.create()
//permite rear un objeto basado en un prototipo

const prototipoPersona = {
    saludar: function () {
        console.log(`Hola desde prototipo, soy ${this.nombre}`);
    }
}

const persona5 = Object.create(prototipoPersona);
persona5.nombre = 'Carlos';

persona5.saludar();


//usado clases
//proporciona una sintaxis mas estructurada para la creacion de Objetos en JS.

class Persona {
    constructor(nombre, apellido, edad, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }
    saludo() {
        console.log(Hola desde clases, me llamo ${this.nombre});
    }
}

const persona6 = new Persona('Ana', 'Rios', 24, 2670513);
persona6.saludo();


//usando funciones
//una forma clasica

function Persona1(nombre, edad, email) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.saludo = function () {
        console.log(Hola desde funciones constructores, me llamo ${this.nombre});
    };
}


const persona7 = new Persona('Luis', 28, 'lpersona@gmail.com');

//Manipular objetos 

//1. Agregar o modificar propiedades

const add = { nombre: 'Pedro' };
add.edad = 35;//agregando una nueva propiedad
add.apellido = 'Bosque';//agregar otra propiedad 

add.nombre = 'Andres';

console.log(add);

//2. Eliminacion de las propiedades de un objeto

delete add.edad;
console.log(add);


//----
add.edad = 25;

//3. Iterar sobre los propiedades del objeto

for (nombrePropiedad in add) {
    console.log(nombrePropiedad);
    console.log(add[nombrePropiedad]);
}

for (let clave in add) {
    console.log(${clave}: ${add[clave]})
}


//4. Verificar las propiedades
console.log('nombre' in add); //
console.log(add.hasOwnProperty('email'));


//Metodos utiles para trabjar con objetos

//1. Object.keys()
//devuelve un array con las claves del objeto

console.log(Object.keys(add));

//2. Objeto.values()
//devuelve un array con los valores del objeto

console.log(Object.values(add));

//3. Object.entries()
//devuelve un array de pares

console.log(Object.entries(add));

//4. Object.assign()
//copia las propiedades de un objeto a otro

const copiaObjeto = Object.assign(add);
console.log(copiaObjeto);

//5. Object.freeze()
//congelar un objeto para evitar ser modificado

Object.freeze(add);

//---Comprobacion
delete add.edad;
console.log(add);

//6. Object.seal()
//permite modificar propiedades existentes, pero no agrega o elimina propiedades

Object.seal(add);

//Nota adicional
let personArray = Object.values(add);
console.log(personArray);

let personaString = JSON.stringify(add);
//notacion convierte en cadena, stringify es convertir en cadena las propiedades del objeto
console.log(personaString);


//-----10/01

//Métodos get en Objetos JS
//mejores practicas para acceder y modificar objetos 
//acceder a los valores de las propiedades

let personaGet = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    edad: 50,
    get nombreCompleto() { //no es una propiedad ahora es un metodo get
        return this.nombre + ' ' + this.apellido
    }
}

console.log(personaGet.nombreCompleto);

//Metodo set en objetos de JavaScript
//Set establece o modifica los valores de los atributos de los objetos

//validacion

let personaSet = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    email: 'mvaldiviezo@gmail.com',
    edad: 23,
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase();
    },
    get nombreCompleto() { //no es una propiedad ahora es un metodo get
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSet.lang);

//Set

let personaSet2 = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    email: 'mvaldiviezo@gmail.com',
    edad: 23,
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() { //no es una propiedad ahora es un metodo get
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSet2.lang);

personaSet2.lang = 'en';

console.log(personaSet2.lang);

//Constructores en JavaScript

//Si se desea crear más objetos del mismo tipo no es posible
//Por esta razon se crean constructores 

//esto es una funcion especial que permite trabajar con objetos en JS

//funcion constructora de tipo persona

function PersonaFC(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new PersonaFC('Juan', 'Sanchez', 'jsanchez@gmail.com');//variable es ahora un metodo que permite crear un objeto de tipo persona
console.log(padre);

padre.tel = '223344455';
console.log(padre);

let madre = new PersonaFC('Lura', 'Moya', 'lmoya@gmail.com');
console.log(madre);


//agregar metodos a un funcion constructora

function PersonaFCM(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}
let padreFCM = new PersonaFCM('Juan', 'Sanchez', 'jsanchez@gmail.com');//variable es ahora un metodo que permite crear un objeto de tipo persona

console.log(padreFCM.nombreCompleto());

let madreFCM = new PersonaFCM('Laura', 'Moya', 'lmoya@gmail.com');//variable es ahora un metodo que permite crear un objeto de tipo persona

console.log(madreFCM.nombreCompleto());

//uso de prototype

PersonaFCM.prototype.tel = '334455566';

console.log(madreFCM);


//Uso del metodo call

let personaC1 = {
    nombre: 'Diego',
    apellido: 'Cajas',
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

let personaC2 = {
    nombre: 'Andres',
    apellido: 'Farias'
}

//para usar el metodo nombrecompleto que pertenece al objeto personaC1
//con los datos del objeto personaC2

console.log(personaC1.nombreCompleto());
console.log(personaC1.nombreCompleto.call(personaC2));


//pasar argumentos o parametros a call

let personaCP1 = {
    nombre: 'Diego',
    apellido: 'Cajas',
    nombreCompleto: function (titulo, tel) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let personaCP2 = {
    nombre: 'Andres',
    apellido: 'Farias'
}

console.log(personaCP1.nombreCompleto('Lic', '66666666'));

console.log(personaCP1.nombreCompleto.call(personaCP2, 'Ing', '22334455'));