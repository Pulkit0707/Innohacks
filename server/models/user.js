const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    user_products: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Product'
        }
]
},{
    timestamps: true
});

module.exports=mongoose.model('User',userSchema);