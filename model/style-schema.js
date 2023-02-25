import mongoose from "mongoose";

const styleSchema = new mongoose.Schema({
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

const Style = mongoose.model('style', styleSchema);

export default Style;