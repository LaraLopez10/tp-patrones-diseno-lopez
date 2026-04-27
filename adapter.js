class SistemaNuevo {
  ejecutarPago() {
    console.log("Pago realizado con sistema nuevo");
  }
}

class Adapter {
  constructor(sistemaNuevo) {
    this.sistemaNuevo = sistemaNuevo;
  }

  pagar() {
    this.sistemaNuevo.ejecutarPago();
  }
}

function procesarVenta(metodoPago) {
  metodoPago.pagar();
}

const sistema = new SistemaNuevo();
const adaptador = new Adapter(sistema);

procesarVenta(adaptador);