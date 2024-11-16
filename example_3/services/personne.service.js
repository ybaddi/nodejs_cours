const config = require("../config");
const db = require("./db");


async function getPersonnes(){
    const result = await db.query("SELECT * FROM personnes");
    return result;
}

async function addPersonnes(personne){
    console.log(personne);
    const resultat = await db.query(`
        INSERT INTO personnes (nom, prenom)
        VALUES('${personne.nom}','${personne.prenom}')
        `);

        message ="Error";
        if(resultat.affectedRows){
            message = "personne added";
        }
    return {message};
}

async function updatePersonnes(id, personne){
    console.log(personne);

    const fields = Object.keys(personne).filter(key => personne[key]!=undefined);
    console.log(fields);

    const queryFields = fields.map(field=>`${field}=${personne[field]}`).join(',');
    console.log(queryFields);

    const resultat = await db.query(`
        UPDATE personnes 
        SET ${queryFields}
        WHERE id=${id}
        `);

        message ="Error";
        if(resultat.affectedRows){
            message = "personne updated";
        }
    return {message};
}


async function delPersonnes(id){
    console.log(personne);
    const resultat = await db.query(`
        DELETE from personnes where id=${id}
        `);

        message ="Error";
        if(resultat.affectedRows){
            message = "personne deleted";
        }
    return {message};
}

module.exports = {
    getPersonnes,
    addPersonnes,
    delPersonnes,
    updatePersonnes
}