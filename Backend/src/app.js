const express = require("express");
const connectDB = require("./config/database.js");
const userModel = require("./Models/user.js");
const cookieparser = require("cookie-parser");
const { userAuth } = require("./middleware/auth.js");
const cors = require('cors')
const app = express();  
require('dotenv').config()
app.use(cors());
const authRouter = require('./routes/authRouter.js')
const profileouter=require('./routes/profileRouter.js')
app.use(express.json());
app.use(cookieparser());
app.use('/',authRouter)
app.use('/',profileouter)

connectDB()
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log("Connection is Established......");
    });
    console.log("Database Connections has been Establized....");
  })
  .catch((error) => {
    console.error("Error Found database not connected");
  });

app.get('/health-check', (req, res) => {
  res.status(200).json({message: "Server is healthy"})
  console.log("headers", req.headers)
})
