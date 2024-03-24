import React, { useState } from 'react';
import './AdminProfile.css';

export default function AdminProfile() {
  const [username, setUsername] = useState('admin');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');

  const handleSave = () => {
    // Handle saving the user's profile data to the server
    console.log('Profile saved');
  };

  return (
    <div className="admin-form">
      <h1>Admin Profile</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
}

