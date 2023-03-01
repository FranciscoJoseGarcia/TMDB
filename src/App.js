import React from "react";
import { Routes, Route } from "react-router";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container is-fluid columns">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
