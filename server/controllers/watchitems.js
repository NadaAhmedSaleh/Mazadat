import express from 'express';
import WatchItem from '../models/watchitem.js';


const router = express.Router();

export const getWatchItems = async (req, res) => { 
    try {
        const WatchItems = await WatchItem.find();
                
        res.status(200).json(WatchItems);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUserWatchList = async (req, res) => { 
    const { userId } = req.params;

    try {
        const items = WatchItem.find({ userId: userId })
        .then(data => {
            res.send(data);
          })
       
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addToWatchList = async (req, res) => {
  

    const {productId } = req.body;
    const { userId } = req.params;
    const newWatchItem = new WatchItem({ productId,userId })

    try {
        await newWatchItem.save();

        res.status(201).json(newWatchItem );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const deleteWatchItem = async (req, res) => {
    const { userId } = req.params;
    const { productId } = req.body;

 
        const items = WatchItem.findOneAndDelete({ userId: userId,productId:productId })
        .then(data => {
            res.send(data);
          })
          . catch (error =>{
            res.status(404).json({ message: error.message });
        })
      
       
        
    
  
}


export default router;