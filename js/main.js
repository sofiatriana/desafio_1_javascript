// Desafio 05 y 06

let lugares = alert("¿A que lugar prefieres ir?");
let opcionesLugares = parseInt(prompt ("1: naeroyfjord Noruega, 2: antelope canyon united states "));

class viaje{
    constructor(lugar, precio, fechas){
        this.lugar = lugar.toUpperCase();
        this.precio  = parseFloat(precio);
        this.fechas = fechas.toUpperCase();
    }
    sumaIva() {
        this.precio = this.precio * 1.19;
    }
    informacionCompleta(){
        console.log('Lugar del viaje ' + this.lugar + ', con un costo de ' + this.precio + ' dolares' + 
        '. Fechas del vuelo: ' + this.fechas);
    }
}

if (opcionesLugares == 1){
    let viaje1 = new viaje('naeroyfjord Noruega', 120, 'Del 30 abril al 15 mayo del 2021')
    viaje1.sumaIva();
    viaje1.informacionCompleta();

    let citiesNoruega = [
        'Stanvanguer',
        'Kristiansand',
        'Bergen', 
        'Oslo',
    ];
    let planeStanvanguer = {
        destination: 'Trondheim',
        transportMode: 'Plane',
        cost: 200,
        country: 'Noruega',
    }
    citiesNoruega.push(planeStanvanguer);
    
    let valorVuelo = parseInt(prompt('Ingrese el valor que puede pagar por un viaje a noruega'))
    alert('Su valor es de ' + valorVuelo)
    if (valorVuelo <= 150){
        alert('No tenemos vuelos disponibles')
    } else{
        alert('los lugares a los que puede viajar son: ' + citiesNoruega)
        console.log(citiesNoruega);
    }
}
else if (opcionesLugares == 2){
    let viaje2 = new viaje('antelope canyon united states', 110, 'Junio 14 al 20 de junio del 2021')
    viaje2.sumaIva();
    viaje2.informacionCompleta();

    let citiesUsa = [
        'Chicago',
        'Phoenix',
        'Jacksonville', 
        'Carolina del norte',
    ];
    citiesUsa.pop();
    let valorVueloUs = parseInt(prompt('Ingrese el valor que puede pagar por un viaje a Estados Unidos'))
    alert('Su valor es de ' + valorVueloUs)
    if (valorVueloUs <= 150){
        alert('No hay vuelos con ese valor')
    } else{
        alert('los lugares a los que puede viajar son: ' + citiesUsa)
        console.log(citiesUsa);
    }
    
} else {
    alert('No tenemos mas vuelos disponibles')
}





