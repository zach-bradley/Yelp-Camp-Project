var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//Root Route
router.get("/", function(req, res){
   res.render("landing");
});



//Auth Routes

//Show register Form
router.get("/register", function(req, res){
   res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
   var newUser = new User({username: req.body.username});
   User.register(newUser , req.body.password, function(err, user){
      if(err) {
         //Passport will supply an error with err.message
         req.flash("error", err.message);
         return res.render("register")
      }
      passport.authenticate("local")(req, res, function(){
         req.slash("success", "welcome to YelpCamp" + user.username);
         res.redirect("/campgrounds");
      });
   });
});

//Show login
router.get("/login", function(req, res){
   res.render("login");
});

//Handling login logic
router.post("/login", passport.authenticate("local", 
   {
      successRedirect: "/campgrounds",
      failureRedirect: "/login"
      
   }), function(req, res){
   
});

//Logout route
router.get("/logout", function(req, res){
   req.logout();
   req.flash("sucess", "Logged you out!");
   res.redirect("/campgrounds");
});

module.exports = router;