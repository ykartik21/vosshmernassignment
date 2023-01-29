import React from "react";
import "../index.css";
import { Box, capitalize, Typography } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "90vh",
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        display="flex"
        sx={{
          margin: "auto",
          fontSize: 35,
          textTransform: "capitalize",
          color: "#645CBB",
        }}
      >
        {" "}
        Please Login or signup to continue
      </Typography>
    </Box>
  );
};

export default Layout;
