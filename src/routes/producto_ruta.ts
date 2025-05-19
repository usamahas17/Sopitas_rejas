import { Router } from "express";
import { getPorductosById, getProductos, createProducto, updateProducto, deleteProducto } from "../controllers/producto_controller";

const router = Router();
router.get("/:id",getPorductosById);
router.get("/",getProductos);
router.post("/",createProducto);
router.put("/:id",updateProducto);
router.delete("/:id",deleteProducto);
export default router;

