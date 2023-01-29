import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField } from "@mui/material";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();

  //Logout
  function handelLogout() {
    localStorage.removeItem("userInfo");
    navigate("/");
    window.location.reload(true);
  }

  return (
    <AppBar sx={{ background: "white" }} position="sticky">
      <Toolbar>
        <Typography variant="h4" color="primary">
          <Link to="/">Voosh</Link>
        </Typography>

        {props.isLoggedIn && (
          <Box
            display="flex"
            marginLeft="auto"
            sx={{
              width: 100,
              height: 30,
            }}
          >
            <Typography color="primary">
              <Link to="/addorder">Add Order</Link>
            </Typography>
          </Box>
        )}

        <Box display="flex" marginLeft="auto">
          <Button color="primary">
            <Link to="/login">Login</Link>
          </Button>

          <Button color="primary">
            <Link to="/register">Signup</Link>
          </Button>
          {props.isLoggedIn && (
            <Button color="primary" onClick={handelLogout}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
