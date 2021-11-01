const lista1 = [
  100,
  200,
  300,
  400,
  500
];

<<<<<<< HEAD

function calculaMediaAritmerica(listArray){

  // 1
  // let sumaLista1 = 0;
  //  for(let i = 0; i < listaArray.length; i++){
  //    sumaLista1 = sumaLista1 + listaArray[i];
  //  }  👇

  // 2
  // const sumaLista1 = listArray.reduce(
  //   function (valorAcumulado = 0, nuevoElemento ){
  //     console.log(valorAcumulado);
  //     return valorAcumulado + nuevoElemento;
  //   }
  // ); 👇

  // 3 👇
  const sumar = (valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento ;
  let sumaLista1 = listArray.reduce(sumar, 0); 

  // -------------------------
  let promedioLista = sumaLista1 / lista1.length;
  return promedioLista;
}
=======
let sumaLista1 = 0;
 for(let i = 0; i < lista1.length; i++){
   sumaLista1 = sumaLista1 + lista1[i];
   console.log(sumaLista1);
 }

let promedioLista = sumaLista1 / lista1.length;
console.log("media es : " + promedioLista );
>>>>>>> 079a62be31e5bd86861274fed68202d26809345e
