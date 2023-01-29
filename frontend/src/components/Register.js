import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(
        "http://localhost:3005/api/users",
        { name, number, password },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      navigate("/dashboard");
      window.location.reload(true);
    } catch (error) {
      console.error(error);
      console.log(error.response.res.data.message);
    }
  }
  return (
    <div className="home">
      <div className="form-conatiner">
        <h1 className="form-heading">Register</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="label">
            Name
            <input
              type="text"
              id="name"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="number" className="label">
            Number
            <input
              type="number"
              id="number"
              className="input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>

          <label htmlFor="password" className="label">
            Password
            <input
              type="password"
              id="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button className="btn">Register</button>
        </form>
        <h5 className="form-nav">
          Already Have an Account? ?{" "}
          <span>
            <Link to="/login"> SignIn</Link>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Register;
