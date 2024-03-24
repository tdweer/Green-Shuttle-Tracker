const router = require("express").Router();


const credential ={
    username : "shakeeb",
    password : "shakeeb123@"
}

//To check user input matching or not

http://localhost:3400/login/log
router.route("/log").post((req,res) =>{
      if(req.body.username == credential.username && req.body.password == credential.password)
      {
          res.json("/Dashboard");
      }
      else{
        res.json("Username or password is incorrect...!");
      }
})


module.exports = router;