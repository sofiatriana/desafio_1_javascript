// CLASE 01

let nombreApellido = prompt("Dime tu nombre y apellido");
alert("Hola " + nombreApellido);


let edad = prompt ('Ingrese su edad');
    edad = parseInt(edad);
alert("Usted tiene " + edad + " años");


let fecha = new Date();
let año = fecha.getFullYear();
let fechaUsuario = año - edad;
alert("Usted nació en el " + fechaUsuario);

alert("Su nombre es " + nombreApellido + " tiene " + edad + " años y nació en el año " + fechaUsuario );



// CLASE 02

// Hora
let hour= 7

if (hour >= 6 && hour < 12){
    console.log ('Buenos dias')
}
else if (hour >= 12 && hour < 18){
    console.log ('Buenas tardes')
}
else{
    console.log('Buenas noches')
}  

// Numero mayor o menor a 1000
let number = prompt('Escribe un numero');
    number = parseInt(number);

if (number > 1000){
    alert ("Su numero " + number + " es mayor que 1000")
} else {
    alert ("Su numero " + number + " es menor que 1000")
}

// Saludo
let saludo = prompt('Escribe un saludo');

if (saludo === "Holaa!"){
    console.log ('Saludo correcto')
} 
else if (saludo === "no se"){
    console.log ('Saludo incorrecto')
} 
else {
    console.log ('Vuelve a saludar')
}

// Numero de 10 a 50
let numero = prompt ('Escribe otro numero');
numero = parseInt (numero);
if (numero >= 10 && numero <= 50) {
    alert 
    ("Su numero " + numero + " esta entre 10 y 50")
} else {
    alert ("Su numero " + numero + " no esta entre 10 y 50")
}