// const express = require('express');
// const users = require('../models/valid-users');

// const router = express.Router();

// router.post('/auth', (req, res, next) => {
//     // console.log(users);
//     let user = users.filter((user) => {
//         // console.log(req.body.email, user.name, req.body.password, user.password);
//         return user.email == req.body.email && user.password == req.body.password;
//     });
//     console.log(user);
//     if(user.length) {
//         res.status(200).json({messages: 'successful'});
//     } else {
//         res.status(401).json({messages: 'unsuccessful'});
//     }  
// });

// router.post('/adduser', (req, res, next) => {
//     // console.log(users);
//     let user = users.filter((user) => {
//         // console.log(req.body.email, user.name, req.body.password, user.password);
//         return user.email == req.body.email && user.password == req.body.password;
//     });
//     console.log(user);
//     if(user.length) {
//         res.status(200).json({messages: 'User Already exists'});
//     } else {
//         users.push({email: req.body.email, password: req.body.password})
//         res.status(401).json({messages: 'unsuccessful'});
//     }
// })

// module.exports = router;


const router = require('express').Router();
const passport = require('passport');

// auth login
// router.get('/login', (req, res) => {
//     res.render('login', { user: req.user });
// });

// // auth logout
// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
    // res.send(req.user);
    // console.log('req', JSON.stringify(req))
    console.log('res', res);
    res.send('success');
    // res.json({message: res});
});

module.exports = router;