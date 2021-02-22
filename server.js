var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 5003;
var db = require('./database/db');
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
var Users = require('./routes/Users');
/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/
app.use('/users', Users);
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
