import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState(false);
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
        "http://localhost:3005/api/users/login",
        {
          number,
          password,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      navigate("/dashboard");
      window.location.reload(true);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="home">
      <div className="form-conatiner">
        <h1 className="form-heading">Login</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="number" className="label">
            Number
            <input
              type="number"
              id="number"
              className="input"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </label>

          <label htmlFor="password" className="label">
            Password
            <input
              type="password"
              value={password}
              id="password"
              className="input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>

          <button className="btn" type="submit">
            Login
          </button>
        </form>
        <h5 className="form-nav">
          Don't Have an Account?{" "}
          <span
            onClick={() => {
              setSignup(!signup);
            }}
          >
            <Link to="/register">SignUp</Link>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Login;
