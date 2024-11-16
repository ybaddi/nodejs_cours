const personnesService = require('../services/personne.service')

async function getPersonne(){
    return await personnesService.getPersonnes();
}

async function addPersonne(personne) {
    return await personnesService.addPersonnes(personne);
};

async function updatePersonne(id, personne){
    return await personnesService.updatePersonnes(id, personne);
};

async function  deletePersonne(id){
    return await personnesService.delPersonnes(id);
};

module.exports ={
addPersonne,
getPersonne,
updatePersonne,
deletePersonne
}