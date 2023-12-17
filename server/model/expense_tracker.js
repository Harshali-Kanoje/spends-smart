import { Schema,model } from "mongoose";

const expenceTrackerSchema = new Schema({
    amount : {
        type : Number,
        required : true
    },
    type : {
        type : String,
        enum : ['creadit','debit'],
        required : true
    },
    category : {
        type : String,
        enum : ['education','shopping','travel','rent','entertainment','food','salary','other'],
        default : 'other'
    },
    description : {
        type : String,
    },
},{
    timestamps : true
})

const Transaction = model('Transaction',expenceTrackerSchema)
export default Transaction;