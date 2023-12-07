import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: false
    },
    email : {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: false
    },
    userId : {
        type: String,
        required: true
    },
    email_verified: {
        type: Boolean,
        required: true
    },
    auth_time: {
        type: String,
        required: true
    }
}, {timestamps : true})

export default userSchema