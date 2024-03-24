//Add new schedule ..
//POST request
let schedule = require("../models/schedule");
const addSchedule = (req,res) => {
  
    const SchID  = Number(req.body.SchID);
    const BusNo = req.body.BusNo;
    const Drivername = req.body.Drivername;
    const StartDate = req.body.StartDate;
    const EndDate = req.body.EndDate;
    const Days = req.body.Days;
    const Depature = req.body.Depature;
    const Arrival = req.body.Arrival;
  
    const newSchedule = new schedule({
      SchID,
      BusNo,
      Drivername,
      StartDate,
      EndDate,
      Days,
      Depature,
      Arrival
  
    });
  
    newSchedule.save()
    .then(() => {
        res.json("schedule added!");
      })
      .catch((error) => {
        console.log(error);
        res.json("Adding failed");
      });
  }
  



//GET All schedule details ..
//Get request...

const getSchedule = (req,res) => {
    schedule.find()
      .then((schedules) => {
        res.json(schedules);
      })
      .catch((error) => {
        console.log(error);
        res.json("Can't find bus details");
      });
  }


//update schedule details.....
//put request

const updateSchedule = async (req, res) => {

    let scheduleid = req.params.scheduleid;
  
    const { SchID,BusNo, Drivername,StartDate, EndDate,Days, Depature,Arrival} = req.body;
  
    const updateSchedule = {
      SchID,
      BusNo,
      Drivername,
      StartDate,
      EndDate,
      Days,
      Depature,
      Arrival
  
    };
  
    const update = await schedule.findByIdAndUpdate(scheduleid, updateSchedule);
  
    if (update) {
      res.json("schedule dettail updated");
    } else {
      res.json("Update failed");
    }
  }

  //delete schedule.....
  //delete request...
   
  const deleteSchedule =  async (req, res) => {
    let scheduleid = req.params.scheduleid;
  
    await schedule.findByIdAndDelete(scheduleid)
      .then(() => {
        console.log("schedule detail deleted");
        res.json("schedule detail deleted");
      })
      .catch((error) => {
        console.log(error);
        res.json("Deleting failed");
      });
  }

  //find shedule by id....
  //get request....

  const getSchduleId = async (req, res) => {
    let scheduleid = req.params.scheduleid;
  
    await schedule.findById(scheduleid)
      .then((schedules) => {
        res.json(schedules);
      })
      .catch((error) => {
        res.json("Cannot find the shedule");
        console.log(error);
      });
  };


module.exports = {addSchedule,getSchedule,updateSchedule,deleteSchedule,getSchduleId}
  