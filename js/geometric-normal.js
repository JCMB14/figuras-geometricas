//codigo normal antes de aplicar el patron modular

const perimCuadrado = (side) => side * 4
const areaCuadrado = (side) => side * side

function calcularPerimCuadrado(){
    let inputSide = document.getElementById("inputSide") //seleccionar la etiqueta mediante el id
    let value = Number(inputSide.value) //obtenemos su valor y de paso lo convertimos en tipo numero
     
    const result = `El perimetro del cuadrado es: ${perimCuadrado(value)} cm` //la salida 
    document.getElementById("result").innerText = result //colocar en la etiqueta p reemplanzado y colocando la vairable result
}
function calcularAreaCuadrado(){
    let inputSide = document.getElementById("inputSide") //seleccionar la etiqueta mediante el id
    let value = Number(inputSide.value) //obtenemos su valor y de paso lo convertimos en tipo numero
    
    const result = `El Area del cuadrado es: ${areaCuadrado(value)} cm^2` //la salida 
    document.getElementById("result").innerText = result //colocar en la etiqueta p reemplanzado y colocando la vairable result
}

//area y perimetro del triangulo
const perimTriangulo = (lado1, lado2, lado3) => lado1+lado2+lado3
const areaTriangulo = (base, altura) => (base*altura)/2

function calcularPerimTriangulo() {
    let inputLado1 = document.getElementById("inputSide1")
    let inputLado2 = document.getElementById("inputSide2")
    let inputLado3 = document.getElementById("inputSide3")
    inputLado1 = Number(inputLado1.value)
    inputLado2 = Number(inputLado2.value)
    inputLado3 = Number(inputLado3.value)

    const resp = `El perimetro del triangulo es: ${perimTriangulo(inputLado1, inputLado2, inputLado3)} cm`
    document.getElementById("result").innerText = resp
}
function calcularAreaTriangulo() {
    let base = document.getElementById("inputBase")
    let altura = document.getElementById("inputAltura")
    base = Number(base.value)
    altura = Number(altura.value)

    const resl = `El area del triangulo es: ${areaTriangulo(base, altura)} cm^2`
    document.getElementById("result").innerText = resl
}

//diametro, area y perimetro del circulo
const diametroCirculo = (radio) => radio*2
const perimCirculo = (radio) => diametroCirculo(radio)*Math.PI
const areatroCirculo = (radio) => (radio*radio) * Math.PI

function calcularDiametroCirculo() {
    let radio = document.getElementById("radio1")
    radio = Number(radio.value)

    const resr = `El diametro del circulo es: ${diametroCirculo(radio)} cm`
    document.getElementById("result").innerText = resr
}
function calcularperimCirculo() {
    let radioP = document.getElementById("radio1")
    radioP = Number(radioP.value)

    const resr = `El perimetro del circulo es: ${perimCirculo(radioP)} cm`
    document.getElementById("result").innerText = resr
}
function calcularAreaCirculo() {
    let radioA = document.getElementById("radio1")
    radioA = Number(radioA.value)

    const resr = `El area del circulo es: ${areatroCirculo(radioA)} cm`
    document.getElementById("result").innerText = resr
}





