const express = require('express');
const router = express.Router();

const personnesService = require('../services/personne.service')

router.get('/', async (req,res) => {
    console.log('get request');
    res.json(await personnesService.getPersonnes());
});

router.post('/', async (req,res) => {
console.log('post request');
res.json(await personnesService.addPersonnes(req.body));
});

router.put('/:id',async (req,res) => {
    console.log('put request');
    res.json(await personnesService.updatePersonnes(req.params.id,req.body));
});

router.delete('/:id',async (req,res) => {
    console.log('del request');
    res.json(await personnesService.delPersonnes(req.params.id));
});



module.exports = router;