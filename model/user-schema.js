import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        minLength: 2,
        maxLength: 20
    },
    username: {
        type: String,
        require: true,
        trim: true,
        minLength: 5,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        minLength: 10,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    phone: {
        type: String,
        require: true
    },
    cart: {
        cartItem: [],
    }
});

const userSchemaValue = mongoose.model('userSchemaValue', UserSchema);
export default userSchemaValue;