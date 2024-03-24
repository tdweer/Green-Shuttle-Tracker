import React, { useState } from "react";
import "./AddDriverForm.css"

function AddDriverForm({ onAddDriver }) {
  const [ID, setID] = useState("");
  const [Name, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [TelNo, setTelNo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddDriver({ ID, Name });
    setID("");
    setName("");
    setNIC("");
    setTelNo("");
  };

  return (
    <div className="form-container">
    <div className="form">
    <form onSubmit={handleSubmit}>
       <div className="title">
        ADD NEW DRIVER
       </div>
       <br></br>
      <label>
        Driver ID:
        <input
          type="text"
          value={ID}
          onChange={(event) => setID(event.target.value)}
        />
      </label>
      <br />
      <label>
        Driver Name:
        <input
          type="text"
          value={Name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br/>
      <label>
        NIC:
        <input
          type="text"
          value={NIC}
          onChange={(event) => setNIC(event.target.value)}
        />
      </label>
      <br />
      <label>
        Tel No:
        <input
          type="text"
          value={TelNo}
          onChange={(event) => setTelNo(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Driver</button>
    </form>
    </div>
    </div>
  );
}

export default AddDriverForm;