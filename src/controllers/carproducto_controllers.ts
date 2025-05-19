import { Request, Response } from "express";
import CartProduct from "../models/CartProducts";
import { json } from "sequelize";
import cart from "../models/cart";

export const agregarProductoalCarrito = async (req: Request, res: Response) => {
    const { cartId, productoId, cantidad } = req.body;
    try {
        const existent = await CartProduct.findOne({where: {cartId , productoId }}) as any;
        if(existent){
            existent.cantidad += cantidad;
            await existent.save();
            res.json(existent);
            console.log("se actualizo el carrito " , existent);
        }else{
            const nuevocarro = await CartProduct.create({
                cartId,
                productoId,
                cantidad
            })
            res.json(nuevocarro);
            console.log("nuevo carro", nuevocarro);
        }
    } catch (error) {
        console.error(error);
    };
};

export const eliminarProductodelCarrito = async (req: Request, res: Response) => {
    const { cartId, productoId } = req.body;
    try {
        const item = await CartProduct.findOne({ where: { cartId, productoId } });
        await item?.destroy();
        res.json(item);
        console.log("se elimino el carrito", item);
    } catch (error) {
        console.error(error);
    }

};