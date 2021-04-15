const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
alert("¿Que operacion quieres realizar?");
let operacion = prompt (" 1: suma, 2: resta, 3: divicion, 4: multiplicacion");
if (operacion == 1){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = sumar(numero1, numero2);
    alert("Tu resultado es " + resultado)
}
else if (operacion == 2){
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = restar(numero1, numero2)
    alert("Tu resultado es " + resultado)
}
else if (operacion == 3){
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = dividir(numero1, numero2)
    alert("Tu resultado es " + resultado)
}
else if (operacion == 4){
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = multiplicar(numero1, numero2)
    alert("Tu resultado es " + resultado)
}
else {
    alert("no se encuentra la operación")
}

const calcArea = radio =>{
    return 3.14 * radio**2;
}
const area = calcArea(5);
console.log('El area es de ', area);

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