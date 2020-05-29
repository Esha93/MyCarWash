// const app = require("./backend/app");
// const debug = require("debug")("node-react");
// const http = require("http");

// const normalizePort = val => {
//   var port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// };

// const onError = error => {
//   if (error.syscall !== "listen") {
//     throw error;
//   }
//   const bind = typeof port === "string" ? "pipe " + port : "port " + port;
//   switch (error.code) {
//     case "EACCES":
//       console.error(bind + " requires elevated privileges");
//       process.exit(1);
//       break;
//     case "EADDRINUSE":
//       console.error(bind + " is already in use");
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// };

// const onListening = () => {
//   const addr = server.address();
//   const bind = typeof port === "string" ? "pipe " + port : "port " + port;
//   debug("Listening on " + bind);
// };

// const port = normalizePort(process.env.PORT || "8000");
// app.set("port", port);
// // console.log('server');
// const server = http.createServer(app);
// server.on("error", onError);
// server.on("listening", onListening);
// server.listen(port);

//INITIAL
// const http = require('http');
// const app = require('./backend/app');

// const port = process.env.PORT || 3000;

// app.set('port', port);
// const server = http.createServer(app);
// server.listen(port);


const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./backend/routes/auth-routes');
const profileRoutes = require('./backend/routes/profile-routes');
const passportSetup = require('./backend/config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./backend/config/keys');

const app = express();

// set view engine
// app.set('view engine', 'ejs');

// set up session cookies
// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000
//     // keys: [keys.session.cookieKey]
// }));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);

// create home route
// app.get('/', (req, res) => {
//     res.send('success', { user: req.user });
// });

app.listen(8000, () => {
    console.log('app now listening for requests on port 8000');
});