let btn_compra = document.querySelectorAll(".botonCompra");
console.log(btn_compra);

for (let boton of btn_compra) {
    boton.addEventListener("click", agregar_a_carrito);
}


let carrito = [];

function agregar_a_carrito(e) {
  //console.log("EL EVENTO ESTA EN:", e.target);
  let hijo = e.target;
  let padre = hijo.parentNode;
  let abuelo = padre.parentNode;

  let nombre_producto = padre.querySelector("h4").textContent;
  let precio = padre.querySelector("span").textContent;

  let producto = {
    nombre: nombre_producto,
    precio: precio,
    cantidad: 1,
  };

  carrito.push(producto);
  let arreglo_JSON = JSON.stringify(carrito);
  localStorage.setItem("carrito", arreglo_JSON);
  console.log(carrito);

  mostrar_carrito(producto);
}

function mostrar_carrito(producto) {
  let fila = document.createElement("tr");
  fila.innerHTML = `<td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td><button class="btn-dark borrar_elemento">Borrar</button></td>`;

  let tabla = document.getElementById("tbody");
  tabla.append(fila);

  let botones_borrar = document.querySelectorAll(".borrar_elemento");

  for (let boton of botones_borrar) {
    boton.addEventListener("click", borrar_producto);
  }
}

function borrar_producto(e) {
  let abuelo = e.target.parentNode.parentNode;
  abuelo.remove();
  swal.fire({
    title: "Se borró el producto del carrito!",
    icon: "error",
    button: "Entendido",
  });
}


