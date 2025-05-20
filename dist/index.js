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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const conection_1 = __importDefault(require("./db/conection"));
const usuario_ruta_1 = __importDefault(require("./routes/usuario_ruta"));
const producto_ruta_1 = __importDefault(require("./routes/producto_ruta"));
const cart_ruta_1 = __importDefault(require("./routes/cart_ruta"));
const cartproducto_ruta_1 = __importDefault(require("./routes/cartproducto_ruta"));
const transbank_ruta_1 = __importDefault(require("./routes/transbank_ruta"));
class Server {
    constructor() {
        this.apipathTransbank = {
            pago: "/api/pago"
        };
        this.apipathCartProducto = {
            cartproducto: "/api/cartproducto"
        };
        this.apipathCarrito = {
            carrito: "/api/carrito"
        };
        this.apipathProducto = {
            producto: "/api/producto"
        };
        this.apipathUsuario = {
            usuario: "/api/usuarios"
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8080";
        this.middleware();
        this.dbConnection();
        this.routes();
    }
    ;
    middleware() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.static('estore-master'));
    }
    ;
    listen() {
        this.app.listen(this.port, () => {
            console.log("se escucha en el puerto " + this.port);
        });
    }
    ;
    routes() {
        this.app.use(this.apipathUsuario.usuario, usuario_ruta_1.default);
        this.app.use(this.apipathProducto.producto, producto_ruta_1.default);
        this.app.use(this.apipathCarrito.carrito, cart_ruta_1.default);
        this.app.use(this.apipathCartProducto.cartproducto, cartproducto_ruta_1.default);
        this.app.use(this.apipathTransbank.pago, transbank_ruta_1.default);
    }
    ;
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conection_1.default.authenticate();
                console.log("conectado");
                yield conection_1.default.sync({ alter: true });
                console.log("ingresando");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=index.js.map