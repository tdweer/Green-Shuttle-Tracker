import React, { useState } from "react";
import "./Login.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

function App() {
  const logo1 = process.env.PUBLIC_URL + "/Images/logo1.png"
  const [errorMessages, ] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate =useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Your logic for handling form submission goes here
    //redirect the user to the dashboard page
    navigate('/Dashboard')
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" placeholder="Enter User Name" name="uname" required />
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={showPassword ? "Password" : "Password *"}
              name="pass"
              required
            />
            <div style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}>
              {showPassword ? (
                <VisibilityIcon
                  className="VisibilityIcon"
                  onClick={handleShowPassword}
                />
              ) : (
                <VisibilityOffIcon
                  className="VisibilityOffIcon"
                  onClick={handleShowPassword}
                />
              )}
            </div>
          </div>
          {renderErrorMessage("pass")}
        </div>

        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
    
    
    <div className="app">
    
    <img src={process.env.PUBLIC_URL + logo1} alt="Logo1" />
   


      <div className="login-form">
        <div className="title">Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      
    </div>
    </div>
  );
}

export default App;