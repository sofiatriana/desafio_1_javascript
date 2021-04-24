// DESAFIO 06 LOCAL STORAGE


// const usuario = 'Tiago'
// const edad = 50

// el local coje el ultimo que se pone
//localStorage.setItem('usuario', 'carbana')
//localStorage.setItem('edad', edad)

//localStorage.usuario = 'Lucas'

//console.log(localStorage.usuario);

//let usuarioLocal = localStorage.getItem('usuario')
//let edadLocal = localStorage.getItem('edad')

//  console.log(usuarioLocal)
// todo lo que se guarda al localsorage es un string
//  console.log(typeof edadLocal)

//remuevo uno expecificamente
//  localStorage.removeItem('edad')
//remuevo todo
//  localStorage.clear()

// let usuario;
// let usuarioLocal = localStorage.getItem('usuario')

// if (usuarioLocal){
  //     usuario = usuarioLocal
  // }else {
    //     usuario = prompt('Ingrese su nombre')  
    // }
    // alert(`Bienvenido ${usuario}`)
    //usuario = prompt('Ingrese su nombre')
    // localStorage.setItem('usuario', usuario)
    
    
    // console.log(localStorage.usuario)
    
    
    
    //JSON
    
// let arrayProductos = [
  //     {id: 1, nombre:'Remera', precio: 1000, stock:100},
//     {id: 2, nombre:'Remera', precio: 2000, stock:100},
//     {id: 3, nombre:'Pantalon', precio: 1500, stock:100},
//     {id: 4, nombre:'Pantalon', precio: 1700, stock:100},
//     {id: 5, nombre:'Pantalon', precio: 5000, stock:100},
//     {id: 6, nombre:'Pantalon', precio: 3000, stock:100},
//     {id: 7, nombre:'Calzado', precio: 7000, stock:100},
//     {id: 8, nombre:'Calzado', precio: 8000, stock:100},
//     {id: 9, nombre:'Calzado', precio: 13000, stock:100},
//     {id: 10, nombre:'Buzo', precio: 6000, stock:100},
//     {id: 11, nombre:'Buzo', precio: 19000, stock:100},
//     {id: 12, nombre:'Buzo', precio: 800, stock:100},
// ]
// let carrito = [];

// let carritoEnLS = JSON.parse (localStorage.getItem('carrito'))
// if (carritoEnLS) {
//     let continuar = prompt('¿Quiere continuar su ultima compra?')
//     if (continuar == 'si'){
//         carrito = carritoEnLS
//     } else{
//         localStorage.clear()
//     }
// }


// console.log(carrito);
// function agregarAlCarrito() {
  //     let id = parseInt(prompt('Ingrese ID producto'))
  
//     let producto = arrayProductos.find(el => el.id == id)
//     if (producto){
//         carrito.push(producto)
//         localStorage.setItem('carrito', JSON.stringify(carrito))
//     }
//     console.log(carrito);
// }





//DOM

let usuario = prompt('¿Cual es tu nombre?')
let h4 = document.getElementById('subtitulo')
h4.innerHTML = `Bienvenido ${usuario}`
localStorage.setItem( 'usuario', usuario )

let viajes =[
  {id: 1, lugar:'Tromson', precio: 262},
  {id: 2, lugar:'Oslo', precio: 300},
  {id: 3, lugar:'Bergen', precio: 150},
]
 

function sumar() {
  let viaje = prompt('Quiere ir a Tromson, Oslo o Bergen')
  const carrito = []
  if (viaje === "Tromson"){
    carrito.push(viajes[0])
    let viajeTromson = carrito.reduce( (acc, el)=> acc += el.precio, 0 )
    alert(`El valor del viaje es de ${viajeTromson} dolares`)
  } else if (viaje == 'Oslo'){
    carrito.push(viajes[1])
    let totalCarrito = carrito.reduce( (acc, el)=> acc += el.precio, 0 )
    alert(`El valor del viaje a Oslo es de ${totalCarrito} dolares`)
  } else{
    alert('No hay mas vuelos')
  }
}

































