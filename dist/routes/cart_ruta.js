"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrito_controllers_1 = require("../controllers/carrito_controllers");
const router = (0, express_1.Router)();
router.get("/", carrito_controllers_1.getCarrito);
router.post("/", carrito_controllers_1.createCarrito);
router.delete("/:id", carrito_controllers_1.deleteCarrito);
exports.default = router;
//# sourceMappingURL=cart_ruta.js.map