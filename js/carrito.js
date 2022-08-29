// Variables
let baseDeDatos = [
  {
    id: 1,
    nombre: "Ñoquis rellenos",
    categoria: "pasta",
    precio: "580",
    imagen: "img/rellenos.webp",
    vegetariano: true,
    vegano: false,
    sinTacc: false,
  },
  {
    id: 2,
    nombre: "Ñoquis",
    categoria: "pasta",
    precio: "450",
    imagen: "img/noquisComunes.webp",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 3,
    nombre: "Fideos",
    categoria: "pasta",
    precio: "350",
    imagen: "img/fideos-min.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 4,
    nombre: "Capellettis",
    categoria: "pasta",
    precio: "500",
    imagen: "img/comunes.webp",
    vegetariano: true,
    vegano: false,
    sinTacc: false,
  },
  {
    id: 5,
    nombre: "Capellettis especiales",
    categoria: "pasta",
    precio: "550",
    imagen: "img/especiales.jpg",
    vegetariano: false,
    vegano: false,
    sinTacc: false,
  },
  {
    id: 6,
    nombre: "Bolognesa",
    categoria: "salsa",
    precio: "550",
    imagen: "img/salsa-boloñesa.jpg",
    vegetariano: false,
    vegano: false,
    sinTacc: true,
  },
  {
    id: 7,
    nombre: "Crema de champi",
    categoria: "salsa",
    precio: "450",
    imagen: "img/cremaConChampi.webp",
    vegetariano: true,
    vegano: false,
    sinTacc: true,
  },
  {
    id: 8,
    nombre: "Crema de limon",
    categoria: "salsa",
    precio: "340",
    imagen: "img/cremaDeLimon.jpg",
    vegetariano: true,
    vegano: false,
    sinTacc: true,
  },
  {
    id: 9,
    nombre: "Napolitana",
    categoria: "salsa",
    precio: "300",
    imagen: "img/receta-salsa-napolitana.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: true,
  },
  {
    id: 10,
    nombre: "Tomate,aceituna y ajo",
    categoria: "salsa",
    precio: "450",
    imagen: "img/tomateAjoAceitunas.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: true,
  },
  {
    id: 11,
    nombre: "De centeno",
    categoria: "pan",
    precio: "700",
    imagen: "img/centeno.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 12,
    nombre: "Comun",
    categoria: "pan",
    precio: "400",
    imagen: "img/conNuez.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 13,
    nombre: "Relleno",
    categoria: "pan",
    precio: "650",
    imagen: "img/panRelleno.jpg",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 14,
    nombre: "Multicereal",
    categoria: "pan",
    precio: "550",
    imagen: "img/panIntegral.webp",
    vegetariano: true,
    vegano: true,
    sinTacc: false,
  },
  {
    id: 15,
    nombre: "Con nueces",
    categoria: "pan",
    precio: "850",
    imagen: "img/conNuez.webp",
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
let divisa = "$";

let DOMitems_pasta = document.querySelector("#items_pasta");
let DOMitems_pan = document.querySelector("#items_pan");
let DOMitems_salsa = document.querySelector("#items_salsa");

let DOMcarrito = document.querySelector("#carrito");
let DOMtotal = document.querySelector("#total");
let DOMbotonVaciar = document.querySelector("#boton-vaciar");

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
    let miNodo = renderizarEstructura(info);
    DOMitems_pasta.appendChild(miNodo);
  });

  DOMitems_pan.remo;

  panDatos.forEach((info) => {
    let miNodo = renderizarEstructura(info);
    DOMitems_pan.appendChild(miNodo);
  });

  salsaDatos.forEach((info) => {
    let miNodo = renderizarEstructura(info);
    DOMitems_salsa.appendChild(miNodo);
  });
}

function renderizarEstructura(info) {
  // Estructura
  let miNodo = document.createElement("div");
  miNodo.classList.add("card", "col-sm-4");
  // Body
  let miNodoCardBody = document.createElement("div");
  miNodoCardBody.classList.add("card-body");
  // Titulo
  let miNodoTitle = document.createElement("h5");
  miNodoTitle.classList.add("card-title");
  miNodoTitle.textContent = info.nombre;
  // Imagen
  let miNodoImagen = document.createElement("img");
  miNodoImagen.classList.add("img-fluid");
  miNodoImagen.setAttribute("style", "height:150px");
  miNodoImagen.setAttribute("src", info.imagen);
  // Precio
  let miNodoPrecio = document.createElement("p");
  miNodoPrecio.classList.add("card-text");
  miNodoPrecio.textContent = `${info.precio}${divisa}`;
  // Boton
  let miNodoBoton = document.createElement("button");
  miNodoBoton.classList.add("btn", "btn-primary");
  miNodoBoton.textContent = "+";
  miNodoBoton.setAttribute("marcador", info.id);
  miNodoBoton.addEventListener("click", añadirProductoAlCarrito);
  // Inserta
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
function añadirProductoAlCarrito(evento) {
  // Anyade el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute("marcador"));
  // Actualiza el carrito
  renderizarCarrito();
}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
  // Vaciar todo el html
  DOMcarrito.textContent = "";
  // Quitar los duplicados
  let carritoSinDuplicados = [...new Set(carrito)];
  // Generar los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
    // Obten el item que necesitamos de la variable base de datos
    let miItem = baseDeDatos.filter((itemBaseDatos) => {
      // ¿Coincide las id? Solo puede existir un caso
      return itemBaseDatos.id === parseInt(item);
    });
    // Cuenta el número de veces que se repite el producto
    let numeroUnidadesItem = carrito.reduce((total, itemId) => {
      // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
      return itemId === item ? (total += 1) : total;
    }, 0);
    // Crear el nodo del item del carrito
    let miNodo = document.createElement("li");
    miNodo.classList.add("list-group-item", "text-right", "mx-2");
    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
    // Boton de borrar
    let miBoton = document.createElement("button");
    miBoton.classList.add("btn", "btn-danger", "mx-5");
    miBoton.textContent = "X";
    miBoton.style.marginLeft = "1rem";
    miBoton.dataset.item = item;
    miBoton.addEventListener("click", borrarItemCarrito);
    // Mezcla nodos
    miNodo.appendChild(miBoton);
    DOMcarrito.appendChild(miNodo);
  });
  // Renderiza el precio total en el HTML
  DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
  // Obtener el producto ID que hay en el boton pulsado
  let id = evento.target.dataset.item;

  // Borrar todos los productos
  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Borraste el producto del carrito",
    showConfirmButton: false,
    timer: 1000,
  });
  // vuelve a renderizar
  renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
  // se recorre el array del carrito
  return carrito.reduce((total, item) => {
    // De cada elemento obtenemos su precio
    let miItem = baseDeDatos.filter((itemBaseDatos) => {
      return itemBaseDatos.id === parseInt(item);
    });
    // Los suma al total
    return total + Number(miItem[0].precio);
  }, 0);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
  // Limpia los productos guardados
  carrito = [];
  // Renderiza los cambios
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
  let numero_usuario = document.getElementById("numerotarjeta");
  let usuario = {
    nombre: nombre_usuario.value,
    numeroTarjeta: numero_usuario.value,
    cvv: codigo_usuario.value,
    compras: carrito,
  };


  let usuario_JSON = JSON.stringify(usuario);
  console.log(usuario_JSON);
  tarjeta_usuario.push(usuario_JSON);
  sessionStorage.setItem("usuarios", tarjeta_usuario);
}

let botton = document.getElementById("confirm-datos");
botton.addEventListener("click", save_data);
