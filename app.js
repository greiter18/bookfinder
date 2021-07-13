const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/key').mongoURI;
const users = require("./routes/api/users");
const books = require("./routes/api/books");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/books", books);

// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch(err => console.log(err));
//
app.get("/", (req, res) => res.send("Hello the one and only Gabriel Reiter"))
const port = process.env.PORT || 5000; // listen to production port or 5000
app.listen(port, () => console.log(`Server is running on port ${port}`));
