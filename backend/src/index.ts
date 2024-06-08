import express from "express";
const app = express();
app.use(express.json());

//ROTAS
import usuarioRouter from "./routes/usuarioRouter";
app.use('/api/usuarios',usuarioRouter);

app.listen(3333,()=>{console.log("Servidor Rodando")});