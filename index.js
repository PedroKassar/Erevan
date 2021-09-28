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



// 