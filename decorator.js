class Pizza {
  costo() {
    return 1000;
  }
}

function agregarQueso(pizza) {
  const costoOriginal = pizza.costo();
  pizza.costo = () => costoOriginal + 200;
  return pizza;
}

function agregarPepperoni(pizza) {
  const costoOriginal = pizza.costo();
  pizza.costo = () => costoOriginal + 300;
  return pizza;
}

let pizza = new Pizza();
pizza = agregarQueso(pizza);
pizza = agregarPepperoni(pizza);

console.log(pizza.costo()); // 1500