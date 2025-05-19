import { Router } from "express";
import { geUsuarios , createUsuarios , deleteUsuario} from "../controllers/usuario_contoller";

const router = Router();
router.get("/",geUsuarios);
router.post("/",createUsuarios);
router.delete("/:id",deleteUsuario);
export default router;