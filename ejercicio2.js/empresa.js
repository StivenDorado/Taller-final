class Persona {
  constructor(nombre, edad, tipo) {
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
  }

  mostrarInformacion() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, Tipo: ${this.tipo}`;
  }
}

class Empleado extends Persona {
  constructor(nombre, edad, tipo, sueldoBruto) {
    super(nombre, edad, tipo);
    this.sueldoBruto = sueldoBruto;
    this.categoria = this.asignarCategoria();
  }

  mostrarInformacion() {
    return `Información del empleado:\n${super.mostrarInformacion()}\nSueldo Bruto: ${this.sueldoBruto}, Categoría: ${this.categoria}`;
  }

  asignarCategoria() {
    if (this.sueldoBruto > 3000) {
      return 'Alta';
    } else if (this.sueldoBruto >= 2000) {
      return 'Media';
    } else {
      return 'Baja';
    }
  }
}

class Cliente extends Persona {
  constructor(nombre, edad, tipo, telefono) {
    super(nombre, edad, tipo);
    this.telefono = telefono;
  }

  mostrarInformacion() {
    return `Información del cliente:\n${super.mostrarInformacion()}\nTeléfono: ${this.telefono}`;
  }
}

class Empresa {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.directivos = [];
  }

  mostrarInformacion() {
    let informacion = `Empresa: ${this.nombre}, Dirección: ${this.direccion}\nDirectivos:\n`;
    this.directivos.forEach(directivo => {
      informacion += `${directivo.mostrarInformacion()}\n`;
    });
    return informacion;
  }

  agregarDirectivo(directivo) {
    this.directivos.push(directivo);
  }
}

// Ejemplo de uso
const empleado1 = new Empleado('Stiven', 20, 'Empleado', 2500);
const empresa1 = new Empresa('Empresa', 'Carrera 7329');
empresa1.agregarDirectivo(empleado1);
console.log(empresa1.mostrarInformacion());
