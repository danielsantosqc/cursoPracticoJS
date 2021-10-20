// Codigo del cuadradio
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del Cuadrado es: "+ perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area del Cuadrado es: "+ areaCuadrado + "cm²");
console.groupEnd();

console.group("Triangulos");
// Codigo del triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo1 + "cm, "
    + baseTriangulo + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: "+ alturaTriangulo + "cm");


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del Triangulo es: "+ perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Area del Triangulo es: "+ areaTriangulo + "cm²");
console.groupEnd();



// Circulos
console.group("Cuadrados");

// radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

// diametro 
const diametroCirculo = radioCirculo * 2;
console.log("El diamaetro del circulo es: " + diametroCirculo + "cm");

// pi 3.1415
const PI = Math.PI;
console.log("PI es: " + PI      );

// circunferencia 
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// area 
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm²");

console.groupEnd();




    

