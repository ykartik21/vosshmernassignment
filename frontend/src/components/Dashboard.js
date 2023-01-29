import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField } from "@mui/material";
import { Box, Button } from "@mui/material";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [order, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const userId = JSON.parse(localStorage.getItem("userInfo"));
  const name = userId.name;
  //Search
  async function handleSearch() {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get(
        ` http://localhost:3005/api/users/findorder/${search}`,

        config
      );
      const data = res.data;
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(order);
  return (
    <Box
      marginTop="10px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="10px"
      sx={{
        width: "100vw",
        height: "90vh",
      }}
    >
      <Box
        padding="20px"
        marginTop="15px"
        marginLeft="auto"
        marginRight="auto"
        display="flex"
        justifyContent="space-between"
        sx={{
          width: 500,
          height: 30,
          background: "#E3F6FF",
          borderRadius: "10px",
        }}
      >
        <TextField
          id="standard-basic"
          variant="standard"
          sx={{ width: 260 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          color="primary"
          sx={{
            width: 200,
            height: 30,
          }}
        >
          Search Order
        </Button>
      </Box>
      <div className="orders">
        {order.map((item, index) => {
          return (
            <div className="order" key={index}>
              <h1> User Id : {item.userId}</h1>
              <h2> Number : {item.number}</h2>
              <h3> Total : {item.total}</h3>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default Dashboard;
