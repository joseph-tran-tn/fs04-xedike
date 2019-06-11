/* 3rd package */
const express = require("express")
const mongoose = require("mongoose")

/* my package */

/* connect */
mongoose.connect("mongodb://localhost:27017/fs04-xedke", {useNewUrlParser: true})
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err))

const app = express();

/* Middleware */
// parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// router middleware
app.use("/", require("./routes/api/users"))
app.use("/api/users", require("./routes/api/users"))


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running in port ${port}!!!`);
})