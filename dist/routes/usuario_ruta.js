"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_contoller_1 = require("../controllers/usuario_contoller");
const router = (0, express_1.Router)();
router.get("/", usuario_contoller_1.geUsuarios);
router.post("/", usuario_contoller_1.createUsuarios);
router.delete("/:id", usuario_contoller_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario_ruta.js.map