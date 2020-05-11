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

    for (var i = 0; i < friends.length; i ++) {
      var difference = 0
      for (var i = 0; i < newFriendScores.length; i++) {
        difference += Math.abs(friends[i].scores[i] - newFriendScores[i]);
      }
    }
  });
}