const mongoose = require('mongoose')
const Schema = mongoose.Schema


const rappelSchema = new Schema({
    text: String,
    finished: {
        type: Boolean,
        default: false
    }
})


const Rappel = mongoose.model("Rappel", rappelSchema)
module.exports = Rappel;