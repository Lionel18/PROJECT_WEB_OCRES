const mongoose = require('mongoose')
const Schema = mongoose.Schema


const newsSchema = new Schema({
    nom: String,
    photo: String,
    actualite: String,
    background: String
})


const News = mongoose.model("News", newsSchema)
module.exports = News;