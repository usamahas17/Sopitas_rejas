import { Request, Response } from "express";
import cart from "../models/cart";
import usuario from "../models/usuario";

export const getCarrito = async (req: Request, res: Response) => {
    try {
        const carrito = await cart.findAll({
            include: {
                model: usuario,
                attributes: ['nombre' , 'email']
            }
        });
        res.json(carrito);
        console.log("se creo carrito", carrito);
    } catch (error) {
        console.error(error);
    };

};

export const createCarrito = async (req: Request, res: Response) => {
    const { userId } = req.body;
    try {
        const carrito = await cart.create({ userId });
        res.json(carrito);
        console.log("crea carrito", carrito);
    } catch (error) {
        console.error(error);
    };
};

export const deleteCarrito = async (req: Request, res: Response) => {
    const { id } = req.params;
    try{
        const carrrito = await cart.findByPk(id);
        await carrrito?.destroy();
        res.json(carrrito);
        console.log("se elimino el carrito", carrrito); 

    }catch(error){
        console.error(error);
    }
 
};