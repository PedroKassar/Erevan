function Tienda(name, street, heading) {
    this.nombre = name;
    this.calle = street;
    this.rubro = heading;
}

const tienda = new Tienda("Erevan", "Av. Cabildo 1402", "Negocio de calzados");
console.log(tienda);

class Productos {
    constructor(id, nameP, price) {
        this.id = parseInt(id);
        this.nombre = nameP;
        this.precio = parseFloat(price);
    }
}

const productos = [];

productos.push(new Productos(1, "Zapatillas", 700));
productos.push(new Productos(2, "Sandalias", 400));
productos.push(new Productos(3, "Zapatos", 1000));
productos.push(new Productos(4, "Ojotas", 300));

console.log(productos)

let catalogo = document.getElementById("catalogoCarrito");

for (const producto of productos) {
    let botonCatalogo = document.createElement("div");
    botonCatalogo.innerHTML = `<h3>$${producto.precio}</h3>
    <button id=${producto.id} class="botonCarrito">+</button>`
    catalogo.appendChild(botonCatalogo);
}

const botones = document.getElementsByClassName("botonCarrito");

const carrito = [];

function AgregarCarrito() {

    const añadir = productos.find(producto => producto.id == this.id);
    carrito.push(añadir);

    let innerCarrito = '';
    for (const producto of carrito) {
        innerCarrito += `<p>${producto.nombre} - ${producto.precio}</p>`
    }

    const divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML = innerCarrito;

    console.log("Agregado correctamente");

}

for (const boton of botones) {
    boton.addEventListener("click", AgregarCarrito);
}

class Cards {
    constructor(image, nameC) {
        this.imagen = image;
        this.nombre = nameC;
    }
}

let cartas = document.getElementById("catalogoCards");

const cards = [];

cards.push(new Cards(src = 'img/foto3.jpg', "Zapatillas"));
cards.push(new Cards(src = 'img/foto4.jpg', "Sandalias"));
cards.push(new Cards(src = 'img/foto2.jpg', "Zapatos"));
cards.push(new Cards(src = 'img/foto1.jpg', "Ojotas"));

console.log(cards)

for (const card of cards) {
    let carta = document.createElement("div");
    carta.innerHTML = `<img src=${card.imagen}><h2>${card.nombre}</h2>`
    cartas.appendChild(carta);
}