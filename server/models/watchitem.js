import mongoose from 'mongoose';

const watchitemSchema = mongoose.Schema({
    userId: String,
    productId: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var WatchItem = mongoose.model('WatchItem', watchitemSchema);

export default WatchItem;