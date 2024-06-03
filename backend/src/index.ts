import express from "express";
const app = express();

app.get('/',(req,res)=>{
    res.send("Helo World")
})

app.listen(3333,()=>{console.log("Servidor Rodando")});