import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import MovieOrTvOrFavorites from "./components/MovieOrTvOrFavorites";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container is-fluid columns">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="404" element={<p>not found</p>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route
            path="profile/:movieOrTvOrFavorites"
            element={<MovieOrTvOrFavorites />}
          />

          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
