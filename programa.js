const Boton1= document.getElementById("submit1");
Boton1.addEventListener(
    'click',
    async (event)=>{
        event.preventDefault();        
        const numero_1= parseFloat(document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        
        const respuesta= await fetch('http://localhost:3000/api/sumar',{
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }
        );
        const dato= await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;
    }
);

const Boton2 = document.getElementById("submit2");
Boton2.addEventListener("click", async (event) => {
  event.preventDefault(); 
  const numero_1 = parseFloat(document.getElementById("num1").value);
  const numero_2 = parseFloat(document.getElementById("num2").value);
  const respuesta = await fetch("http://localhost:3000/api/restar", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }),
  });

  const dato = await respuesta.json();
  const div_resultado = document.getElementById("resultado");
  div_resultado.innerHTML = dato;
});

const Boton3 = document.getElementById("submit3");
Boton3.addEventListener("click", async (event) => {
  event.preventDefault();
  const numero_1 = parseFloat(document.getElementById("num1").value);
  const numero_2 = parseFloat(document.getElementById("num2").value);
  const respuesta = await fetch("http://localhost:3000/api/multiplicar", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }), 
  });

  const dato = await respuesta.json();
  const div_resultado = document.getElementById("resultado");
  div_resultado.innerHTML = dato;
});

const Boton4 = document.getElementById("submit4");
Boton4.addEventListener("click", async (event) => {
  event.preventDefault();
  const numero_1 = parseFloat(document.getElementById("num1").value);
  const numero_2 = parseFloat(document.getElementById("num2").value);
  const respuesta = await fetch("http://localhost:3000/api/dividir", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }), 
  });

  const dato = await respuesta.json();
  const div_resultado = document.getElementById("resultado");
  div_resultado.innerHTML = dato;
});