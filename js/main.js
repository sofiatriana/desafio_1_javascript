// Desafio 05 y 06

class viaje{
    constructor(lugar, precio, fechas){
        this.lugar = lugar.toUpperCase();
        this.precio  = parseFloat(precio);
        this.fechas = fechas.toUpperCase();
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.19;
    }
    vender() {
        this.vendido = true;
    }
    informacionCompleta(){
        console.log('Lugar del viaje ' + this.lugar + ', con un costo de ' + this.precio + ' dolares' + 
        '. Fechas del vuelo: ' + this.fechas);
    }
}
let viaje1 = new viaje('naeroyfjord Noruega', 120, 'Del 30 abril al 15 mayo del 2021')
let viaje2 = new viaje('antelope canyon united states', 110, 'Junio 14 al 20 de junio del 2021')

viaje1.sumaIva();
viaje2.sumaIva();
viaje1.vender();
viaje1.informacionCompleta();
viaje2.informacionCompleta();


//ARRAY

let cities = [
    'Stanvanguer',
    'Kristiansand',
    'Phoenix', 
    'Jacksonville'
];
let planeStanvanguer = {
    destination: 'Trondheim',
    transportMode: 'Plane',
    cost: 200,
    country: 'Noruega',
}
cities.push(planeStanvanguer);
console.log(cities);


