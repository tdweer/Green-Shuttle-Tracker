import Profile from "../Components/Profile/Profile";
import SideBar from "../Components/SideBar/SideBar";
import "./Dashboard.css";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';

export default function Dashboard() {
  return (
    <div>
      <SideBar/>
      <Profile/>
      
      <div className="Dashboard">DashBoard</div>

      <div class="container">
        <div class="column">
        Buses <br></br>
        4
        <DirectionsBusIcon className="DirectionsBusIcon"/>
        </div>

        <div class="column">
        Drivers<br></br>
        3
        <PersonOutlineIcon className="PersonOutlineIcon"/>
       </div>

       <div class="column">
       Schedule <br></br>
       8
       <CalendarMonthSharpIcon className="CalendarMonthSharpIcon"/>
       </div>
      </div>

      <div className="reports">Reports</div>
      
      <div className="AvailableSeats">
        <div className="Seats">Seat Availabilty</div>
        <img src="./Images/seat.png" alt="" className="img"/>
        <div className="availability">
           40 <br></br>
           Seats Available
        </div>
        
      </div>
    
    </div>
  )
}