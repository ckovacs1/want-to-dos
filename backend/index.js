const express = require('express')
const passport = require('passport');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000


//require('./db');
//require('./auth');

// enable sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'secret cookie thang (store this elsewhere!)',
    resave: true,
      saveUninitialized: true
};
app.use(session(sessionOptions));

//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


//static file setup
const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

// passport setup
app.use(passport.initialize());
app.use(passport.session());

// make user data available to all templates
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});




app.get('/', (req, res) => {
    res.send('Hello World! :O')
})


//app.use('/', routes);
//app.use('/list-item', listItem);

//app.listen(process.env.PORT || 3000);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))



//require('./db');
//require('./auth');






