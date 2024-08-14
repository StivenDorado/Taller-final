class Persona {
    constructor(nombre, apellido, direccion, telefono, tipo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.tipo = tipo; 
    }

    informacionPersonas() {
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Direccion: ${this.direccion}, Telefono: ${this.telefono}, Tipo: ${this.tipo}`;
    }
}

class Matrimonio {
    constructor(fecha, lugar) {
        this.fecha = fecha;
        this.lugar = lugar;
        this.pareja = [];
        this.testigos = [];
        this.juez = null;
    }

    asignarJuez(persona) {
        this.juez = persona;
    }

    asignarTestigos(personas) {
        this.testigos = personas;
    }

    asignarContrayentes(personas) {
        this.pareja = personas;
    }
}

// Instancias de Uso
let juez = new Persona('Juan', 'Pérez', 'Calle 123', '12345', 'Juez');
let contrayente1 = new Persona('María', 'López', 'Avenida 456', '98765', 'Contrayente');
let contrayente2 = new Persona('Carlos', 'Gómez', 'Calle 789', '54321', 'Contrayente');
let persona4 = new Persona('Ana', 'Martínez', 'Avenida 321', '67890', 'Testigo');
let persona5 = new Persona('Luis', 'Hernández', 'Calle 456', '13579', 'Testigo');

const matrimonio = new Matrimonio('2023-11-11', 'Iglesia San Juan');
matrimonio.asignarJuez(juez);
matrimonio.asignarContrayentes([contrayente1, contrayente2]);
matrimonio.asignarTestigos([persona4, persona5]);

console.log(matrimonio.juez.informacionPersonas());

matrimonio.pareja.forEach(contrayente => {
    console.log(contrayente.informacionPersonas());
});

matrimonio.testigos.forEach(testigo => {
    console.log(testigo.informacionPersonas());
});
