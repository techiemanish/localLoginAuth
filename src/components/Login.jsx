import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(localStorage.getItem("db") === null){
        toast.error("Login Failed! No user exist.")
        navigate('/',{replace: true})
    }
    else{
        let dBData = localStorage.getItem("db");
        let parsedData = JSON.parse(dBData);

        let email = formData.email;
        let password = formData.password;
        let flag = false;
        let userData = null;

        for(let i in parsedData){
            if(parsedData[i].email === email && parsedData[i].password === password){
                userData = parsedData[i];
                flag = true;
            }
        }
        // console.log("hi")
        // console.log(userData);
        if(flag){
            toast.success("Login Successful!");
            let data = JSON.stringify(userData);
            localStorage.setItem('userData',data);
            navigate('/dashboard',{replace: true})
        }
        else{
            toast.error("Incorrect Email and Password!");
        }
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Login</button>
      <p className="login-message">New user, <Link to="/register">Register yourself!</Link></p>
    </form>
  );
};

export default Login;
