import { Router } from "express";
import { iniciarTransaccion , confirmarPago , guardarPago } from "../controllers/transbank_controllers";

const router = Router();
router.post("/iniciar", iniciarTransaccion);
router.post("/confirmar", confirmarPago);
router.get("/confirmar",guardarPago);

export default router;