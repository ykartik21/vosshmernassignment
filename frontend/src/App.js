import "./App.css";
import Header from "./components/Header.js";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import AddOrder from "./components/AddOrder";

function App() {
  //Initialising login states
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //using useEffect
  useEffect(() => {
    const checkLoggedIn = localStorage.getItem("userInfo");
    checkLoggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [isLoggedIn]);

  //taking value from header

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        {!isLoggedIn ? (
          <Route path="/" element={<Layout />} />
        ) : (
          <Route path="/" element={<Dashboard />} />
        )}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addorder" element={<AddOrder />} />

        {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
      </Routes>
    </div>
  );
}

export default App;
