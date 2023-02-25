import mongoose from "mongoose";

const productShema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    title: String,
    price: Object,
    quantity: Number,
    description: Object,
    ShippingCharge: String
});

const Like = mongoose.model('like', productShema);   // here first argument is database collecion name and second is schema.

export default Like;