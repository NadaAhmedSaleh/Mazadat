import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Category = mongoose.model('Category', categorySchema);

export default Category;