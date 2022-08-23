// Variables
let baseDeDatos = [
  {
    id: 1,
    nombre: "Ñoquis rellenos",
    categoria: "pasta",
    precio: "580",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: false,
    sinTacc: false,
  },
  {
    id: 2,
    nombre: "Ñoquis",
    categoria: "pasta",
    precio: "450",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 3,
    nombre: "Fideos",
    categoria: "pasta",
    precio: "350",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 4,
    nombre: "Capellettis",
    categoria: "pasta",
    precio: "500",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 5,
    nombre: "Capellettis especiales",
    categoria: "pasta",
    precio: "550",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: false,
    sinTacc: false,
  },
  {
    id: 6,
    nombre: "Bolognesa",
    categoria: "salsa",
    precio: "550",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: false,
    sinTacc: true,
  },
  {
    id: 7,
    nombre: "Crema de champi",
    categoria: "salsa",
    precio: "450",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: false,
    sinTacc: true,
  },
  {
    id: 8,
    nombre: "Crema de limon",
    categoria: "salsa",
    precio: "340",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: false,
    sinTacc: true,
  },
  {
    id: 9,
    nombre: "Napolitana",
    categoria: "salsa",
    precio: "300",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: true,
  },
  {
    id: 10,
    nombre: "Tomate,aceituna y ajo",
    categoria: "salsa",
    precio: "450",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: true,
  },
  {
    id: 11,
    nombre: "De centeno",
    categoria: "pan",
    precio: "700",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 12,
    nombre: "Blanco",
    categoria: "pan",
    precio: "400",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 13,
    nombre: "Relleno",
    categoria: "pan",
    precio: "650",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 14,
    nombre: "Multicereal",
    categoria: "pan",
    precio: "550",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 15,
    nombre: "Blanco con nueces",
    categoria: "pan",
    precio: "850",
    imagen: "pan.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
];

// tipo de comensal

let tipoDeComensal = "todo";

let comensal_1 = document.getElementById("comensal_1");

comensal_1.addEventListener("click", function () {
  tipoDeComensal = "todo";
  borrasProductos();
  renderizarProductos();
});

let comensal_2 = document.getElementById("comensal_2");

comensal_2.addEventListener("click", function () {
  tipoDeComensal = "vegano";
  borrasProductos();
  renderizarProductos();
});

let comensal_3 = document.getElementById("comensal_3");

comensal_3.addEventListener("click", function () {
  tipoDeComensal = "vegetariano";
  borrasProductos();
  renderizarProductos();
});

let comensal_4 = document.getElementById("comensal_4");

comensal_4.addEventListener("click", function () {
  tipoDeComensal = "celiaco";
  borrasProductos();
  renderizarProductos();
});

// cartas de comida y carrito
let carrito = [];
const divisa = "€";

const DOMitems_pasta = document.querySelector("#items_pasta");
const DOMitems_pan = document.querySelector("#items_pan");
const DOMitems_salsa = document.querySelector("#items_salsa");

const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");

// Funciones

function borrasProductos() {
  while (DOMitems_pasta.firstChild) {
    DOMitems_pasta.removeChild(DOMitems_pasta.lastChild);
  }

  while (DOMitems_pan.firstChild) {
    DOMitems_pan.removeChild(DOMitems_pan.lastChild);
  }

  while (DOMitems_salsa.firstChild) {
    DOMitems_salsa.removeChild(DOMitems_salsa.lastChild);
  }
}

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
  let pastaDatos, panDatos, salsaDatos;

  switch (tipoDeComensal) {
    case "vegano":
      pastaDatos = filterBy(baseDeDatos, { categoria: "pasta", vegano: true });
      panDatos = filterBy(baseDeDatos, { categoria: "pan", vegano: true });
      salsaDatos = filterBy(baseDeDatos, { categoria: "salsa", vegano: true });
      break;
    case "vegetariano":
      pastaDatos = filterBy(baseDeDatos, {
        categoria: "pasta",
        vegetariano: true,
      });
      panDatos = filterBy(baseDeDatos, { categoria: "pan", vegetariano: true });
      salsaDatos = filterBy(baseDeDatos, {
        categoria: "salsa",
        vegetariano: true,
      });
      break;
    case "celiaco":
      pastaDatos = filterBy(baseDeDatos, { categoria: "pasta", sinTacc: true });
      panDatos = filterBy(baseDeDatos, { categoria: "pan", sinTacc: true });
      salsaDatos = filterBy(baseDeDatos, { categoria: "salsa", sinTacc: true });
      break;
    default:
      pastaDatos = filterBy(baseDeDatos, { categoria: "pasta" });
      panDatos = filterBy(baseDeDatos, { categoria: "pan" });
      salsaDatos = filterBy(baseDeDatos, { categoria: "salsa" });
      break;
  }

  pastaDatos.forEach((info) => {
    const miNodo = renderizarEstructura(info);
    DOMitems_pasta.appendChild(miNodo);
  });

  DOMitems_pan.remo;

  panDatos.forEach((info) => {
    const miNodo = renderizarEstructura(info);
    DOMitems_pan.appendChild(miNodo);
  });

  salsaDatos.forEach((info) => {
    const miNodo = renderizarEstructura(info);
    DOMitems_salsa.appendChild(miNodo);
  });
}

function renderizarEstructura(info) {
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

  return miNodo;
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
      return;
      itemBaseDatos.id === parseInt(item);
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
        return;
        itemBaseDatos.id === parseInt(item);
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

//USUARIO DE TARJETA

let tarjeta_usuario = [];

function save_data() {
  let nombre_usuario = document.getElementById("nombre");
  let codigo_usuario = document.getElementById("cvv");
  let tarjeta_usuario = document.getElementById("numerotarjeta");
  let usuario = {
    nombre: nombre_usuario.value,
    numeroTarjeta: tarjeta_usuario.value,
    cvv: codigo_usuario.value,
  };

  let usuario_JSON = JSON.stringify(usuario);
  console.log(usuario_JSON);
  tarjeta_usuario.push(usuario_JSON);
  sessionStorage.setItem("usuarios", tarjeta_usuario);
  let buton = document.getElementById("confirm-datos");
  buton.addEventListener("click", save_data);
}
