import express, { Application } from "express";
import cors from "cors";
import bodyparse from "body-parser";
import db from "./db/conection";
import rutausuario from "./routes/usuario_ruta";
import rutaproducto from "./routes/producto_ruta";
import rutacarrito from "./routes/cart_ruta";
import rutacartproducto from "./routes/cartproducto_ruta";
import rutatrankbank from "./routes/transbank_ruta";

class Server {
    private app: Application;
    private port: string;
    private apipathTransbank = {
        pago: "/api/pago"
    }
    private apipathCartProducto = {
        cartproducto: "/api/cartproducto"
    }
    private apipathCarrito = {
        carrito: "/api/carrito"
    }

    private apipathProducto = {
        producto: "/api/producto"
    }
    private apipathUsuario = {
        usuario: "/api/usuarios"
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8080";
        this.middleware();
        this.dbConnection();
        this.routes();
    };

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static('estore-master'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log("se escucha en el puerto " + this.port);
        })
    };
    routes() {
        this.app.use(this.apipathUsuario.usuario, rutausuario);
        this.app.use(this.apipathProducto.producto, rutaproducto);
        this.app.use(this.apipathCarrito.carrito, rutacarrito)
        this.app.use(this.apipathCartProducto.cartproducto, rutacartproducto);
        this.app.use(this.apipathTransbank.pago, rutatrankbank);
    };
    async dbConnection() {
        try {
            await db.authenticate();
            console.log("conectado");
            await db.sync({ alter: true });
            console.log("ingresando")
        } catch (error: any) {
            throw new Error(error);
        }
    };


};
export default Server;