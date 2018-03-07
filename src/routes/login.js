const express = require('express');
const router = express.Router();
const auth = express.Router();
const mongojs = require('mongojs');
const db = mongojs('house', ['users']);


// GET All Users
router.get('/login', (req, res, next) => {
    db.users.find((err, users) => {
        if (err) return next(err);
        res.json(users);
    });
});

// Single User
router.get('/login/:id', (req, res, next) => {
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

// Search User
router.get('/search/:term/:place?', (req, rest) => {
    const term = req.params.term.toLowerCase().trim();
    let place = req.params.place;
    let logins = getLogins
});

// Add a User
router.post('/login', (req, res, next) => {
    const user = req.body;
    if(!user.name || !(user.isDone + '')) {
        res.status(400).json({
            'error': 'Bad Data'
        });
    } else {
        db.users.save(user, (err, user) => {
            if (err) return next(err);
            res.json(user);
        });
    }
});

// Delete User
router.delete('/login/:id', (req, res, next) => {
    db.users.remove({_id: mongojs.ObjectId(req.params.id)}, (err, user) => {
        if(err){ res.send(err); }
        res.json(user);
    });
});

// Update User
router.put('/login/:id', (req, res, next) => {
    const user = req.body;
    let updateUser = {};

    if(user.isDone) {
        updateUser.isDone = user.isDone;
    }
    if(user.name) {
        updateUser.name = user.name;
    }
    if(!updateUser) {
        res.status(400);
        res.json({'error': 'bad request'});
    } else {
        db.users.update({_id: mongojs.ObjectId(req.params.id)}, updateUser, {}, (err, user) => {
            if (err) return next(err);
            res.json(user);
        });
    }
});

module.exports = router;
