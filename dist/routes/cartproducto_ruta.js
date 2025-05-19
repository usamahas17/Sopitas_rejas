"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carproducto_controllers_1 = require("../controllers/carproducto_controllers");
const router = (0, express_1.Router)();
router.post('/agregar', carproducto_controllers_1.agregarProductoalCarrito);
router.delete('/eliminar', carproducto_controllers_1.eliminarProductodelCarrito);
exports.default = router;
//# sourceMappingURL=cartproducto_ruta.js.map