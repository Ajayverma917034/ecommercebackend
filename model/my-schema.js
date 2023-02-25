import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    name: String,
    rollNo: String,
});

const My = mongoose.model('my', mySchema);

export default My;