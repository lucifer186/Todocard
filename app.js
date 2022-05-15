const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const path = require('path');


const cardRoute = require('./routes/card');

const port = process.env.PORT || 3000

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(cardRoute)


mongoose.connect( `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.6x1uh.mongodb.net/items?retryWrites=true&w=majority`).then((res) =>{
 app.listen(port)
 console.log('Connected!!');
}).catch(err =>{
    console.log(err);
})

