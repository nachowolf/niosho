// #############################| NPM PACKAGES |##############################
const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const pg = require('pg');
// ###########################################################################






// ###############################| CUSTOM IMPORTS |#############################
// ##############################################################################






// ##############################| EXPRESS SETUP |##############################
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// #############################################################################






// ##############################| POSTGRES DATABASE SERVER SETUP |##############################

// const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/codex';


// const pool = new Pool({
//     connectionString,
//     ssl: useSSL
// });

// ##############################################################################################






// ##############################| ROUTES |#############################
// #####################################################################






// ##############################| SERVER PORT |##############################
let PORT = process.env.PORT || 3005

app.listen(PORT, function () {
  console.log('App starting on port', PORT)
})

// ###########################################################################