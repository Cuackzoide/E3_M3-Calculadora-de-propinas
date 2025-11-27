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
let cuenta;
let cuentaUsuario;
do {
  cuentaUsuario = prompt("Ingrese el monto de la cuenta:");
} while (cuentaUsuario === null || /[a-zA-Z]/.test(cuentaUsuario)); // Anti usuarios problematicos
cuenta = parseFloat(cuentaUsuario.replace(/[$.]/g, "")); // acepta valores como 15.000

let porcentajePropina;
let propinaUsuario;
do {
  propinaUsuario = prompt("ingrese el porcentaje de propina");
} while (propinaUsuario === null || /[a-zA-Z]/.test(propinaUsuario)); // Anti usuarios problematicos
porcentajePropina = parseFloat(propinaUsuario.replace("%", "")); // acepta valores como 15%

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
