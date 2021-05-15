//jquery

const botonAbrir = $('#btn-carrito')
const contenedorModal = $('.modal-contenedor')[0]

const botonCerrar = $('#carritoCerrar')
const modalCarrito = $('.modal-carrito')[0]

botonAbrir.on('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.on('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.on ('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.on('click', (event)=>{
    event.stopPropagation()
})
