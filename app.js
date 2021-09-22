const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI; // connects to our database
const bodyParser = require('body-parser'); // used for postman
const passport = require("passport");

const users = require("./routes/api/users");
const books = require("./routes/api/books");
const wishlists = require("./routes/api/wishlists");
const readbooks = require("./routes/api/readbooks");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully")) // letting us know we are connected
  .catch(err => console.log(err)); // if it fails and lets us know what the errors is

app.use(bodyParser.urlencoded({ extended: false })); // respond to requests from postman
app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);

app.get("/", (req, res) => {
  res.send("Hello the one and only Gabriel Reiter")})

app.use("/api/users", users);// if it does match we send in the users object
app.use("/api/books", books);
app.use("/api/wishlists", wishlists);
app.use("/api/readbooks", readbooks)

const port = process.env.PORT || 5000; // listen to production port or 5000

app.listen(port, () => console.log(`Server is running on port ${port}`));

