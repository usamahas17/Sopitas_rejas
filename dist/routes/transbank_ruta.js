"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transbank_controllers_1 = require("../controllers/transbank_controllers");
const router = (0, express_1.Router)();
router.post("/iniciar", transbank_controllers_1.iniciarTransaccion);
router.post("/confirmar", transbank_controllers_1.confirmarPago);
router.get("/confirmar", transbank_controllers_1.guardarPago);
exports.default = router;
//# sourceMappingURL=transbank_ruta.js.map