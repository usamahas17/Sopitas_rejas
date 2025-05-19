import { Router } from "express" ;
import { getCarrito , createCarrito , deleteCarrito } from "../controllers/carrito_controllers";
const router = Router();

router.get("/", getCarrito);
router.post("/",createCarrito);
router.delete("/:id",deleteCarrito);
export default router