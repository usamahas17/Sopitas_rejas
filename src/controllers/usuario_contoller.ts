import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const geUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json({ usuarios });
        console.log("agarra usuario")
    } catch (error) {
        console.error(error);

    };


};
export const createUsuarios = async (req: Request, res: Response) => {
    const { nombre, email, contraseña } = req.body;
    try {
        const nuevoUsuario = await Usuario.create({
            nombre,
            email,
            contraseña,
        });
        console.log("se creo nuevo usuario", nuevoUsuario);
        res.status(200).json({ nombre: nuevoUsuario.getDataValue('nombre')});

    } catch (error) {
        console.error(error);
    };
};
export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        await usuario?.destroy();
        res.json(usuario);
        console.log("se elimino el usuario", usuario);
    } catch (error) {
        console.error(error);
    }
};
