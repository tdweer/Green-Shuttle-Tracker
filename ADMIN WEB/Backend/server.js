const express  = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const {v4:uuidv4} = require("uuid");
const app = express();

require("dotenv").config();


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const URL = process.env.MONGODB_URL;


mongoose.connect(URL,{
 
    useNewUrlParser :true,
    useUnifiedTopology : true,
})


app.use("/drivers",require("./routes/drivers.js"));
app.use("/buses",require("./routes/buses.js"));
app.use("/schedules",require("./routes/schedules.js"));
app.use("/login",require("./routes/login.js"));
app.use("/logout",require("./routes/logout.js"));



app.use(session({
    secret:uuidv4(),
    resave: false,
    saveUninitialized:true

}));


const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("Mongodb connection success!");
})

app.listen(PORT,() => {
    console.log(`server is up and running on port number : ${PORT} `);
}) 


