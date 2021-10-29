const idPrecio = document.getElementById("precioInicial");
const idDescuento = document.getElementById("descuento");
const idTotal = document.getElementById("total");
const boton = document.getElementById("boton");
const idResCupon = document.getElementById("resultadoCupon");
const idMuestraCupones = document.getElementById("losCupones");

const codigosPromocionales = {
    platzerito: 50, 
    descuento10: 10,
    descuento20: 20, 
    descuento30: 30,
    descuento40: 40
};

let price = 100;
// const discount = 30;
const discount = Math.floor(Math.random() * (50 - 10)) + 5;

const muestraCupones = function (){
    for(let [codigo, descuento] of Object.entries(codigosPromocionales)){
        idMuestraCupones.innerHTML += `<li>${codigo}</li>`;
    }
}
function calculateDiscount (price, discount){
    let cupon = verificaCupon();
    let finalPrice = ((price * (100 - discount)) / 100) - cupon;
    console.log(finalPrice);
    idPrecio.innerHTML = price + "$";
    idDescuento.innerHTML = discount + "%";
    idResCupon.innerHTML = cupon + "$ de descuento";
    idTotal.innerHTML = finalPrice + "$";
}

// const codigosPromocionales = [
//     {platzerito: 50}, 
//     {descuento10: 10},
//     {descuento20: 20}, 
//     {descuento30: 30}
// ];

function verificaCupon(){
    const inputCupopn = document.getElementById("cupon");
    const texto = inputCupopn.value.toLowerCase();

    for(let [codigo, descuento] of Object.entries(codigosPromocionales)){ 
        if(codigo === texto){
            return descuento;
        }
    }
    return 0;
}
muestraCupones();
calculateDiscount(price, discount);
boton.addEventListener("click", () => calculateDiscount(price ,discount));

