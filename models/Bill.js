const mongoose = require('mongoose')

const BillSchema = mongoose.Schema({
    customername: {
        type: String,
        required: true,
    },

    phonenumber: {
        type: String,
        required: true,
    },

    paymentmode: {
        type: String,
        required: true,
    },

    totalAmount: {
        type: Number,
        required: true,
    },

    tax: {
        type: Number,
        required: true,
    },

    subTotal: {
        type: Number,
        required: true,
    },

    cartItems: {
        type: Array,
        required: true,
    },

},
    {  timestamps: true }
)

module.exports = mongoose.model("Bill",BillSchema)