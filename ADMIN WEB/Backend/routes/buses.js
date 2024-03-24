const router = require("express").Router();


const { addBus,getBus,updateBus,deleteBus,getByIdBus} = require("../Controller/controlBus")



http://localhost:3400/buses/add
router.route("/add").post(addBus);

http://localhost:3400/buses/
router.route("/").get(getBus);

http://localhost:3200/bus/update/
router.route("/update/:busid").put(updateBus);

http://localhost:3400/buses/delete/id
router.route("/delete/:busid").delete(deleteBus);

http://localhost:3200/bus/get/id
router.route("/get/:busid").get(getByIdBus);

module.exports = router;

