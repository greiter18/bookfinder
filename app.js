const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI; // connects to our database
const users = require("./routes/api/users");
const books = require("./routes/api/books");
const bodyParser = require('body-parser'); // used for postman

const User = require('./config/models/User');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully")) // letting us know we are connected
  .catch(err => console.log(err)); // if it fails and lets us know what the errors is

app.use(bodyParser.urlencoded({ extended: false })); // respond to requests from postman
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello the one and only Gabriel Reiter")})

app.use("/api/users", users);// if it does match we send in the users object
app.use("/api/books", books);

const port = process.env.PORT || 5000; // listen to production port or 5000

app.listen(port, () => console.log(`Server is running on port ${port}`));

