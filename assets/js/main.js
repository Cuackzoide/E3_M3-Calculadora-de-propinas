//Creacion de las funciones
function calcularPropina(monto, porcentaje) {
  let propina = monto * (porcentaje / 100);
  return propina;
}

function calcularTotal(monto, propina) {
  let total = monto + propina;
  return total;
}
// Captura de datos
let cuenta = parseFloat(
  prompt("Ingrese el monto de la cuenta").replace(/[$.,]/g, "") // valores como 15.000
);
let porcentajePropina = parseFloat(
  prompt("Ingrese el porcentaje de la propina:").replace("%", "") // valores como 15%
);

// Invocación y almacenamiento
let montoPropina = calcularPropina(cuenta, porcentajePropina);
let montoTotal = calcularTotal(cuenta, montoPropina);

// Presentación de resultados
console.log(
  `--- Resumen de la Cuenta ---
    Monto de la cuenta: $${cuenta}
    Propina (${porcentajePropina}%): $${montoPropina}
    Total a pagar: $${montoTotal}`
);
