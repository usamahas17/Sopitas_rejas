import { Router } from "express";
import { agregarProductoalCarrito , eliminarProductodelCarrito } from "../controllers/carproducto_controllers";

const router = Router();
router.post('/agregar',agregarProductoalCarrito );
router.delete('/eliminar', eliminarProductodelCarrito);

export default router;