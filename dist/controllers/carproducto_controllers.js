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
exports.eliminarProductodelCarrito = exports.agregarProductoalCarrito = void 0;
const CartProducts_1 = __importDefault(require("../models/CartProducts"));
const agregarProductoalCarrito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cartId, productoId, cantidad } = req.body;
    try {
        const existent = yield CartProducts_1.default.findOne({ where: { cartId, productoId } });
        if (existent) {
            existent.cantidad += cantidad;
            yield existent.save();
            res.json(existent);
            console.log("se actualizo el carrito ", existent);
        }
        else {
            const nuevocarro = yield CartProducts_1.default.create({
                cartId,
                productoId,
                cantidad
            });
            res.json(nuevocarro);
            console.log("nuevo carro", nuevocarro);
        }
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.agregarProductoalCarrito = agregarProductoalCarrito;
const eliminarProductodelCarrito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cartId, productoId } = req.body;
    try {
        const item = yield CartProducts_1.default.findOne({ where: { cartId, productoId } });
        yield (item === null || item === void 0 ? void 0 : item.destroy());
        res.json(item);
        console.log("se elimino el carrito", item);
    }
    catch (error) {
        console.error(error);
    }
});
exports.eliminarProductodelCarrito = eliminarProductodelCarrito;
//# sourceMappingURL=carproducto_controllers.js.map