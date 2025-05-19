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
exports.deleteProducto = exports.updateProducto = exports.createProducto = exports.getProductos = void 0;
const product_1 = __importDefault(require("../models/product"));
//obtener producto 
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield product_1.default.findAll();
        res.json(productos);
        console.log("se recibe", productos);
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.getProductos = getProductos;
// crear producto
const createProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, descripcion, precio, imagen_url, stock } = req.body;
    try {
        const nuevo = product_1.default.create({
            nombre,
            descripcion,
            precio,
            imagen_url,
            stock,
        });
        res.json(nuevo);
        console.log("vamos bien", nuevo);
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.createProducto = createProducto;
//actualizar producto
const updateProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, descripcion, precio, imagen_url, stock } = req.body;
    try {
        const producto = yield product_1.default.findByPk(id);
        if (!producto)
            return res.json({ mensaje: 'producto no encontrado' });
        yield producto.update({
            nombre,
            descripcion,
            precio,
            imagen_url,
            stock,
        });
        res.json(producto);
        console.log("se actualizo", producto);
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.updateProducto = updateProducto;
//eliminar producto 
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const producto = yield product_1.default.findByPk(id);
        if (!producto)
            return res.json({ mensaje: "producto no encontrado" });
        yield product_1.default.destroy();
        res.json(producto);
        console.log("producto eliminado", producto);
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.deleteProducto = deleteProducto;
//# sourceMappingURL=producto_controller.js.map