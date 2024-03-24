const router = require("express").Router();


router.route("/out").post((req,res) =>{
    req.session.destroy(function(error){
        if(error){
            res.json("error");
        }
        else{
            res.json({logout:"logout successfully...!"})
        }
    })
})


module.exports = router;