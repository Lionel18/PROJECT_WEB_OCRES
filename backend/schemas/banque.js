const mongoose = require('mongoose')
const Schema = mongoose.Schema


const banqueSchema = new Schema({
    name: {
        type: Date,
        default: new Date()
    },

    uv: Number, // le solde

    pv: {
        type: Number,
        default: 2400
    },

    amt: {
        type: Number,
        default: 1200
    }

})


const Banque = mongoose.model("Banque", banqueSchema)
module.exports = Banque;