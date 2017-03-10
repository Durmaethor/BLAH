

var express    = require('express');
var bodyParser = require('body-parser');
var cors       = require('cors');

let port = 5000;
let app = express();

app.use(cors());
app.use(bodyParser.json());

app.route('api/search')
    .get((req, res) => {
        let searchTerm = req.query.term;
        res.json(`The search term ${searchTerm} is invalid`)
})
    .post((req, res) => {
        let searchTerm = req.query.term;
        res.json(`The search term ${searchTerm} is invalid`)

app.listen(port, () => console.log(`Listening on ${port}`))


