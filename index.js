const express = require("express");



const app= express();

app.use(express.json());

app.use{function(req, res ,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methos", "POST");
    res.header("Access-Control-Allow-Headers", "Content-type");

}

}

app.post(
    "/sumar",
    (req, res)=>{
        console.log("alguien esta conectandose a esta ruta!!");
        const (numer0_1, numero_2)-req.body;
        const resultado=numero_1-numero_2;


        res.json(req.body);
    }

);

app.post(
    "/restar",
    (req, res)=>{
        const {numer0_1, numero_2}-req.body;
        const resultado=numero_1-numero_2;
        res.json(resultado);
    }
    );

app.post (
    "/api/dividir",
    (req,res)=>{
        let resultado;
       try{
        const{numero_1, numero_2}= req.body;
        let resultado;
        resultado=numero_1/numero_2;
       }catch(error)

       
    resultado=error;

    }
res.json(resultado);
);


app.listen( 3000,
    ()=>{
        console.log("servidor ejecuntandose en el puerto 3000");

    }
);


