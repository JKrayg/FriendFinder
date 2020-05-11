//var path = require("path")
var friends = require("../data/friends");


module.exports = function(app) {

  app.get("/api/survey", function(req, res) {
    res.json(friends);
  });

  app.post("/api/survey", function (req, res) {
    var newFriend = req.body;
    var newFriendScores = newFriend.scores;

    var friendName = "";
    var friendPhoto = "";
    var totalDifference = 100;


  });
}