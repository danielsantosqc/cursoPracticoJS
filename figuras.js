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
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura){
    return (base * altura) / 2;
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
    return (radio * radio) * Math.PI
}



    

