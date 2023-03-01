import axios from "axios";
// import { Link } from "react-router-dom";
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
          <Link to={"/profile"}>
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
              <strong>{user.firstName}</strong>
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
