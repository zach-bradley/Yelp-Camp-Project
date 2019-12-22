var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment")

var data = [
    {
        name: "Top Crossing", 
        image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f8dee688d0e8cbb8c6c99de58f22a7dc",
        description: "Bacon ipsum dolor amet ground round meatball salami pork ball tip jowl. Frankfurter turducken shoulder sirloin beef ribs spare ribs andouille pork brisket capicola prosciutto corned beef. Ground round landjaeger ham bacon ball tip short loin turkey biltong shank burgdoggen. Tenderloin doner picanha tri-tip biltong sausage venison beef buffalo filet mignon pancetta pork belly tail. Alcatra burgdoggen capicola pork ribeye. Meatloaf pork loin beef shank frankfurter. Short loin beef filet mignon, hamburger doner capicola venison ball tip."
    },
    
    {
        name: "Mountain Lake", 
        image: "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aab214af505877ba2f060ec9fee12cb9",
        description: "Bacon ipsum dolor amet ground round meatball salami pork ball tip jowl. Frankfurter turducken shoulder sirloin beef ribs spare ribs andouille pork brisket capicola prosciutto corned beef. Ground round landjaeger ham bacon ball tip short loin turkey biltong shank burgdoggen. Tenderloin doner picanha tri-tip biltong sausage venison beef buffalo filet mignon pancetta pork belly tail. Alcatra burgdoggen capicola pork ribeye. Meatloaf pork loin beef shank frankfurter. Short loin beef filet mignon, hamburger doner capicola venison ball tip."
    },
    
    {
        name: "Lake Cabin", 
        image: "https://images.unsplash.com/photo-1540652430157-344a04652e3e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f983796d64e4822eca72dbf97389ff1",
        description: "Bacon ipsum dolor amet ground round meatball salami pork ball tip jowl. Frankfurter turducken shoulder sirloin beef ribs spare ribs andouille pork brisket capicola prosciutto corned beef. Ground round landjaeger ham bacon ball tip short loin turkey biltong shank burgdoggen. Tenderloin doner picanha tri-tip biltong sausage venison beef buffalo filet mignon pancetta pork belly tail. Alcatra burgdoggen capicola pork ribeye. Meatloaf pork loin beef shank frankfurter. Short loin beef filet mignon, hamburger doner capicola venison ball tip."
    }

]

function seedDB() {
    //Remove all campgrounds
    Campground.deleteMany({}, function(err){
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log("removed campgrounds")
    // });
    // //add a few campgrounds
    // data.forEach(function(seed){
    //     Campground.create(seed, function(err, campground){
    //         if(err) {
    //             console.log(err)
    //         } else {
    //             console.log("added campground");
    //             //create a comment
    //             Comment.create(
    //                 {
    //                     text: "This place is great, wish there was internet",
    //                     author: "Hover"
    //                 }, function(err, comment){
    //                     if(err) {
    //                         console.log(err)
    //                     } else {
    //                         campground.comments.push(comment);
    //                         campground.save();
    //                         console.log("New comment created");
    //                     }
    //                 })
    //         }
    //     });
    });
    //add a few comments
    
}

module.exports = seedDB;