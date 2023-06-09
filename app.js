const express = require('express');
const app = express();
const bodyParser = require ('body-parser')
const router = require('./src/routers/web.router');
const database = require('./src/models/database')
const path = require ('path');
const PORT = 5050;

//cau hinh views/ parse body:
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'src/template'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router)

database.connectDB().connect(err=>{
    if (err) console.log(err.message)
    else console.log(`Connect database successfully!`)
})

app.listen(PORT,'localhost',()=>{
    console.log(`Server is running at http://localhost:${PORT}/books`);
})