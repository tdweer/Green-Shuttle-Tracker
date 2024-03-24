import Profile from "../Components/Profile/Profile";
import SideBar from "../Components/SideBar/SideBar";
import "./Buses.css";
import React, { useState } from 'react';


const busesData = [
  { busid: "001", busno: "NC 2567", capacity: "50"  },
  { busid: "002", busno: "ND 2858", capacity: "50"  },
  { busid: "003", busno: "NC 4566", capacity: "50" },
];


const Table = () => {
  const [data, setData] = useState(busesData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddNewBus = () => {
    const newBus = { busid: '', busno: '', capacity: '' };
    setData(prevData => [...prevData, newBus]);
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
      d.busid.toString().includes(searchTerm.toLowerCase()) ||
      d.busno.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.capacity.toLowerCase().includes(searchTerm.toLowerCase()) 
      
  );

  return (
    <div>
      <div className=" search-container">
      <input type="text" className="search" placeholder="Search..." onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>Bus No</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((d, index) =>
            index === editingIndex ? (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={d.busid}
                    onChange={(event) =>
                      handleSave(index, { ...d, busid: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.busno}
                    onChange={(event) =>
                      handleSave(index, { ...d, busno: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.nic}
                    onChange={(event) =>
                      handleSave(index, { ...d, capacity: event.target.value })
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
                <td>{d.busid}</td>
                <td>{d.busno}</td>
                <td>{d.capacity}</td>
      
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <button className="button1" onClick={() => handleAddNewBus()}>
        ADD NEW BUS
        </button>
    </div>
  );
};


export default function Dashboard() {
  
  

  return (
    <div>
      <Profile />
      <SideBar />
      <div className="buses">Buses</div>
      
      <Table />
    </div>
  );
}