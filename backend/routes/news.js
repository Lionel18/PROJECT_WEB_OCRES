var express = require("express");
var router = express.Router();
var News = require('../schemas/news')


// CRUD = Create, Read, Update, Delete




// Read
router.get('/', async (req, res) => {
    // on récupère toutes les news
    let news = await News.find()
    res.json(news)
})


// Create
router.post('/', async (req, res) => {
    try {
        // on créé une nouvelle instance de News
        let news = new News(req.body) // req.body contient toutes les données envoyées depuis postman

        await news.save(); // ça permet d'enregistrer la news dans mongodb
        res.send('La news a bien été enregistreée dans la db').status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// Delete
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id
        await News.deleteOne({ _id: id })
        res.send("La news a bien été supprimée").status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


// Update
router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id
        await News.findOneAndUpdate({ _id: id }, req.body)
        res.send("La news a bien été mise à jour").status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})



module.exports = router;
