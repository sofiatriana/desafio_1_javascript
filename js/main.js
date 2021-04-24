// DESAFIO 06 LOCAL STORAGE

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

































