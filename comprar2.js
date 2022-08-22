//USUARIO DE TARJETA

let tarjeta_usuario = []

function save_data(){
    
    let nombre_usuario = document.getElementById("nombre");
    let codigo_usuario = document.getElementById("cvv");
    let tarjeta_usuario = document.getElementById("numerotarjeta");
    let usuario = {"nombre": nombre_usuario.value, "numeroTarjeta": tarjeta_usuario.value, "cvv": codigo_usuario.value};
    
    let usuario_JSON = JSON.stringify(usuario);
    console.log(usuario_JSON);
    tarjeta_usuario.push(usuario_JSON);
    sessionStorage.setItem("usuarios", tarjeta_usuario);
    let buton = document.getElementById("confirm-datos");
    buton.addEventListener("click", save_data);
}

let buton = document.getElementById("confirm-datos");
buton.addEventListener("click", save_data);

//¿Que tipo de comensal sos?

let pasta_1 = document.getElementById("pasta_1");
let pasta_2 = document.getElementById("pasta_2");
let pasta_3 = document.getElementById("pasta_3");
let pasta_4 = document.getElementById("pasta_4");
let pasta_5 = document.getElementById("pasta_5");

let pan_1 = document.getElementById("pan_1");
let pan_2 = document.getElementById("pan_2");
let pan_3 = document.getElementById("pan_3");
let pan_4 = document.getElementById("pan_4");
let pan_5 = document.getElementById("pan_5");

let salsa_1 = document.getElementById("salsa_1");
let salsa_2 = document.getElementById("salsa_2");
let salsa_3 = document.getElementById("salsa_3");
let salsa_4 = document.getElementById("salsa_4");
let salsa_5 = document.getElementById("salsa_5");

let comensal_1 = document.getElementById("comensal_1");

comensal_1.addEventListener("click", function () {
    console.log("Productos aptos para todos/as", como_de_todo)

    pasta_1.style.display = "block";
    pasta_2.style.display = "block";
    pasta_3.style.display = "block";
    pasta_4.style.display = "block";
    pasta_5.style.display = "block";

    pan_1.style.display = "block";
    pan_2.style.display = "block";
    pan_3.style.display = "block";
    pan_4.style.display = "block";
    pan_5.style.display = "block";

    salsa_1.style.display = "block";
    salsa_2.style.display = "block";
    salsa_3.style.display = "block";
    salsa_4.style.display = "block";
    salsa_5.style.display = "block";
});

let comensal_2 = document.getElementById("comensal_2");

comensal_2.addEventListener("click", function () {
    console.log("Productos para veganos", vegano)

    pasta_1.style.display = "block";
    pasta_2.style.display = "none";
    pasta_3.style.display = "block";
    pasta_4.style.display = "none";
    pasta_5.style.display = "none";

    pan_1.style.display = "block";
    pan_2.style.display = "block";
    pan_3.style.display = "block";
    pan_4.style.display = "block";
    pan_5.style.display = "block";

    salsa_1.style.display = "none";
    salsa_2.style.display = "none";
    salsa_3.style.display = "none";
    salsa_4.style.display = "block";
    salsa_5.style.display = "block";
});

let comensal_3 = document.getElementById("comensal_3");

comensal_3.addEventListener("click", function () {
    console.log("Productos para vegetarianos", vegetariano)

    pasta_1.style.display = "block";
    pasta_2.style.display = "block";
    pasta_3.style.display = "block";
    pasta_4.style.display = "block";
    pasta_5.style.display = "none";

    pan_1.style.display = "block";
    pan_2.style.display = "block";
    pan_3.style.display = "block";
    pan_4.style.display = "block";
    pan_5.style.display = "block";

    salsa_1.style.display = "none";
    salsa_2.style.display = "block";
    salsa_3.style.display = "block";
    salsa_4.style.display = "block";
    salsa_5.style.display = "block";
});

let comensal_4 = document.getElementById("comensal_4");

