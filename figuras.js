// Codigo del cuadradio======================
// const perimetroCuadrado = ladoCuadrado * 4;
function perimetroCuadrado(lado){
    return lado * 4;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}

// Codigo del triangulo=========================
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function verificaTriangulo(lado1, lado2, base){
    if (lado1 === lado2 && lado1 != base){
        return true; // si es isosceles
    }
    return false; // mo es isosceles
}
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(lado , base){
    return (base * encuentraAltura(lado, base)) / 2;
}

// calcula la atura de un triangulo utilizando el teorema de PITAGORAS
function encuentraAltura (lado , base){ 
    return (Math.sqrt((lado **2) - ((base/2) ** 2)));
    
}



// Circulos==========================================
// diametro 
// const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio){
    return radio * 2;
}

// circunferencia 
// const perimetroCirculo = diametroCirculo * PI;
function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI
}

// area 
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio){
    return (radio ** 2) * Math.PI;
}






    

