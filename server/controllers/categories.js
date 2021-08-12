import express from 'express';
import mongoose from 'mongoose';

import Category from '../models/category.js';

const router = express.Router();

export const getCategories = async (req, res) => { 
    try {
        const categories = await Category.find();
                
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCategory = async (req, res) => { 
    const { id } = req.params;

    try {
        const category = await Category.findById(id);
        
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCategory = async (req, res) => {
    const {name} = req.body;

    const category = new Category()
    category.name= name


    try {
        await category.save();

        res.status(201).json(category );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`not valid id: ${id}`);

    await Category.findByIdAndRemove(id);

    res.json({ message: "deleted successfully." });
}



export default router;