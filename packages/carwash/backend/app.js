const express = require('express');
const bodyParser = require('body-parser');
// const loginAuth = require('./routes/login-auth');
const googleAuth = require('./routes/auth-routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/images", express.static(path.join('backend/images')));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");
    next();
});
// console.log(loginAuth);
// app.use('/login', loginAuth);
app.use('/auth', googleAuth);
module.exports = app;