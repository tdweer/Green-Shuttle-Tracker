const axios = require("axios");
// POST Requset...
//ADD bus details
const bus = require("../models/Bus");



const addBus = (req,res) => {
  
    const BusID  = Number(req.body.BusID);
    const BusNumber = req.body.BusNumber;
    const Capcity = Number(req.body.Capcity);
  
    const newBus = new bus({
      BusID,
      BusNumber,
      Capcity
  
    });
  
    newBus.save()
      .then(() => {
        res.json("Bus added!");
      })
      .catch((error) => {
        console.log(error);
        res.json("Adding failed");
      });
  };

  //GET Request..
  // Find All Buses..

  const getBus = (req,res) => {
    bus.find()
      .then((buses) => {
        res.json(buses);
      })
      .catch((error) => {
        console.log(error);
        res.json("Can't find bus details");
      });
  };

  //UPDATE REQUEST..
  //Update details by id

const updateBus = async (req, res) => {

    let busid = req.params.busid;
  
    const { BusID,BusNumber,Capcity} = req.body;
  
    const updateBus = {
      BusID,
      BusNumber,
      Capcity
  
    };
  
    const update = await bus.findByIdAndUpdate(busid, updateBus);
  
    if (update) {
      res.json("Bus detail updated");
    } else {
      res.json("Update failed");
    }
  };

  //DELETE REQUEST  
  //Delete details by id..

  const deleteBus = async (req, res) => {
    let busid = req.params.busid;
  
    await bus.findByIdAndDelete(busid)
      .then(() => {
        console.log("Bus detail deleted");
        res.json("Bus detail deleted");
      })
      .catch((error) => {
        console.log(error);
        res.json("Deleting failed");
      });
  };

  //GET REQUEST
  //Get details by id

  const getByIdBus = async (req, res) => {
    let busid = req.params.busid;
  
    await bus.findById(busid)
      .then((bus) => {
        res.json(bus);
      })
      .catch((error) => {
        res.json("Cannot find the Bus");
      });
  }

  module.exports = {addBus,getBus,updateBus,deleteBus,getByIdBus};
