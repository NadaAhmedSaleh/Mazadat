import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    ownerId: String,
    imageUrl: String,
    name: String,
    categoryId: String,
    price: Number, 
    quantity: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Product = mongoose.model('Product', productSchema);

export default Product;