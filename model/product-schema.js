import mongoose from "mongoose";

const productShema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,
    ShippingCharge: String
});

const Product = mongoose.model('product', productShema);   // here first argument is database collecion name and second is schema.

export default Product;