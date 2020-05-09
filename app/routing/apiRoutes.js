var friends = require("../data/friends");


module.exports = function(app) {

  app.get("/api/survey", function(req, res) {
    res.json(friends);
  });

  app.post("/api/survey", function (req, res) {
    var newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend);
    console.log(newFriend);
  });
}