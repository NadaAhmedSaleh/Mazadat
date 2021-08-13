import express from 'express';
import { getCategories, createCategory, getCategory, deleteCategory} from '../controllers/categories.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/',createCategory);
router.get('/:id', getCategory);
router.delete('/:id', deleteCategory);

export default router;