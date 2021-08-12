import express from 'express';
import mongoose from 'mongoose';

import Product from '../models/product.js';

const router = express.Router();

export const getProducts = async (req, res) => { 
    try {
        const products = await Product.find();
                
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProduct = async (req, res) => { 
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
  
    const { ownerId, imageUrl, name, categoryId, price, quantity} = req.body;

    const newProduct = new Product({ ownerId, imageUrl, name, categoryId, price, quantity })

    try {
        await newProduct.save();

        res.status(201).json(newProduct );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { ownerId, imageUrl, name, categoryId, price, quantity } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no product with this id: ${id}`);

    const updatedProduct = { ownerId, imageUrl, name, categoryId, price, quantity, _id: id };

    await Product.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.json(updatedProduct);
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no product with this id: ${id}`);

    await Product.findByIdAndRemove(id);

    res.json({ message: "product deleted successfully." });
}


export default router;