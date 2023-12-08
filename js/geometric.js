//patro modular : es para proteger el codigo, pero
//al tener el patron modular podemos acceder a las funciones con unos metodos especificos y todo lo demas
const MyModule = (()=>{ //lo colocamos en una variable const
    "use strict" //el codigo debe estar bien escrito, esto marca el error en la consola del navegador
    //area y perimetro del cuadrado
    const perimCuadrado = (side) => side * 4
    const areaCuadrado = (side) => side * side

    //asi accedemos a nuestras funciones y las funciones se modifican un poco mas abajo
    const btnPerimCuadrado = document.querySelector("#btnPerimCuadrado"),
          btnAreaCuadrado  = document.querySelector("#btnAreaCuadrado"),
          btnPerimTriangulo  = document.querySelector("#btnPerimTriangulo"),
          btnAreaTriangulo  = document.querySelector("#btnAreaTriangulo"),
          btnDiamCirculo  = document.querySelector("#btnDiamCirculo"),
          btnPerimCirculo  = document.querySelector("#btnPerimCirculo"),
          btnAreaCirculo  = document.querySelector("#btnAreaCirculo");

     
    btnPerimCuadrado.addEventListener("click", ()=>{

        let inputSide = document.getElementById("inputSide") //seleccionar la etiqueta mediante el id
        let value = Number(inputSide.value) //obtenemos su valor y de paso lo convertimos en tipo numero
        
        const result = `El perimetro del cuadrado es: ${perimCuadrado(value)} cm` //la salida 
        document.getElementById("result").innerText = result //colocar en la etiqueta p reemplanzado y colocando la vairable result
    })

    btnAreaCuadrado.addEventListener("click", ()=>{
        let inputSide = document.getElementById("inputSide") //seleccionar la etiqueta mediante el id
        let value = Number(inputSide.value) //obtenemos su valor y de paso lo convertimos en tipo numero
        
        const result = `El Area del cuadrado es: ${areaCuadrado(value)} cm^2` //la salida 
        document.getElementById("result").innerText = result //colocar en la etiqueta p reemplanzado y colocando la vairable result
    })

    //area y perimetro del triangulo
    const perimTriangulo = (lado1, lado2, lado3) => lado1+lado2+lado3
    const areaTriangulo = (base, altura) => (base*altura)/2

    btnPerimTriangulo.addEventListener("click", ()=>{
        let inputLado1 = document.getElementById("inputSide1")
        let inputLado2 = document.getElementById("inputSide2")
        let inputLado3 = document.getElementById("inputSide3")
        inputLado1 = Number(inputLado1.value)
        inputLado2 = Number(inputLado2.value)
        inputLado3 = Number(inputLado3.value)

        const resp = `El perimetro del triangulo es: ${perimTriangulo(inputLado1, inputLado2, inputLado3)} cm`
        document.getElementById("result").innerText = resp
    })
    btnAreaTriangulo.addEventListener("click", ()=>{
        let base = document.getElementById("inputBase")
        let altura = document.getElementById("inputAltura")
        base = Number(base.value)
        altura = Number(altura.value)

        const resl = `El area del triangulo es: ${areaTriangulo(base, altura)} cm^2`
        document.getElementById("result").innerText = resl
    })

    //diametro, area y perimetro del circulo
    const diametroCirculo = (radio) => radio*2
    const perimCirculo = (radio) => diametroCirculo(radio)*Math.PI
    const areatroCirculo = (radio) => (radio*radio) * Math.PI

    btnDiamCirculo.addEventListener("click", ()=>{
        let radio = document.getElementById("radio1")
        radio = Number(radio.value)

        const resr = `El diametro del circulo es: ${diametroCirculo(radio)} cm`
        document.getElementById("result").innerText = resr
    })
    btnPerimCirculo.addEventListener("click", ()=>{
        let radioP = document.getElementById("radio1")
        radioP = Number(radioP.value)

        const resr = `El perimetro del circulo es: ${perimCirculo(radioP)} cm`
        document.getElementById("result").innerText = resr
    })
    btnAreaCirculo.addEventListener("click", ()=>{
        let radioA = document.getElementById("radio1")
        radioA = Number(radioA.value)

        const resr = `El area del circulo es: ${areatroCirculo(radioA)} cm`
        document.getElementById("result").innerText = resr
    })

    /*return { //hacer que algunas funciones sean publicas y no privadas por el patron modular
        cpc : calcularPerimCuadrado, 
        cac : calcularAreaCuadrado
    }*/
})()
