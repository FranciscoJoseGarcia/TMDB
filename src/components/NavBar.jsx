import axios from "axios";
import { useNavigate } from "react-router";
import React from "react";
import { setUser } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    axios
      .post("/api/logout")
      .then(() => {
        dispatch(setUser({}));
        navigate("/");
      })
      .catch(() => alert("error"));
  };
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        {user.firstName ? (
          <Link to={"/profile/movies"}>
            <strong style={{ textDecoration: "none", color: "white" }}>
              TMDB
            </strong>
          </Link>
        ) : (
          <Link to={"/"}>
            <strong style={{ textDecoration: "none", color: "white" }}>
              TMDB
            </strong>
          </Link>
        )}
        <div
          className="d-flex"
          style={{
            gap: "15px",
          }}
        >
          {user.firstName ? (
            <>
              <strong>Hi, {user.firstName}!</strong>
              <Link to={"/profile/favorites"}>
                <button className="btn btn-outline-light" type="submit">
                  Favorites
                </button>
              </Link>
              <Link to={"/profile/movies"}>
                <button className="btn btn-outline-light" type="submit">
                  Movies
                </button>
              </Link>
              <Link to={"/profile/tv_shows"}>
                <button className="btn btn-outline-light" type="submit">
                  Tv Shows
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-outline-light"
                type="submit"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn btn-outline-light" type="submit">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="btn btn-outline-light" type="submit">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
