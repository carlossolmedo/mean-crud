const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const fakeUser = {name: 'carlos', password: 'azerty'};
const secret = 'perrita';

router.post('/login', (req, res) => {
    if(req.body) {
    let name = req.body.name.toLocaleLowerCase();
    let password = req.body.password.toLocaleLowerCase();

    if(name === fakeUser.name && password === fakeUser.password) {
        delete req.body.password;
        const token = jwt.sign({iss: 'http://localhost:3000', role: 'admin'}, secret);

        // res.json({success: true, data: req.body});
        res.json({success: true, token: token});
    } else {
        res.json({success: false, message: 'Identifiants incorrects'});
    }
} else {
    res.json({success: false, message: 'Données manquants'});
}
});

router.post('/register', (req, res) => {
    if(req.body) {
    let name = req.body.name.toLocaleLowerCase();
    let password = req.body.password.toLocaleLowerCase();

    if(name === fakeUser.name && password === fakeUser.password) {
        delete req.body.password;
        const token = jwt.sign({iss: 'http://localhost:3000', role: 'admin'}, secret);

        // res.json({success: true, data: req.body});
        res.json({success: true, token: token});
    } else {
        res.json({success: false, message: 'Identifiants incorrects'});
    }
} else {
    res.json({success: false, message: 'Données manquants'});
}
});

module.exports = router;
