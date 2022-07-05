document.getElementById('submit_panes').onclick = function() {
    let select_tipo_pan = document.getElementById('Panes01');
    let tipo_pan = select_tipo_pan.options[select_tipo_pan.selectedIndex].text;

    let select_cantidad_pan = document.getElementById('Panes02');
    let cantidad_pan = select_cantidad_pan.options[select_cantidad_pan.selectedIndex].text;


    switch (tipo_pan) {
        case "De centeno":
            alert( 300 * cantidad_pan);
            break;
        case "Blanco":
            alert( 200 * cantidad_pan);
            break;
        case "Relleno":
            alert( 250 * cantidad_pan);
            break;
        case "Multicereal":
            alert( 500 * cantidad_pan);
            break;
        case "Blanco con nueces":
            alert(550 * cantidad_pan);
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
            alert( 300 * cantidad_pastas);
            break;
        case "Ñoquis":
            alert( 200 * cantidad_pastas);
            break;
        case "Fideos verdes, violetas o al huevo":
            alert( 250 * cantidad_pastas);
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
            alert( 150 * cantidad_salsas);
            break;
        case "Crema de champignones":
            alert( 250 * cantidad_salsas);
            break;
        case "Crema de limon":
            alert( 200 * cantidad_salsas);
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
