const lista1 = [
  200,
  500,
  300,
  600,
  700,
  100,
  400,
  800
];


function calculaMediaAritmerica(listArray){

  // 1
  // let sumaLista1 = 0;
  //  for(let i = 0; i < listArray.length; i++){
  //    sumaLista1 = sumaLista1 + listArray[i];
  //  }  
  //  console.log(sumaLista1);
  // 2
  // const sumaLista1 = listArray.reduce(
  //   function (valorAcumulado = 0, nuevoElemento ){
  //     console.log(valorAcumulado);
  //     return valorAcumulado + nuevoElemento;
  //   }
  // ); 

  // 3 
  const sumar = (valorAcumulado, nuevoElemento) =>{
    // console.log(valorAcumulado+"va");
    // console.log(nuevoElemento+"ne");
    return valorAcumulado + nuevoElemento ;
  } 
  let sumaLista1 = listArray.reduce(sumar, 0); 

  // -------------------------
  let promedioLista = sumaLista1 / listArray.length;
  return promedioLista;
}

// moda-----------------------
function calculaMediana(listArrayParam){
  const listArray = listArrayParam.sort((a,b) => {
    return a-b;
  });
  let mediana;
  const mitadListaArray = parseInt(listArray.length / 2);
  if(listArray.length % 2 === 0){
    let newArray = [listArray[mitadListaArray - 1], listArray[mitadListaArray]];
    mediana = calculaMediaAritmerica(newArray);
    return mediana;
    // console.log(mediana);
  }else{
    mediana = listArray[mitadListaArray];
    return mediana; 
    // console.log(mediana);
  }
}