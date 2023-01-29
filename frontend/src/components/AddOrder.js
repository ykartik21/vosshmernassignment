import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddOrder = () => {
  const navigate = useNavigate();
  // const userId = JSON.parse(localStorage.getItem("userInfo"))._id;
  const [userId, setUserId] = useState("");
  const [number, setNumber] = useState("");
  const [total, setTotal] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:3005/api/users/addorder",
        {
          userId,
          number,
          total,
        },
        config
      );
      console.log(res);
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
        <h1 className="form-heading">Add Order</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="id" className="label">
            User Id
            <input
              type="text"
              id="id"
              className="input"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
          </label>

          <label htmlFor="phonenumber" className="label">
            Number
            <input
              type="number"
              id="phonenumber"
              className="input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>

          <label htmlFor="total" className="label">
            Total
            <input
              type="number"
              id="total"
              className="input"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
            />
          </label>

          <button className="btn">Add Order</button>
        </form>
      </div>
    </div>
  );
};

export default AddOrder;
