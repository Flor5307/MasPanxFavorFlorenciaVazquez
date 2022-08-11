let arreglo_usuario = []

function set_data(){
    
    let nombre_usuario = document.getElementById("nombre");
    let apellido_usuario = document.getElementById("apellido");
    let email_usuario = document.getElementById("email");
    let tel_usuario = document.getElementById("tel");
    let comentarios_usuario = document.getElementById("comentarios");
    let usuario = {"nombre": nombre_usuario.value, "apellido": apellido_usuario.value, "email": email_usuario.value, "tel": tel_usuario.value, "comentarios": comentarios_usuario.value};
    
    let usuario_JSON = JSON.stringify(usuario);
    console.log( usuario_JSON);
    arreglo_usuario.push(usuario_JSON);
    localStorage.setItem("usuarios", arreglo_usuario);
}

let buton = document.getElementById("buton");
buton.addEventListener("click", set_data);


$(document).ready(function () {
    $("form").submit(function (event) {
      let formData = {
        nombre: $("#nombre").val(),
        apellido: $("#apellido").val(),
        email: $("#email").val(),
        tel: $("#tel").val(),
        comentarios: $("#comentarios").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "js/contacto.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
      event.preventDefault();
    });
  });