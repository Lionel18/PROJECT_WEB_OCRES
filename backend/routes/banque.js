var express = require("express");
var router = express.Router();
var Banque = require('../schemas/banque')


// CRUD = Create, Read, Update, Delete




// Read
router.get('/', async (req, res) => {
    let historiques = await Banque.find().sort({ name: 1 })
    res.json(historiques)
})


// Create
router.post('/', async (req, res) => {
    try {
        let historique = new Banque(req.body) // req.body contient toutes les données envoyées depuis postman

        await historique.save();
        res.send('Le solde a bien été enregistré dans la db').status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// Delete
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id
        await Banque.deleteOne({ _id: id })
        res.send("L'historique a bien été supprimé").status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


// Update
router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id
        await Banque.findOneAndUpdate({ _id: id }, req.body)
        res.send("L'historique a bien été mis à jour").status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})



module.exports = router;
