import express from 'express';
import Account from '../models/account';

const router = express.Router();
/*
    ACCOUNT SIGNIN: POST /api/account/signin
    BODY SAMPLE: { "username": "test", "password": "test" }
    ERROR CODES:
        1: LOGIN FAILED
*/
router.post('/signin', (req, res) => {
    // if(typeof req.body.password !== "string") {
    //     return res.status(401).json({
    //         error: "LOGIN FAILED",
    //         code: 1
    //     });
    // }

    // FIND THE USER BY USERNAME
    Account.findOne({ username: req.body.username, password: req.body.password}, (err, account) => {
        if(err) throw err;

        // CHECK ACCOUNT EXISTANCY
        if(!account) {
            return res.status(401).json({
                error: "LOGIN FAILED",
                code: 1
            });
        }

        // CHECK WHETHER THE PASSWORD IS VALID
        // if(!account.validateHash(req.body.password)) {
        //     return res.status(401).json({
        //         error: "LOGIN FAILED",
        //         code: 1
        //     });
        // }


        // ALTER SESSION
        let session = req.session;
        session.loginInfo = {
            _id: account._id,
            username: account.username
        };

        // RETURN SUCCESS
        console.log("API LOGIN SUCCESS");
        return res.json({
          success: true
        });
    });
});

/*
    GET CURRENT USER INFO GET /api/account/getInfo
*/
router.get('/getinfo', (req, res) => {
    if(typeof req.session.loginInfo === "undefined") {
        return res.status(401).json({
            error: 1
        });
    }

    res.json({ info: req.session.loginInfo });
});

/*
    LOGOUT: POST /api/account/logout
*/
router.post('/logout', (req, res) => {
    req.session.destroy(err => { if(err) throw err; });
    return res.json({ sucess: true });
});


/*
    SEARCH USER: GET /api/account/search/:username
*/
router.get('/search/:username', (req, res) => {
    // SEARCH USERNAMES THAT STARTS WITH GIVEN KEYWORD USING REGEX
    // var re = new RegExp('^' + req.params.username);
    console.log('get search user');
    // Account.find({username: {$regex: re}}, {_id: false, username: true})
    Account.find({username: new RegExp(req.params.username, 'i')})
    .limit(5)
    .sort({username: 1})
    .exec((err, accounts) => {
      if(err) throw err;
      res.json(accounts);
    });
});

// EMPTY SEARCH REQUEST: GET /api/account/search
router.get('/search', (req, res) => {
  console.log('get user list');
  Account.find()
  .sort({_id: 1})
  .exec((err, accounts) => {
    if(err) throw err;
    res.json(accounts);
  });
});

router.post('/addmember', (req, res) => {
    // CHECK USERNAME FORMAT
    let usernameRegex = /^[a-z0-9]+$/;
    console.log(`username: ${req.body.username}
                firstname: ${req.body.firstname}
                lastname: ${req.body.lastname}
                password: ${req.body.password}
                email: ${req.body.email}
                permission: ${req.body.permission}`);
    if(!usernameRegex.test(req.body.username)) {
        return res.status(400).json({
            error: "BAD USERNAME",
            code: 1
        });
    }

    // CHECK PASS LENGTH
    if(req.body.password.length < 4 || typeof req.body.password !== "string") {
        return res.status(400).json({
            error: "BAD PASSWORD",
            code: 2
        });
    }

    // CHECK USER EXISTANCE
    Account.findOne({ username: req.body.username }, (err, exists) => {
        if (err) throw err;
        if(exists){
            return res.status(409).json({
                error: "USERNAME EXISTS",
                code: 3
            });
        }

        // CREATE ACCOUNT
        let account = new Account({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            permission: req.body.permission
        });

        // SAVE IN THE DATABASE
        account.save( err => {
            if(err) throw err;
            return res.json({ success: true });
        });

    });
});

export default router;
