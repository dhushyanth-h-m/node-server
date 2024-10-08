import { error } from "console"
import prisma from "../db"

export const getProducts = async (req, res) => { //Get all 
    console.log("User ID from request:", req.user.id); // Log the user ID

    const user = await prisma.user.findUnique({
        where: {
            username: req.user.id
        },
        include: {
            products: true
        }
    });

    console.log("User found:", user); // Log the user object

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({data: user.products})
}

export const getOneProduct = async (req, res) => { //Get one
    const id = req.params.id
    
    const product = await prisma.product.findUnique({
        where: {
            id,
            belongsToId: req.user.id
        }
    })

    res.json({data: product})
}


export const createProduct = async (req, res, next) => {
    try{
        const product = await prisma.product.create({
            data: {
                name: req.body.name,
                belongsToId: req.user.id
            }
        })
    
        res.json({data: product})
    } catch (e) {
        next(e)
    }
}


export const updateProduct = async (req, res) => {
    const updated = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.params.id, 
                belongsToId: req.user.id
            }
        },
        data: {
            name: req.body.name
        }
    })

    res.json({data: updated})
}


export const deleteProduct = async (req, res) => {
    const deleted = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id, 
                belongsToId: req.user.id
            }
        }
    })

    res.json({data: deleted})
}