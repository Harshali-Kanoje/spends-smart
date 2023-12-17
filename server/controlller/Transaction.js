import Transaction from "../model/expense_tracker.js";
import { responder } from "../utils.js";
import User from './../model/User.js'

const postApiTransaction = async (req, res) => {

    const { amount, type, category, description } = req.body;
    try {
        const transaction = new Transaction({
            amount,
            type,
            category,
            description
        })

        const saveTransaction = await transaction.save();

        return responder({res,success : true, message : "Transaction Added Successfully", data : saveTransaction})
        // return res.json({
        //     success: true,
        //     data: saveTransaction
        // })
    }
    catch (err) {

        return responder({res,success : false, message : err.message})
        // return res.json({
        //     success: false,
        //     transaction: err.message
        // })
    }
}

const getApiTransaction = async (req, res) => {

    const allTransaction = await Transaction.find();

    return responder({res,success:true, data: allTransaction })
    // res.json({
    //     success: true,
    //     data: allTransaction
    // })
}

const postAppSignup = async (req , res) => {

    const { name, email, password, mobile , address } = req.body;

    try{
    const user = new User ({
        name,
        email,
        password,
        mobile,
        address
    })

    const saveduser = await user.save()

    return responder({res,success:true, data: saveduser, message: "Successfully Signup" })
}
catch(e){
    return responder({res,success:false, message: e.message })
}
}

const postAppLogin = async(req , res) => {
    const {email , password} = req.body;

    const user = await User.findOne({
        email,
        password
    })

    if(user)
    {
        return responder({res,success:true,data: user, message: "Login Successfully" })  
    }else
    {
        return responder({res,success:false, message: "Invalid Credentials"})
    }
}

export {postApiTransaction , getApiTransaction ,postAppSignup , postAppLogin}