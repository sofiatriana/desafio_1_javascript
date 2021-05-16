// DESAFIO 07 JQUERY



let vuelos= [
  {id: 1, vuelo: 'Noruega', precio: 120, img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fjordtravel.no%2Fwp-content%2Fuploads%2F2017%2F12%2F2BCAF065-B3CE-4117-B538-4D972F14AF68.jpg&f=1&nofb=1'},
  {id: 2, vuelo:'USA', precio: 134, img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Flower-antelope-canyon-usa-corkscrew-slot-national-park-navajo-reservation-near-page-arizona-united-states-landmark-181673089.jpg&f=1&nofb=1'},
  {id: 3, vuelo: 'Austria', precio: 435, img:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-v9ziJG1E5DY%2FVVjIXdXwurI%2FAAAAAAABUYY%2Fw3B1Hz1WDyo%2Fs1600%2F2.jpg&f=1&nofb=1'},
]


const divVuelos = $('#divVuelos')

mostrarProductos(vuelos)

function mostrarProductos(array) {    

    array.forEach((contenedor) => {
    divVuelos.append( `
    <div class="single-team">
     <img src="${contenedor.img}" class="img1">
     <div class="team-text">
        <h2>Viaje ${contenedor.vuelo}</h2>
        <p>Precio ${contenedor.precio}</p>
        <p>
            <button onclick=agregarProductos(${contenedor.id})>Agregar<i class="fas fa-shopping-cart"></i></button>
        </p>
       </div> 
    </div>
       `)
   })
}


let carrito = []
let carritoLS = JSON.parse(localStorage.getItem('carrito'))

if (carritoLS) {  
    carrito = carritoLS
    actualizarCarrito()
}
function agregarProductos(id){
    const productoEscogido = vuelos.find (el => el.id == id)
    if (productoEscogido) {
        carrito.push(productoEscogido)
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarCarrito()
}

function eliminarProductos(id) {
    const productosEliminar = carrito.find(el => el.id == id)
    const indice = carrito.indexOf(productosEliminar)
    carrito.splice(indice,1)

    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarCarrito()
}
function actualizarCarrito() {
    const contenedorCarrito = document.getElementById('modal-contenedor')
    const precioTotal = document.getElementById('precioTotal')
    const contadorCarrrito = document.getElementById('contadorCarro')

    contenedorCarrito.innerHTML = ''

    carrito.forEach((contenedor) => {
        contenedorCarrito.innerHTML += `
        <div class="productoEnCarrito">
           <p>Lugar: ${contenedor.vuelo}</p>
           <p>Precio: ${contenedor.precio}</p>
           <button onclick=eliminarProductos(${contenedor.id}) class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
        `
    })

    precioTotal.innerText = carrito.reduce( (acc, el) => acc += el.precio, 0 )
    contadorCarrrito.innerText = carrito.length
}






















