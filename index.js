function Tienda(name, street, heading) {
    this.nombre = name;
    this.calle = street;
    this.rubro = heading;
}

const tienda = new Tienda("Erevan", "Av. Cabildo 1402", "Negocio de calzados");
console.log(tienda);



// Catalogo

class Productos {
    constructor(id, nameP, price, image) {
        this.id = parseInt(id);
        this.nombre = nameP;
        this.precio = parseFloat(price);
        this.imagen = image;
    }
}

const productos = [];

productos.push(new Productos(1, "Chinela negra", 700, 'img/foto3.jpg'));
productos.push(new Productos(2, "Zapato Marcel", 400, 'img/foto4.jpg'));
productos.push(new Productos(3, "Zapatilla Jaguar", 1000, 'img/foto2.jpg'));
productos.push(new Productos(4, "Crocks SeaWalk", 300, 'img/foto1.jpg'));
productos.push(new Productos(5, "Sandalia con taco", 700, 'img/foto5.jpg'));
productos.push(new Productos(6, "Zapatilla con plataforma", 400, 'img/foto6.jpg'));
productos.push(new Productos(7, "Chinela puntera cerrada", 1000, 'img/foto7.jpg'));
productos.push(new Productos(8, "Pantufla con garras", 300, 'img/foto8.jpg'));
productos.push(new Productos(9, "Pantufla con corderito", 700, 'img/foto9.jpg'));
productos.push(new Productos(10, "Borcego de goma", 400, 'img/foto10.jpg'));
productos.push(new Productos(11, "Sandalia jean", 1000, 'img/foto11.jpg'));
productos.push(new Productos(12, "Zapatilla Jaguar", 300, 'img/foto12.jpg'));

console.log(productos)

for (const producto of productos) {
    $("#catalogoCarrito").append(`<div class="cartaCatalogo">
    <img src=${producto.imagen}><h2>${producto.nombre}</h2>
    <h3>$${producto.precio}</h3>
    <button id=${producto.id} class="botonCarrito">+</button>
    </div>`);
}

// 

// Carrito
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

const botones = document.getElementsByClassName("botonCarrito");

for (const boton of botones) {
    boton.addEventListener("click", AgregarCarrito);
}

// 

// Storage

const storage = (Producto, Precio) => {
    localStorage.setItem(Producto, Precio)
};

storage("Lista de Productos", JSON.stringify(productos));

// 

// Contacto

function validaForm() {

    if ($("#nombreForm").val() == "") {
        alert("El campo nombre no puede estar vacio");
        $("#nombreForm").focus();
        return false;
    }

    if ($("#mailForm").val() == "") {
        alert("El campo Email no puede estar vacio");
        $("#mailForm").focus();
        return false;
    }

    if ($("#mensajeForm").val() == "") {
        alert("El campo Mensaje no puede estar vacio");
        $("#mensajeForm").focus();
        return false;
    }
    return true;
}

const URLGET = "https://jsonplaceholder.typicode.com/posts"

$(document).ready(function () {
    $("#botonEnviar").click(function () {
        if (validaForm()) {
            $.get(URLGET, function () {
                alert("Mensaje enviado con exito")
                $("#formFade").fadeOut(1000);
                $(`<p>GRACIAS!</P>`).hide().appendTo("#formData").fadeIn(2000);
            });
        }
    });
});

// 

// Nosotros

$("#nosotros1").append(`<div class="nosotrosParrafo1">
<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>`);

$("#nosotros2").append(`<div class="nosotrosParrafo2">
<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>`);

$("#nosotros3").append(`<div class="nosotrosParrafo3">
<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>`);

$(".nosotrosParrafo1").animate({
    margin: '0 0 0 50%',
}, 2000);

$(".nosotrosParrafo2").animate({
    margin: '0 50% 0 0',
}, 2000);

$(".nosotrosParrafo3").animate({
    margin: '0 0 0 50%',
}, 2000);

// 