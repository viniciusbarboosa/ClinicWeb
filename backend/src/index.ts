import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

//ROTAS
import usuarioRouter from "./routes/usuarioRouter";
app.use('/api/usuarios',usuarioRouter);

app.listen(3333,()=>{console.log("Servidor Rodando")});