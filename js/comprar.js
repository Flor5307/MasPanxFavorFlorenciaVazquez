document.getElementById('submit_panes').onclick = function() {
    let select_tipo_pan = document.getElementById('Panes01');
    let tipo_pan = select_tipo_pan.options[select_tipo_pan.selectedIndex].text;

    let select_cantidad_pan = document.getElementById('Panes02');
    let cantidad_pan = select_cantidad_pan.options[select_cantidad_pan.selectedIndex].text;


    switch (tipo_pan) {
        case "De centeno":
            alert( 700 * cantidad_pan);
            break;
        case "Blanco":
            alert( 400 * cantidad_pan);
            break;
        case "Relleno":
            alert( 650 * cantidad_pan);
            break;
        case "Multicereal":
            alert( 550 * cantidad_pan);
            break;
        case "Blanco con nueces":
            alert(850 * cantidad_pan);
            break;
        default:
            alert(0);
            break;
    } 
} 

document.getElementById('submit_pastas').onclick = function() {
    let select_tipo_pastas = document.getElementById('Pastas01');
    let tipo_pastas = select_tipo_pastas.options[select_tipo_pastas.selectedIndex].text;

    let select_cantidad_pastas = document.getElementById('Pastas02');
    let cantidad_pastas = select_cantidad_pastas.options[select_cantidad_pastas.selectedIndex].text;

    switch (tipo_pastas) {
        case "Ñoquis rellenos":
            alert( 580 * cantidad_pastas);
            break;
        case "Ñoquis":
            alert( 450 * cantidad_pastas);
            break;
        case "Fideos verdes, violetas o al huevo":
            alert( 350 * cantidad_pastas);
            break;
        case "Capellettis comunes":
            alert( 500 * cantidad_pastas);
            break;
        case "Capellettis especiales":
            alert(550 * cantidad_pastas);
            break;
        default:
            alert(0);
            break;
    } 
} 
document.getElementById('submit_salsas').onclick = function() {
    let select_tipo_salsas = document.getElementById('Salsas01');
    let tipo_salsas = select_tipo_salsas.options[select_tipo_salsas.selectedIndex].text;

    let select_cantidad_salsas = document.getElementById('Salsas02');
    let cantidad_salsas = select_cantidad_salsas.options[select_cantidad_salsas.selectedIndex].text;

    switch (tipo_salsas) {
        case "Bolognesa":
            alert( 550 * cantidad_salsas);
            break;
        case "Crema de champignones":
            alert( 450 * cantidad_salsas);
            break;
        case "Crema de limon":
            alert( 340 * cantidad_salsas);
            break;
        case "Napolitana":
            alert( 300 * cantidad_salsas);
            break;
        case "Tomate, aceituna y ajo":
            alert(450 * cantidad_salsas);
            break;
        default:
            alert(0);
            break;
    } 
} 

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

let comensal_1 = document.getElementById("comensal_1");

comensal_1.addEventListener("click", function(){
    console.log("Productos para veganos", vegano)
    let ñoquisRellenos = document.getElementById("ñoquisRellenos"); ñoquisRellenos.remove();
    let capelletis = document.getElementById("capelletis"); capelletis.remove();
    let capelletisEspeciales = document.getElementById("capelletisEspeciales"); capelletisEspeciales.remove();
    let bolognesa = document.getElementById("bolognesa"); bolognesa.remove();
    let champi = document.getElementById("champi"); champi.remove();
    let limon = document.getElementById("limon"); limon.remove();
});

let comensal_2 = document.getElementById("comensal_2");

comensal_2.addEventListener("click", function(){
    console.log("Productos para vegetarianos", vegetariano)
    let capelletisEspeciales = document.getElementById("capelletisEspeciales"); capelletisEspeciales.remove();
    let bolognesa = document.getElementById("bolognesa"); bolognesa.remove();
});

let comensal_3 = document.getElementById("comensal_3");

comensal_3.addEventListener("click", function(){
    let ñoquisRellenos = document.getElementById("ñoquisRellenos"); ñoquisRellenos.remove();
    let capelletis = document.getElementById("capelletis"); capelletis.remove();
    let capelletisEspeciales = document.getElementById("capelletisEspeciales"); capelletisEspeciales.remove();
    let centeno = document.getElementById("centeno"); centeno.remove();
    let blanco = document.getElementById("blanco"); blanco.remove();
    let relleno = document.getElementById("relleno"); relleno.remove();
    let multicereal = document.getElementById("multicereal"); multicereal.remove();
    let conNueces = document.getElementById("conNueces"); conNueces.remove();
    let ñoquis = document.getElementById("ñoquis"); ñoquis.remove();
    let fideos = document.getElementById("fideos"); fideos.remove();
    alert("Perdon, solo tenemos salsas sin TACC")
});

let comensal_4 = document.getElementById("comensal_4");

comensal_4.addEventListener("click", function(){
    console.log("Productos aptos para todos/as", como_de_todo)
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
