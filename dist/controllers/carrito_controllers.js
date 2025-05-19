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
exports.deleteCarrito = exports.createCarrito = exports.getCarrito = void 0;
const cart_1 = __importDefault(require("../models/cart"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getCarrito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carrito = yield cart_1.default.findAll({
            include: {
                model: usuario_1.default,
                attributes: ['nombre', 'email']
            }
        });
        res.json(carrito);
        console.log("se creo carrito", carrito);
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.getCarrito = getCarrito;
const createCarrito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    try {
        const carrito = yield cart_1.default.create({ userId });
        res.json(carrito);
        console.log("crea carrito", carrito);
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.createCarrito = createCarrito;
const deleteCarrito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const carrrito = yield cart_1.default.findByPk(id);
        yield (carrrito === null || carrrito === void 0 ? void 0 : carrrito.destroy());
        res.json(carrrito);
        console.log("se elimino el carrito", carrrito);
    }
    catch (error) {
        console.error(error);
    }
});
exports.deleteCarrito = deleteCarrito;
//# sourceMappingURL=carrito_controllers.js.map