comensal_4.addEventListener("click", function () {

    pasta_1.style.display = "none";
    pasta_2.style.display = "none";
    pasta_3.style.display = "none";
    pasta_4.style.display = "none";
    pasta_5.style.display = "none";

    pan_1.style.display = "none";
    pan_2.style.display = "none";
    pan_3.style.display = "none";
    pan_4.style.display = "none";
    pan_5.style.display = "none";

    salsa_1.style.display = "block";
    salsa_2.style.display = "block";
    salsa_3.style.display = "block";
    salsa_4.style.display = "block";
    salsa_5.style.display = "block";
}); 

let vegano = [
    {
        producto: "Ñoquis",
        categoria: "Pastas",
        precio: "450",
    },
    {
        producto: "Fideos",
        category: "Pastas",
        precio: "350",
    },
    {
        producto: "Napolitana",
        categoria: "salsas",
        precio: "300",
    },
    {
        producto: "Tomate,aceituna y ajo",
        categoria: "salsas",
        precio: "450",
    },
    {
        producto: "De centeno",
        categoria: "Panes",
        precio: "700",
    },
    {
        producto: "Blanco",
        categoria: "Panes",
        precio: "400",
    },
    {
        producto: "Relleno",
        categoria: "Panes",
        precio: "650",
    },
    {
        producto: "Multicereal",
        categoria: "Panes",
        precio: "550",
    },
    {
        producto: "Blanco con nueces",
        categoria: "Panes",
        precio: "850",
    },
]
let vegetariano = [
    {
        producto: "Ñoquis rellenos",
        categoria: "Pastas",
        precio: "580",
    },
    {
        producto: "Ñoquis",
        categoria: "Pastas",
        precio: "450",
    },
    {
        producto: "Fideos",
        category: "Pastas",
        precio: "350",
    },
    {
        producto: "Capellettis",
        categoria: "Pastas",
        precio: "500",
    },
    {
        producto: "Crema de champi",
        categoria: "salsas",
        precio: "450",
    },
    {
        producto: "Crema de limon",
        categoria: "salsas",
        precio: "340",
    },
    {
        producto: "Napolitana",
        categoria: "salsas",
        precio: "300",
    },
    {
        producto: "Tomate,aceituna y ajo",
        categoria: "salsas",
        precio: "450",
    },
    {
        producto: "De centeno",
        categoria: "Panes",
        precio: "700",
    },
    {
        producto: "Blanco",
        categoria: "Panes",
        precio: "400",
    },
    {
        producto: "Relleno",
        categoria: "Panes",
        precio: "650",
    },
    {
        producto: "Multicereal",
        categoria: "Panes",
        precio: "550",
    },
    {
        producto: "Blanco con nueces",
        categoria: "Panes",
        precio: "850",
    },
]
let como_de_todo = [
    {
        producto: "Ñoquis rellenos",
        categoria: "Pastas",
        precio: "580",
    },
    {
        producto: "Ñoquis",
        categoria: "Pastas",
        precio: "450",
    },
    {
        producto: "Fideos",
        category: "Pastas",
        precio: "350",
    },
    {
        producto: "Capellettis",
        categoria: "Pastas",
        precio: "500",
    },
    {
        producto: "Capellettis especiales",
        categoria: "Pastas",
        precio: "550",
    },
    {
        producto: "Bolognesa",
        categoria: "salsas",
        precio: "550",
    },
    {
        producto: "Crema de champi",
        categoria: "salsas",
        precio: "450",
    },
    {
        producto: "Crema de limon",
        categoria: "salsas",
        precio: "340",
    },
    {
        producto: "Napolitana",
        categoria: "salsas",
        precio: "300",
    },
    {
        producto: "Tomate,aceituna y ajo",
        categoria: "salsas",
        precio: "450",
    },
    {
        producto: "De centeno",
        categoria: "Panes",
        precio: "700",
    },
    {
        producto: "Blanco",
        categoria: "Panes",
        precio: "400",
    },
    {
        producto: "Relleno",
        categoria: "Panes",
        precio: "650",
    },
    {
        producto: "Multicereal",
        categoria: "Panes",
        precio: "550",
    },
    {
        producto: "Blanco con nueces",
        categoria: "Panes",
        precio: "850",
    },
]; 