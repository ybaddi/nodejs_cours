const express = require('express');
const router = express.Router();

const personneController = require('../controllers/personne.controller')


router.get('/', async (req,res) => {
    console.log('get request');
    res.json(await personneController.getPersonne());
});

router.post('/', async (req,res) => {
console.log('post request');
res.json(await personneController.addPersonne(req.body));
});

router.put('/:id',async (req,res) => {
    console.log('put request');
    res.json(await personneController.updatePersonne(req.params.id,req.body));
});

router.delete('/:id',async (req,res) => {
    console.log('del request');
    res.json(await personneController.deletePersonne(req.params.id));
});



module.exports = router;