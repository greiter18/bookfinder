const express = require("express");
const router = express.Router();
const passport = require
// test route
router.get("/test", (req, res) => {
  res.json({ msg: "This is the books route" });
});

// router.post("/", 
//   passport.authenticate("jwt", { session: false}),
//   (req, res) => {
//     const { isValid, errors } =  
// })

module.exports = router;