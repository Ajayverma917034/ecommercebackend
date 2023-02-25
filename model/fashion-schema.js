import mongoose from "mongoose";

const fashionShema = new mongoose.Schema({
    itemName: String,
    item: {
        type: Array,
        require: true,
        unique: true
    }
});

const Fashion = mongoose.model('fashion', fashionShema);   // here first argument is database collecion name and second is schema.

export default Fashion; 