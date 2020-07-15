// Problema 3.2 
console.log(`Problema 3.2`);

let horas_trabajadas = 41;
let horas_extras = horas_trabajadas - 40;
let precio_hora = 20;
let pago_neto = 0;

console.log(`Horas trabajadas= ${horas_trabajadas}`);
console.log(`Horas extras= ${horas_extras}`);

if (horas_trabajadas > 40) {
    pago_neto = 40 * precio_hora + horas_extras * precio_hora * 2;
    console.log(`Sueldo neto= S/. ${pago_neto}`);
} else {
    pago_neto = horas_trabajadas * precio_hora;
    console.log(`Sueldo neto= S/. ${pago_neto}`);
}

// Espacio para el siguiente problema 
console.log('');

// Problema 3.3 
console.log('Problema 3.3');

let dinero_actual = 200;

console.log(`Dinero en billetera $${dinero_actual}`);
if (dinero_actual <= 10)
    console.log('Puedes comprarle una tarjeta de cumpleaños!!');
else if (dinero_actual <= 100)
    console.log('Puedes comprarle unos chocolates!!');
else if (dinero_actual <= 250)
    console.log('Puedes comprarle unas flores!!');
else
    console.log('Te alcanza para un anillo!!');

// Espacio para el siguiente problema 
console.log('');

// Problema 3.4
console.log('Problema 3.4');

let horas_estacionado = 2;
let precio__hora = 0;
let a_pagar = 0;

console.log(`Horas estacionado: ${horas_estacionado}`);
if (horas_estacionado <= 2) {
    precio__hora = 5;
    console.log(`A pagar: $${precio__hora * horas_estacionado}`);
}
else if (horas_estacionado <= 5) {
    precio__hora = 4;
    console.log(`A pagar: $${precio__hora * horas_estacionado}`);
}
else if (horas_estacionado <= 10) {
    precio__hora = 3;
    console.log(`A pagar: $${precio__hora * horas_estacionado}`);
}
else {
    precio__hora = 2;
    console.log(`A pagar: $${precio__hora * horas_estacionado}`);
}

// Espacio para el siguiente problema 
console.log('');

// Problema 3.8 
console.log('Problema 3.8');

let sueldo_trabajador = 1000;
let anios_trabajando = 5;
let bono_sueldo = 0;
let bono_anios = 0;
let bono = 0;

// Cálculo del bono por antigüedad 
if (anios_trabajando > 2 && anios_trabajando < 5)
    bono_anios = 0.2 * sueldo_trabajador;
else if (anios_trabajando >= 5)
    bono_anios = 0.3 * sueldo_trabajador;

// Cálculo del bono por sueldo
if (sueldo_trabajador <= 1000)
    bono_sueldo = 0.25 * sueldo_trabajador;
else if (sueldo_trabajador <= 3500)
    bono_sueldo = 0.15 * sueldo_trabajador;
else
    bono_sueldo = 0.1 * sueldo_trabajador;

console.log(`Bono por antigüedad = ${bono_anios}`);
console.log(`Bono por sueldo = ${bono_sueldo}`);

if (bono_anios > bono_sueldo)
    console.log('Te corresponde el bono por antigüedad!!');
else
    console.log('Te corresponde el bono por sueldo!! ');

// Espacio para el siguiente problema 
console.log('');

// Problema 3.9 
console.log('Problema 3.9');

const BASE_A = 1200;
const BASE_B = 950;

let es_bebedor = false;
let usa_lentes = false;
let enfermedad = true;
let edad = 20;
let costo_poliza_A = 0;
let costo_poliza_B = 0;
let carga = 1;

console.log(`Es bebedor: ${es_bebedor}`);
console.log(`Usa lentes: ${usa_lentes}`);
console.log(`Enfermedad: ${enfermedad}`);
console.log(`Edad: ${edad}`);

// Cálculos para la póliza 
if (es_bebedor)
    carga += 0.1;
if (usa_lentes)
    carga += 0.05;
if (enfermedad)
    carga += 0.05;
if (edad > 40)
    carga += 0.2;
else
    carga += 0.1;

costo_poliza_A = BASE_A + carga * BASE_A;
costo_poliza_B = BASE_B + carga * BASE_B;

console.log(`Costo Poliza A = $${costo_poliza_A.toFixed(2)}`);
console.log(`Costo Poliza B = $${costo_poliza_B.toFixed(2)}`);

// Espacio para el siguiente problema 
console.log('');

// Problema 3.11
console.log('Problema 3.11');

let antiguedad = 3;
let bono_ = 0;

console.log(`Años trabajando = ${antiguedad}`);

if (antiguedad == 1 || antiguedad == 2 || antiguedad == 3 || antiguedad == 4 || antiguedad == 5)
    bono_ = antiguedad * 100;
else if (antiguedad > 5)
    bono_ = 1000;

console.log(`Se ha ganado un bono de = $${bono_}!!`);


// Espacio para el siguiente problema
console.log('');

// Problema 3.17 
console.log('Problema 3.17');

let dinero_disp = 2000;
console.log(`Dinero disponible = $${dinero_disp}`);
if (dinero_disp == 0)
    console.log('Aún no recibo su pago');

else if (dinero_disp < 10000)
    console.log('Te enviaremos el paquete D');

else if (dinero_disp < 20000)
    console.log('Te enviaremos el paquete C');

else if (dinero_disp < 50000)
    console.log('Te enviaremos el paquete B');

else
    console.log('Te enviaremos el paquete A');
