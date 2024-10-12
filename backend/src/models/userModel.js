import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true},
})

const userModel = mongoose.model('User', userSchema);

export default userModel;