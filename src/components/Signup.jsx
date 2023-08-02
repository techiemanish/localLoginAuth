import React, { useState } from 'react';
import './Signup.css'; // Import your CSS file
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
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
        let arr = [];
        arr.push(formData);
        let data = JSON.stringify(arr);
        localStorage.setItem("db",data);
        toast.success("Successfully Registered!");
    }
    else{
        let dbData = localStorage.getItem("db");
        let parsedData = JSON.parse(dbData);
        let email = formData.email;
        let flag = false;
        for(let i in parsedData){
            if(parsedData[i].email === email){
                flag = true;
            }
        }
        if(flag){
            toast.error("User Already Exist!!")
        }else{
            parsedData.push(formData);
            let data = JSON.stringify(parsedData);
            localStorage.setItem("db",data);
            toast.success("Successfully Registered!");
        }
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
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
      <button type="submit" className="submit-btn">Sign Up</button>
      <p className="login-message">If already have an account, <Link to="/login">login</Link></p>
    </form>
  );
};

export default Signup;
