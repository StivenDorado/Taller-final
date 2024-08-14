class Cliente {
    constructor(nombre, direccion) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.pedidos = [];
    }
  
    realizarPedido(pedido) {
      this.pedidos.push(pedido);
    }
  
    verInformacion() {
      return `Cliente: ${this.nombre}, Dirección: ${this.direccion}, Pedidos: ${this.pedidos.length}`;
    }
  }
  
  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    // el metodo de calcular precio denbe encajar en calñcular la totalidad del p´recio de los productos
    calcularCostoTotal() {
      return this.precio;
    }
  }
  
  class Pedido {
    constructor(fecha) {
      this.fecha = fecha;
      this.productos = [];
      this.estado = "pendiente";
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    calcularCostoTotal() {
      return this.productos.reduce((total, producto) => total + producto.calcularCostoTotal(), 0);
    }
  }
  
  class Pago {
    constructor(metodo) {
      this.metodo = metodo;
    }
  
    procesarPago(monto) {
      return `Procesando pago de ${monto} mediante ${this.metodo}.`;
    }
  }
  
  class Cheque extends Pago {
    constructor(numeroCuenta, banco) {
      super("cheque");
      this.numeroCuenta = numeroCuenta;
      this.banco = banco;
    }
  
    procesarPago(monto) {
      return `Procesando pago de ${monto} mediante cheque del banco ${this.banco}, cuenta ${this.numeroCuenta}.`;
    }
  }
  
  class Tarjeta extends Pago {
    constructor(numeroTarjeta, fechaVencimiento) {
      super("tarjeta");
      this.numeroTarjeta = numeroTarjeta;
      this.fechaVencimiento = fechaVencimiento;
    }
  
    procesarPago(monto) {
      return `Procesando pago de ${monto} mediante tarjeta número ${this.numeroTarjeta}, vencimiento ${this.fechaVencimiento}.`;
    }
  }
  
  // Ejemplo de uso
  const cliente1 = new Cliente("Juan Perez", "Calle Falsa 123");
  const producto1 = new Producto("Camisa", 20);
  const pedido1 = new Pedido(new Date());
  pedido1.agregarProducto(producto1);
  cliente1.realizarPedido(pedido1);
  
  const pago1 = new Tarjeta("1234567890123456", "12/25");
  console.log(cliente1.verInformacion());
  console.log(pago1.procesarPago(pedido1.calcularCostoTotal()));
  