import express from 'express';
import {getWatchItems,addToWatchList,getUserWatchList,deleteWatchItem} from '../controllers/watchitems.js';

const router = express.Router();

router.get('/', getWatchItems);
router.post('/:userId',addToWatchList);
router.get('/:userId', getUserWatchList);
router.delete('/:userId', deleteWatchItem);



export default router