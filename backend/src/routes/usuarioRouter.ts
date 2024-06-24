import { Router } from "express";
const router = Router()

import { CreateUsuarioController } from "../controllers/usuarioController";
const usuarioController = new CreateUsuarioController()

router.post('/criarTipoUsuario',usuarioController.criarTipoUsuario)
router.post('/criarUsuario',usuarioController.criarUsuario)

export default router;