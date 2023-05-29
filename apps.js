let boton = document.getElementById("sumar");
let boton = document.getElementById("restar");
let boton = document.getElementById("multiplicar");
let boton = document.getElementById("dividir");
let resiltado = document.getElementById("resultado");

boton.addEventListener("click",hacersuma);
boton.addEventListener("click",hacerresta);
boton.addEventListener("click",hacermultiplicacion);
boton.addEventListener("click",hacerdivision);


function hacersuma(){
    let num1=parseFloat(document.getElementById("num1").value)
    let num2=parseFloat(document.getElementById("num2").value)
    let s=num1+num2
    resultado.innerHTML="La suma es" ${s}
}
