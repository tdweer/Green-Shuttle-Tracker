const router = require("express").Router();

const { addSchedule, getSchedule, updateSchedule, deleteSchedule, getSchduleId } = require("../Controller/controlSchedule");


http://localhost:3400/schedules/add
router.route("/add").post(addSchedule);


http://localhost:3400/schedules/
router.route("/").get(getSchedule);

http://localhost:3400/schedules/update
router.route("/update/:scheduleid").put(updateSchedule);

http://localhost:3400/schedules/delete/id
router.route("/delete/:scheduleid").delete(deleteSchedule);

http://localhost:3400/schedules/get/id
router.route("/get/:scheduleid").get(getSchduleId);

module.exports = router;
