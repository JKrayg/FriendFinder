var friendsData = require("../data/friends");


app.get("/api/survey", function(req, res) {
  res.json(friendsData);
});

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------

//app.post("/api/survey", function(req, res) {
  // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  // It will do this by sending out the value "true" have a table
  // req.body is available since we're using the body parsing middleware
  //friendsData.push(req.body);
  //res.json(true);
//});