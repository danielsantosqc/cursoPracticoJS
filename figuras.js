// Codigo del cuadradio======================
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

// Codigo del triangulo=========================
function verificaTriangulo(lado1, lado2, base){
    if (lado1 === lado2 && lado1 > 0 && lado2 > 0 && base > 0 && base <=(lado1*2)){
        return true; // si es isosceles
    }else{
        return false; // mo es isosceles
    }
}

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
    
}

function areaTriangulo(lado , base){
    return (base * encuentraAltura(lado, base)) / 2;
}

function encuentraAltura (lado , base){ 
    return (Math.sqrt((lado **2) - ((base/2) ** 2)));
    
}

// Circulos==========================================
// diametro 
function diametroCirculo(radio){
    return radio * 2;
}

// circunferencia 
function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI
}

// area 
function areaCirculo(radio){
    return (radio ** 2) * Math.PI;
}

// function exec to html ======================

// square---------------
function calcularPerimetroSquare(){
    const input = parseInt(document.getElementById("inputCuadrado").value);
    let respuesta = perimetroCuadrado(input);

    let inputSelect = document.getElementById("medida").value;

    let respCuadrado = document.getElementById("respCuadrado");
    respCuadrado.innerHTML = "El Perimetro es: " + respuesta + inputSelect;
}

function calcularAreaSquare(){
    const input = parseInt(document.getElementById("inputCuadrado").value);
    let respuesta = areaCuadrado(input);
    
    let inputSelect = document.getElementById("medida").value;

    let respCuadrado = document.getElementById("respCuadrado");
    respCuadrado.innerHTML = "El Area es: " + respuesta + inputSelect + "²";
}

// triangle---------
function calcularPerimetroTriangle (){
    const input1 = parseInt(document.getElementById("inputTriangulo1").value);
    const input2 = parseInt(document.getElementById("inputTriangulo2").value);
    const inputBase = parseInt(document.getElementById("base").value);
    let verificando = verificaTriangulo(input1, input2,inputBase)
    if (verificando){
        let respuesta = perimetroTriangulo(input1, input2, inputBase);

        let inputSelect = document.getElementById("medidaTriangulo").value;

        let respuestaTriangulo = document.getElementById("respTriangulo");
        respuestaTriangulo.innerHTML = "El Perimetro es: " + respuesta + inputSelect;
    }else{
        let respuestaTriangulo = document.getElementById("respTriangulo");
        respuestaTriangulo.innerHTML = "No son las medidas de un triangulo Isosceles, recurde que A y B deven ser iguales y la base no mayor que el doble de A o B";
    }

    
}
function calcularAreaTriangle(){
    const input1 = parseInt(document.getElementById("inputTriangulo1").value);
    const input2 = parseInt(document.getElementById("inputTriangulo2").value);
    const inputBase = parseInt(document.getElementById("base").value);
    
    let verificando = verificaTriangulo(input1, input2, inputBase)
    if (verificando){
        let respuesta = areaTriangulo(input1,  inputBase);
    
        let inputSelect = document.getElementById("medidaTriangulo").value;

        let respuestaTriangulo = document.getElementById("respTriangulo");
        respuestaTriangulo.innerHTML = "El Area es: " + respuesta + inputSelect + "²";
    }else{
        let respuestaTriangulo = document.getElementById("respTriangulo");
        respuestaTriangulo.innerHTML = "No son las medidas de un triangulo Isosceles, recurde que A y B deven ser iguales y la base no mayor que el doble de A o B";
    }
}


// circle-------

function calcularPerimetroCircle(){
    
    const input = parseInt(document.getElementById("inputCirculo").value);
    let respuesta = perimetroCirculo(input);

    let inputSelect = document.getElementById("medidaCirculo").value;

    let respuestaCirculo = document.getElementById("respCirculo");
    respuestaCirculo.innerHTML = "El Perimetro es: " + respuesta + inputSelect;
}
function calcularAreaCircle(){
    const input = parseInt(document.getElementById("inputCirculo").value);
    let respuesta = areaCirculo(input);

    let inputSelect = document.getElementById("medidaCirculo").value;

    let respuestaCirculo = document.getElementById("respCirculo");
    respuestaCirculo.innerHTML = "El Perimetro es: " + respuesta + inputSelect + "²";
}



    

