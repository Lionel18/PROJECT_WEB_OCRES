var express = require("express");
var router = express.Router();
var Rappel = require('../schemas/rappel')


// CRUD = Create, Read, Update, Delete




// Read
router.get('/', async (req, res) => {
    // on récupère tous les rappels
    let rappels = await Rappel.find()
    res.json(rappels)
})


// Create
router.post('/', async (req, res) => {
    try {
        // on créé une nouvelle instance de Rappel
        let rappel = new Rappel(req.body) // req.body contient toutes les données envoyées depuis postman

        await rappel.save(); // ça permet d'enregistrer le rappel dans mongodb
        res.send('Le rappel a bien été enregistré dans la db').status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// Delete
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id
        await Rappel.deleteOne({ _id: id })
        res.send("Le rappel a bien été supprimé").status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


// Update
router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id
        await Rappel.findOneAndUpdate({ _id: id }, req.body)
        res.send("Le rappel a bien été mis à jour").status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})



module.exports = router;
