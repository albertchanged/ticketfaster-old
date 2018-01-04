const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const ticketmaster = require('../helpers/ticketmaster.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/events', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body.genre);
  ticketmaster.getEventsByGenre(req.body.genre, req.body.city, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      // if (data.length > 0) {
        res.status(200).json(data);
      // }
    }
  });
});
 
app.get('/', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(process.env.PORT || port, function() {
  console.log(`listening on port ${port}`);
});

