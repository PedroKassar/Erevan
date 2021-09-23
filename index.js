function Tienda(name, street, heading) {
    this.nombre = name;
    this.calle = street;
    this.rubro = heading;
}

const tienda = new Tienda("Erevan", "Av. Cabildo 1402", "Negocio de calzados");
console.log(tienda);

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

// Catalogo

const baseDeDatos = [{
        id: 1,
        nombre: 'Chinela negra',
        precio: 700,
        imagen: 'img/foto3.jpg'
    },
    {
        id: 2,
        nombre: 'Zapato Marcel',
        precio: 400,
        imagen: 'img/foto4.jpg'
    },
    {
        id: 3,
        nombre: 'Zapatilla Jaguar',
        precio: 1000,
        imagen: 'img/foto2.jpg'
    },
    {
        id: 4,
        nombre: 'Crocks SeaWalk',
        precio: 300,
        imagen: 'img/foto1.jpg'
    },
    {
        id: 5,
        nombre: 'Sandalia con taco',
        precio: 300,
        imagen: 'img/foto5.jpg'
    },
    {
        id: 6,
        nombre: 'Zapatilla con plataforma',
        precio: 300,
        imagen: 'img/foto6.jpg'
    },
    {
        id: 7,
        nombre: 'Chinela puntera cerrada',
        precio: 300,
        imagen: 'img/foto7.jpg'
    },
    {
        id: 8,
        nombre: 'Pantufla con garras',
        precio: 300,
        imagen: 'img/foto8.jpg'
    },
    {
        id: 9,
        nombre: 'Pantufla con corderito',
        precio: 300,
        imagen: 'img/foto9.jpg'
    },
    {
        id: 10,
        nombre: 'Borcego de goma',
        precio: 300,
        imagen: 'img/foto10.jpg'
    },
    {
        id: 11,
        nombre: 'Sandalia jean',
        precio: 300,
        imagen: 'img/foto11.jpg'
    },
    {
        id: 12,
        nombre: 'Zapatilla Jaguar',
        precio: 300,
        imagen: 'img/foto12.jpg'
    }

];

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = '$' + info.precio;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

function añadirProductoAlCarrito(evento) {

    carrito.push(evento.target.getAttribute('marcador'))
    calcularTotal();
    renderizarCarrito();
}

function renderizarCarrito() {

    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {

        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);

        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}€`;

        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);

        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
}


function borrarItemCarrito(evento) {

    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    renderizarCarrito();
    calcularTotal();
}


function calcularTotal() {

    total = 0;

    carrito.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });

    DOMtotal.textContent = total.toFixed(2);
}


function vaciarCarrito() {

    carrito = [];

    renderizarCarrito();
    calcularTotal();
}

DOMbotonVaciar.addEventListener('click', vaciarCarrito);

renderizarProductos();


// 