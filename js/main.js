let nombreApellido = prompt("Dime tu nombre y apellido");
alert("Hola " + nombreApellido);


let edad = prompt ('Ingrese su edad');
    edad = parseInt(edad);
alert("Usted tiene " + edad + " años");


let fecha = new Date();
let año = fecha.getFullYear();
let fechaUsuario = año - edad;
alert("Usted nació en el " + fechaUsuario)

alert("Su nombre es " + nombreApellido + " tiene " + edad + " años y nació en el año " + fechaUsuario )


