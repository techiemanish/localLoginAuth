import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

const Dashboard = () => {
  const navigate = useNavigate();

  let userInfo = localStorage.getItem("userData");
  let parsedUserInfo = JSON.parse(userInfo);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login", { replace: true });
  };

  if(userInfo != null){
    return (
        <div className="dashboard">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
          <h2>Welcome to the Dashboard</h2>
          <div className="user-info">
            <p>
              <strong>Name:</strong> {parsedUserInfo?.fullName}
            </p>
            <p>
              <strong>Email:</strong> {parsedUserInfo?.email}
            </p>
            <p>
              <strong>Mobile:</strong> {parsedUserInfo?.mobile}
            </p>
          </div>
        </div>
      );
  }
  return <Signup/>
};

export default Dashboard;
