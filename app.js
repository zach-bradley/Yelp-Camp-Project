var express = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    flash         = require("connect-flash"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride= require("method-override"),
    Campground    = require("./models/campgrounds"),
    User          = require("./models/user"),
    Comment       = require("./models/comment"),
    seedDB        = require("./seeds");

//Requiring Routes 
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");

//seedDB(); //Seed Database
var url = process.env.DATABASEURL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('DB Connected'))
   .catch(err => console.log(Error, err.message));

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());
app.use(methodOverride("_method"));
app.locals.moment = require("moment");

//Passport Config
app.use(require("express-session")({
   secret: "See Me",
   resave: false,
   saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
})

//Express router 
//Uses shorter route declarations inside ""
app.use("/", indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function(){
   console.log("Yelp Camp Started");
});