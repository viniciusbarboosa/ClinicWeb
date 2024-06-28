import { Router } from "express";
const router = Router()

import { verificacaoToken } from "../middleware/verificacaoMiddleware";
import { CreateUsuarioController } from "../controllers/usuarioController";
const usuarioController = new CreateUsuarioController()

router.post('/criarTipoUsuario',usuarioController.criarTipoUsuario)
router.post('/criarUsuario',verificacaoToken,usuarioController.criarUsuario)
router.post('/logarUsuario',usuarioController.logarUsuario)

export default router;