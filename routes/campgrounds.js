var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");
var middleware = require("../middleware");

//Index Route - Show all campgrounds

router.get("/", function(req, res){
   //Get all campgrounds from DB
   Campground.find({}, function(err, allCampgrounds){
      if(err) {
         console.log(err);
      } else {
         res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
      }
   });
   //res.render("campgrounds", {campgrounds: campgrounds});
});


//New route
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("campgrounds/new");
});


//Create route
router.post("/", middleware.isLoggedIn, function(req, res){
   var name = req.body.name;
   var price = req.body.price;
   var image = req.body.image;
   var desc = req.body.description;
   var author = {
      id: req.user._id,
      username: req.user.username
   }
   var newCampground = {name: name, price: price, image: image, description: desc, author: author};
   //campgrounds.push(newCampground);
   //Create a new campgroud and save to DB
   Campground.create(newCampground, function(err, newlyCreated){
      if(err) {
         console.log(err);
      } else {
          res.redirect("/campgrounds");
      }
   });
});


//Show Route
router.get("/:id", function(req, res){
   //Find campground with provided ID
   Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
      if(err || !foundCampground) {
         req.flash("error", "Campground not found");
         res.redirect("back");
      } else {
         res.render("campgrounds/show", {campground: foundCampground});
      }
   });
   req.params.id
});

//Edit campground route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
   // is user logged in 
   Campground.findById(req.params.id, function(err, foundCampground) {
      if(err) {
         console.log(err)
      }
      res.render("campgrounds/edit", {campground: foundCampground});
   });
});

//Update campground route
router.put("/:id", function(req, res){
   //find and update the correct campground 
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
      if(err) {
         res.redirect("/campgrounds");
      } else {
         res.redirect("/campgrounds/"+ req.params.id);
      }
   })
   //redirect show page
});

//Destroy Campground Route
router.delete("/:id", function(req, res){
   Campground.findByIdAndRemove(req.params.id, function(err){
      if(err) {
         res.redirect("/campgrounds");
      } else {
         res.redirect("/campgrounds");
      }
   });
});

module.exports = router;