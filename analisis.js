// helpers***
function esPar(number){
  return (number %2 ===0);
}

function calculaMediaAritmerica(listArray){
  const sumar = (valorAcumulado, nuevoElemento) =>{
    return valorAcumulado + nuevoElemento ;
  } 
  let sumaLista1 = listArray.reduce(sumar, 0); 
  let promedioLista = sumaLista1 / listArray.length;
  return promedioLista;
}

// calculadora de mediana
function medianaSalarios(lista){
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)){ 
    const personitaMitad = calculaMediaAritmerica([lista[mitad -1], lista[mitad ]]);
    return personitaMitad;
  }else{
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

// mediana general 
const salariosCol = colombia.map(
  function (personita){
    return personita.salary
  }
);

const salariosColSorted = salariosCol.sort(
  function(salaryA, salaryB){
    return salaryA -salaryB;
  }
)

const medianaGeneralCol = medianaSalarios(salariosColSorted);


//mediana del top
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10 = medianaSalarios(salariosColTop10);

console.log({
  medianaGeneralCol,
  medianaTop10
});
