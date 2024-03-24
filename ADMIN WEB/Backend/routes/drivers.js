const router = require("express").Router();

const { addDriver, getDriver, updateDriver, deleteDriver, getDriverDetailsID } = require("../Controller/controlDriver")


http://localhost:3400/drivers/add
router.route("/add").post(addDriver);

http://localhost:3400/drivers/
router.route("/").get(getDriver);

http://localhost:3400/drivers/update/id
router.route("/update/:driverid").put(updateDriver);

http://localhost:3400/drivers/delete/id
router.route("/delete/:driverid").delete(deleteDriver);

http://localhost:3400/drivers/get/id
router.route("/get/:driverid").get(getDriverDetailsID);

module.exports = router;
