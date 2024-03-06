const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    rating: {
        type: Object
    }
},{
    timestamps: true
});

module.exports=mongoose.model('Product',productSchema);