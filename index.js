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

for (const producto of productos) {
    $("#catalogoCarrito").append(`<div><h3>$${producto.precio}</h3>
<button id=${producto.id} class="botonCarrito">+</button></div>`);
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

// $(".botonCarrito").on('click', AgregarCarrito);

class Cards {
    constructor(image, nameC) {
        this.imagen = image;
        this.nombre = nameC;
    }
}



const cards = [];

cards.push(new Cards(src = 'img/foto3.jpg', "Zapatillas"));
cards.push(new Cards(src = 'img/foto4.jpg', "Sandalias"));
cards.push(new Cards(src = 'img/foto2.jpg', "Zapatos"));
cards.push(new Cards(src = 'img/foto1.jpg', "Ojotas"));

console.log(cards)

for (const card of cards) {
    $("#catalogoCards").append(`<div><img src=${card.imagen}><h2>${card.nombre}</h2></div>`);
}

const storage = (Producto, Precio) => {
    localStorage.setItem(Producto, Precio)
};

storage("Lista de Productos", JSON.stringify(productos));

$(".banner").prepend('<button id="btnFade">¡Hola!</button>');
$(".banner").append(`<div id="divFade">
                        <h3>¡Bienvenido a Erevan!</h3>
                    </div>`);

$("#btnFade").click(() => {
    $("#divFade").fadeToggle("1000");
});

$(".tituloCatalogo").animate({
    padding: '30px',
}, 2000);

$(".tituloCatalogo").animate({
    padding: '0px',
}, 2000);