import { Schema ,model } from "mongoose";

const UserSchma = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true,
        unique : true
    },
    address : {
        type : String
    }
})
const User = model('User', UserSchma)

export default User;