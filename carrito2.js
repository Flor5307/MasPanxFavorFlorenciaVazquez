// Variables
let baseDeDatos = [
  {
    id: 1,
    nombre: "Ñoquis rellenos",
    precio: "580",
    imagen: "pan.jpg",
    categoria: "Pastas",
    vegetariano: true,
    vegano: false,
    sinTacc: false,
  },
  {
    id: 2,
    nombre: "Ñoquis",
    categoria: "Pastas",
    precio: "450",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 3,
    nombre: "Fideos",
    category: "Pastas",
    precio: "350",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 4,
    nombre: "Capellettis",
    categoria: "Pastas",
    precio: "500",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 5,
    nombre: "Capellettis especiales",
    categoria: "Pastas",
    precio: "550",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: false,
    sinTacc: false,
  },
  {
    id: 6,
    nombre: "Bolognesa",
    categoria: "salsas",
    precio: "550",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: false,
    sinTacc: true,
  },
  {
    id: 7,
    nombre: "Crema de champi",
    categoria: "salsas",
    precio: "450",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: false,
    sinTacc: true,
  },
  {
    id: 8,
    nombre: "Crema de limon",
    categoria: "salsas",
    precio: "340",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: false,
    sinTacc: true,
  },
  {
    id: 9,
    nombre: "Napolitana",
    categoria: "salsas",
    precio: "300",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: true,
  },
  {
    id: 10,
    nombre: "Tomate,aceituna y ajo",
    categoria: "salsas",
    precio: "450",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: true,
  },
  {
    id: 11,
    nombre: "De centeno",
    categoria: "Panes",
    precio: "700",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 12,
    nombre: "Blanco",
    categoria: "Panes",
    precio: "400",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 13,
    nombre: "Relleno",
    categoria: "Panes",
    precio: "650",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 14,
    nombre: "Multicereal",
    categoria: "Panes",
    precio: "550",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 15,
    nombre: "Blanco con nueces",
    categoria: "Panes",
    precio: "850",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
];

let carrito = [];
const divisa = "€";
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
  console.log(
    filterBy(baseDeDatos, { vegetariano: true, categoria: "Pastas" })
  );
  baseDeDatos.forEach((info) => {
    // Estructura
    const miNodo = document.createElement("div");
    miNodo.classList.add("card", "col-sm-4");
    // Body
    const miNodoCardBody = document.createElement("div");
    miNodoCardBody.classList.add("card-body");
    // Titulo
    const miNodoTitle = document.createElement("h5");
    miNodoTitle.classList.add("card-title");
    miNodoTitle.textContent = info.nombre;
    // Imagen
    const miNodoImagen = document.createElement("img");
    miNodoImagen.classList.add("img-fluid");
    miNodoImagen.setAttribute("src", info.imagen);
    // Precio
    const miNodoPrecio = document.createElement("p");
    miNodoPrecio.classList.add("card-text");
    miNodoPrecio.textContent = `${info.precio}${divisa}`;
    // Boton
    const miNodoBoton = document.createElement("button");
    miNodoBoton.classList.add("btn", "btn-primary");
    miNodoBoton.textContent = "+";
    miNodoBoton.setAttribute("marcador", info.id);
    miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);
    // Insertamos
    miNodoCardBody.appendChild(miNodoImagen);
    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoBoton);
    miNodo.appendChild(miNodoCardBody);
    DOMitems.appendChild(miNodo);
  });
}

//NUEVA FUNCION
function filterBy(list, criteria) {
  return list.filter((candidate) =>
    Object.keys(criteria).every((key) => candidate[key] == criteria[key])
  );
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute("marcador"));
  // Actualizamos el carrito
  renderizarCarrito();
}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
  // Vaciamos todo el html
  DOMcarrito.textContent = "";
  // Quitamos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];
  // Generamos los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
    // Obtenemos el item que necesitamos de la variable base de datos
    const miItem = baseDeDatos.filter((itemBaseDatos) => {
      // ¿Coincide las id? Solo puede existir un caso
      return itemBaseDatos.id === parseInt(item);
    });
    // Cuenta el número de veces que se repite el producto
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
      // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
      return itemId === item ? (total += 1) : total;
    }, 0);
    // Creamos el nodo del item del carrito
    const miNodo = document.createElement("li");
    miNodo.classList.add("list-group-item", "text-right", "mx-2");
    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
    // Boton de borrar
    const miBoton = document.createElement("button");
    miBoton.classList.add("btn", "btn-danger", "mx-5");
    miBoton.textContent = "X";
    miBoton.style.marginLeft = "1rem";
    miBoton.dataset.item = item;
    miBoton.addEventListener("click", borrarItemCarrito);
    // Mezclamos nodos
    miNodo.appendChild(miBoton);
    DOMcarrito.appendChild(miNodo);
  });
  // Renderizamos el precio total en el HTML
  DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
  // Obtenemos el producto ID que hay en el boton pulsado
  const id = evento.target.dataset.item;
  // Borramos todos los productos
  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });
  // volvemos a renderizar
  renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
  // Recorremos el array del carrito
  return carrito
    .reduce((total, item) => {
      // De cada elemento obtenemos su precio
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });
      // Los sumamos al total
      return total + miItem[0].precio;
    }, 0)
    .toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
  // Limpiamos los productos guardados
  carrito = [];
  // Renderizamos los cambios
  renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener("click", vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();
