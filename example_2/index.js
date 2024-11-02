// const http = require('http')
const express = require('express')
const app = express();

// const server = http.createServer((req, res)=>{
//     res.write('hello from ENSAK');
//     res.end
// });
const middlewaer = (req, res, next)=>{
    console.log("this is a first midelwere");
    console.log("this is a midelwere to the reuest url ", req.url);
    next();
}

const middlewaer_2 = (req, res, next)=>{
    console.log("this is a second midelwere");
    console.log("this is a midelwere to the reuest url ", req.url);
    next();
}


const middlewaer_3 = (req, res, next)=>{
    console.log("this is a third midelwere");
    console.log("this is a midelwere to the reuest url ", req.url);
    next();
}


app.get('/', (req, res)=>{
        res.write('hello from ENSAK');
        res.write('hello from ENSAK');
        res.end('hello end');
    });



     

app.get('/home', (req, res)=>{
    console.log("this is a home request");
        res.write('hello from ENSAK');
        res.write('hello from ENSAK');
        res.end('hello end');
        // next();
    });

    app.get('/home_2', (req, res)=>{
        console.log("this is a home_2 request");
            res.send('hello from ENSAK home 2');
            // res.write('hello from ENSAK');
            // res.end('hello end');
            // call();
        });


        app.get('/*', (req, res)=>{
            console.log("this is a * request");
            res.send('hello from ENSAK *');
            // res.write('hello from ENSAK');
            // res.end('hello end');
            // next();
        });


    app.use([middlewaer, middlewaer_2, middlewaer_3]);
    app.listen(4000, () => {
    console.log("server lanched on port 4000");
});