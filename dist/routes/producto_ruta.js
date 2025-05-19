"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto_controller");
const router = (0, express_1.Router)();
router.get("/:id", producto_controller_1.getPorductosById);
router.get("/", producto_controller_1.getProductos);
router.post("/", producto_controller_1.createProducto);
router.put("/:id", producto_controller_1.updateProducto);
router.delete("/:id", producto_controller_1.deleteProducto);
exports.default = router;
//# sourceMappingURL=producto_ruta.js.map