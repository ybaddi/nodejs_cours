const express = require('express');
const app = express();

const personnesRouter = require('./routes/personne.route');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/personnes', personnesRouter);


app.all('/*', (req,res) => {
    res.status(404)
    .send('Not Found');
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})