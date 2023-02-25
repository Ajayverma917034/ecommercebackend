import mongoose from "mongoose";

const fashionShema1 = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    shortTitle: String,
    price: Object,
    quantity: Number,
    description: Object,
    discount: String,
    tagline: String,
    ShippingCharge: String

});

const Fashion1 = mongoose.model('fashion1', fashionShema1);   // here first argument is database collecion name and second is schema.

export default Fashion1; 