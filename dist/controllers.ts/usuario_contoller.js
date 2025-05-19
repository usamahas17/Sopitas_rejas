"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuarios = exports.geUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const geUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuario_1.default.findAll();
        res.json({ usuarios });
        console.log("agarra usuario");
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.geUsuarios = geUsuarios;
const createUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, email, contraseña } = req.body;
    try {
        const nuevoUsuario = yield usuario_1.default.create({
            nombre,
            email,
            contraseña,
        });
        res.json(nuevoUsuario);
        console.log("se creo nuevo usuario", nuevoUsuario);
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.createUsuarios = createUsuarios;
//# sourceMappingURL=usuario_contoller.js.map