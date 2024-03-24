import React, { useState } from 'react';
import './Profile.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    navigate('/AdminProfile');
  };

  return (
    <div>
      <div>
        <NotificationsNoneIcon className='NotificationsNoneIcon'/>
      </div>
      <div className='name'>John Doe</div>
      <div className='dropdownmenu'>
        <div className='dropdown-header' onClick={toggleDropdown}>
          <ArrowDropDownIcon className='ArrowDropDownIcon'/>
        </div>
        {isOpen && (
          <div className='dropdown-items'>
            <button className='dropdown-item' onClick={handleProfileClick}>Profile</button>
          </div>
        )}
      </div>
    </div>
  );
}