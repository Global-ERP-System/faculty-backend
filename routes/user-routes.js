const express = require('express'),
router = express.router();
const userController = require('../controllers/user-controllers'),
User = require('../models/userSchema');



// Passport Configuration
router.use(require('express-session')({
    secret:"Damn it's nothing",
    resave : false,
    saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
router.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    next();
});

// Routes
router.post('/signUp', userController.userSignUpController);

router.get('/login',userController.userLoginController);


module.exports =router;