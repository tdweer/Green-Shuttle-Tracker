import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import MapSharpIcon from '@mui/icons-material/MapSharp';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
  {
    title:"Dashboard",
    icon: <GridViewIcon/>,
    link:"/dashboard", 
  },
  {
    title:"Buses",
    icon: <DirectionsBusIcon/>,
    link:"/buses",
  },
  {
    title:"Drivers",
    icon: <PersonOutlineIcon/>,
    link:"/drivers", 
  },
   {
    title:"Schedule",
    icon: <CalendarMonthSharpIcon/>,
    link:"/schedule", 
  },
  {
    title:"Live Map",
    icon: <MapSharpIcon/>,
    link:"/livemap",
  },
  {
    title:"Logout",
    icon: <LogoutIcon/>,
    link:"/logout",
  },
];
