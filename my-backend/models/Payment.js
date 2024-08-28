const mongoose = require('mongoose')

//? Schema 
const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    refrence: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending',
        required: true
    },
    subscriptionPlan: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    },
    monthlyRequestCount: {
        type: Number,
        required: true
    },
}, 
{timestamps: true})


//! Compiling to form the model
const Payment = mongoose.mongo('Payment', userSchema);

module.exports = Payment;