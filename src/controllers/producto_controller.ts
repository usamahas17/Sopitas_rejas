import { Request, Response } from "express";
import product from "../models/product";
import { where } from "sequelize";

//obtener producto uno por uno
export const getPorductosById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const producto = await product.findByPk(id)
        res.json(producto);
        console.log("se reciber un producto ", producto)
    } catch (error) {
        console.error(error);
    };

};

//recogemos todo los productos 
export const getProductos = async (req: Request, res: Response) => {
    const productos = await product.findAll();
    res.json(productos);
    console.log("se recibe todo los productos", productos);
}
// crear producto
export const createProducto = async (req: Request, res: Response) => {
    const { nombre, descripcion, precio, imagen_url, stock } = req.body;
    try {
        const nuevo = await product.create({
            nombre,
            descripcion,
            precio,
            imagen_url,
            stock,
        });
        res.json(nuevo);
        console.log("vamos bien", nuevo);
    } catch (error) {
        console.error(error);
    };
};

//actualizar producto
export const updateProducto = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {nombre , descripcion , precio , imagen_url , stock} = req.body;
    try{
        const producto = await product.findByPk(id);
        await producto?.update({
            nombre,
            descripcion,
            precio,
            imagen_url,
            stock,

        });
        res.json(producto)
        console.log("se cambio el producto" , producto);
        

    }catch(error){
        console.error(error);
    }
};

//eliminar producto 
export const deleteProducto = async (req: Request, res: Response) => {
  const {id} = req.params;
  try{
    const producto = await product.findByPk(id);
    await producto?.destroy();
    res.json(producto);
    console.log("se elimno el producto", producto);

  }catch(error){
    console.error(error);
  };
};