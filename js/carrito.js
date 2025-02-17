//Carrito

// Tu código JavaScript
const carrito = document.getElementById('carrito');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    document.querySelectorAll('.agregar-carrito').forEach(button => {
        button.addEventListener('click', comprarElemento);
    });

    carrito.addEventListener('click', eliminarElemento);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    const elemento = e.target.closest('.item');
    LeerDatosElemento(elemento);
}

function LeerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h2').textContent,
        precio: elemento.querySelector('.price').textContent,
        id: elemento.querySelector('.agregar-carrito').getAttribute('data-id')
    }

    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">x</a>
        </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento, elementoId;

    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}