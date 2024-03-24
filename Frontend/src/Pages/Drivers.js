import Profile from "../Components/Profile/Profile";
import SideBar from "../Components/SideBar/SideBar";
import "./Drivers.css";
import React, { useState } from 'react';


const driversData = [
  { driverid: "001", drivername: "John Smith", nic: "123456789V", tele: "0712345678" },
  { driverid: "002", drivername: "Jane Doe", nic: "987654321V", tele: "0776543210" },
  { driverid: "003", drivername: "Bob Johnson", nic: "456789123V", tele: "0765432109" },
];


const Table = () => {
  const [data, setData] = useState(driversData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddNewDriver = () => {
    const newDriver = { driverid: '', drivername: '', nic: '', tele: '' };
    setData(prevData => [...prevData, newDriver]);
    setEditingIndex(data.length); 
  };
  
  
    

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setEditingIndex(null);
  };

  const handleSave = (index, newData) => {
    const updatedData = [...data];
    updatedData[index] = newData;
    setData(updatedData);
  };
  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (d) =>
      d.drivername.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.driverid.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.nic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.tele.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className=" search-container">
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Driver ID</th>
            <th>Driver Name</th>
            <th>NIC</th>
            <th>Tel No</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((d, index) =>
            index === editingIndex ? (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={d.driverid}
                    onChange={(event) =>
                      handleSave(index, { ...d, driverid: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.drivername}
                    onChange={(event) =>
                      handleSave(index, { ...d, drivername: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.nic}
                    onChange={(event) =>
                      handleSave(index, { ...d, nic: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.tele}
                    onChange={(event) =>
                      handleSave(index, { ...d, tele: event.target.value })
                    }
                  />
                </td>
                <td>
                <button onClick={() => handleSave(index, d)}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{d.driverid}</td>
                <td>{d.drivername}</td>
                <td>{d.nic}</td>
                <td>{d.tele}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <button className="button1" onClick={() => handleAddNewDriver()}>
        ADD NEW DRIVER
        </button>
    </div>
  );
};


export default function Dashboard() {
  
  

  return (
    <div>
      <Profile />
      <SideBar />
      <div className="drivers">Drivers</div>
      
      <Table />
    </div>
  );
}
