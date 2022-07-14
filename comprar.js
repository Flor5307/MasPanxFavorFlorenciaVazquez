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


//ARRAYS, OBJETOS Y PRODUCTOS 

alert("Te dejamos nuestras mejores combinaciones!!")

let recomendaciones_con_descuento = ["1: Ñoquis rellenos con Bolognesa", "2: Capelettis con Crema de champignones", "3: Fideos con Crema de limon", "4: Ñoquis conTomate, aceituna y ajo"];

for (let compras = 0; compras < 4; compras++){
    alert(recomendaciones_con_descuento[compras]);
}
let entrada = prompt("Que combinacion armarias? ")

console.log(recomendaciones_con_descuento)

recomendaciones_con_descuento.push("5: Capelletis especiales con fileto")

console.log( recomendaciones_con_descuento.indexOf("1: Ñoquis rellenos con Bolognesa"))

console.log(recomendaciones_con_descuento.includes("Fideos con tuco"))
console.log(recomendaciones_con_descuento.includes("1: Ñoquis rellenos con Bolognesa"))
console.log(recomendaciones_con_descuento.includes("Capelettis con crema"))

let promociones = [
    {variedad: "Ñoquis rellenos con Bolognesa", precio: 600},
    {variedad: "Capelettis con Crema de champignones", precio: 850}, 
    {variedad: "Fideos con Crema de limon", precio: 480}, 
    {variedad: "Ñoquis con Tomate, aceituna y ajo", precio: 800}];

let resultado = promociones.find((la) => la.variedad === "Ñoquis rellenos con Bolognesa")
let resultado1 = promociones.find((la) => la.variedad === "Ñoquis con crema")
let resultado2 = promociones.find((la) => la.variedad === "Fideos con Crema de limon")

console.log(resultado)
console.log(resultado1)
console.log(resultado2)