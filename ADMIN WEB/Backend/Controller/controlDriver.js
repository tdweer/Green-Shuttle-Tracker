//Add driver details.....
//POST Request

const driver = require("../models/driver");

const addDriver = (req,res) => {
  
    const DriverName = req.body.DriverName;
    const DriverID = Number(req.body.DriverID);
    const DriverNIC = Number(req.body.DriverNIC);
    const DriverTel = Number(req.body.DriverNIC);
  
    const newDriver = new driver({
      DriverName,
      DriverID,
      DriverNIC,
      DriverTel
  
    });
  
    newDriver.save()
      .then(() => {
        res.json("Driver added!");
      })
      .catch((error) => {
        console.log(error);
        res.json("Adding failed");
      });
  }

  //GET Driver details...
  //GET REQUEST...

  const getDriver = (req,res) => {
    driver.find()
      .then((drivers) => {
        res.json(drivers);
      })
      .catch((error) => {
        res.json("Can't find driver details");
      });
  }


  //update driver details...
  //PUT REQUEST....

  const updateDriver = async (req, res) => {

    let driverid = req.params.driverid;
  
    const { Drivername, DriverID, DriverNIC,DriverTel} = req.body;
  
    const updateDriver = {
      Drivername,
      DriverID,
      DriverNIC,
      DriverTel
  
    };
  
    const update = await driver.findByIdAndUpdate(driverid, updateDriver);
  
    if (update) {
      res.json("Driver updated");
    } else {
      res.json("Update failed");
    }
  }

  //Delete driver details...
  //DELETE REQUEST 

  const deleteDriver = async (req, res) => {
    let driverid = req.params.driverid;
  
    await driver.findByIdAndDelete(driverid)
      .then(() => {
        console.log("Driver deleted");
        res.json("Driver deleted");
      })
      .catch((error) => {
        console.log(error);
        res.json("Deleting failed");
      });
  };

  //GET driver details by ID ... 
  //POST REQUEST....
  
  const getDriverDetailsID = async (req, res) => {
    let driverid = req.params.driverid;
  
    await driver.findById(driverid)
      .then((driver) => {
        res.json(driver);
      })
      .catch((error) => {
        res.json("Cannot find the driver");
      });
    }
  


  module.exports = {addDriver,getDriver,updateDriver,deleteDriver,getDriverDetailsID}
