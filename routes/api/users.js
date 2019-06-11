const express = require("express")
const router = express.Router()
const {User} = require("../../models/User");

// router.get("/", (req, res, next) => {
//   console.log("MDW")
//   next()
// }, (req, res) => {
//   console.log("Send")
//   res.json({message: "Hello world"})
// })
// router.get("/xyz", (req, res) => {
//   console.log("Send")
//   res.json({message: "Hello world"})
// })

// route    POST /api/users/register
// desc     Register new user
// access   PUBLIC
router.post("/register", (req, res) => {
  const {fullname, password, email, phone, userType, DOB} = req.body;

  const newUser = new User({
    email, password, fullname, phone, userType, DOB
  })
  newUser.save()
  .then(user => res.status(200).json(user))
  .catch(err => res.status(400).json(err))
  // console.log(req.body)
  // res.send(req.body)
})

module.exports = router;