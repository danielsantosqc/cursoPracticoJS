const lista1 = [
  100,
  200,
  300,
  400,
  500
];

let sumaLista1 = 0;
 for(let i = 0; i < lista1.length; i++){
   sumaLista1 = sumaLista1 + lista1[i];
   console.log(sumaLista1);
 }

let promedioLista = sumaLista1 / lista1.length;
console.log("media es : " + promedioLista );
