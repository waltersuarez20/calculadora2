const express=require('express');
const app= express();

app.use(express.json());


app.use( function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-type");
    next();
}
);



app.post(
    '/api/sumar',
     (req, res)=>{
        console.log("¡Alguien está conectándose a esta ruta!");        
        const {numero_1, numero_2}= req.body;
        const resultado=parseFloat(numero_1)+parseFloat(numero_2);        
        res.json(resultado);
    }
);

app.post(
    '/api/restar',
    (req, res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=numero_1-numero_2;        
        res.json(resultado);
    }
);

app.post(
    '/api/multiplicar',
    (req, res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=numero_1*numero_2;        
        res.json(resultado);
    }
);

app.post(
    '/api/dividir',
    (req,res)=>{
             const {numero_1, numero_2}= req.body;           
            const resultado=numero_1/numero_2;   
            res.json(resultado);
    }
)


app.listen(
    3000,
    ()=>{
      console.log("Servidor ejecutándose en el puerto 3000");
    }
);