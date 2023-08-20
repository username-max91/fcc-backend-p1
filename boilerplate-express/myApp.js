const bGround = require('fcc-express-bground');
const logger = require('./mw/logger-mw');
const dateMW = require('./mw/date-mw');
const bodyParser = require('body-parser');
require('dotenv').config();
let express = require('express');
let app = express();
//using middleware and static data
app.use([logger, express.static('./public'), bodyParser.urlencoded({extended: false})])

//mounted MW example
app.get('/now', dateMW, (req, res) => {
    console.log(req.time);
    res.json({
        time: req.time
    });
}
);
//echo test
app.get('/:word/echo', (req, res) => {
    res.json({
        echo: req.params.word
    })
})
//getting query data from user + POST route
app.route('/name').get((req, res) => {
    console.log(req.query)
    let {first, last} = req.query
    res.json({ name: `${first} ${last}`})
}).post((req, res) => {
    console.log(req.body)
    let {first, last} = req.body
    res.json({
        name: `${first} ${last}`
    })
})
//sending file as a response
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})
//applying .env file params
app.get('/json', (req,res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({
            message: "hello json".toUpperCase()
        })
    } else {
        res.json({
            message: "Hello json"
        })
    }
})



































 module.exports = app;
