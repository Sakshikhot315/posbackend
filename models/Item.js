const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
    {  timestamps: true}
)

module.exports = mongoose.model("Product",ItemSchema)