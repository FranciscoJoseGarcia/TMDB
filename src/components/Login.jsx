import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useInput from "../hooks/useInput";

import { setUser } from "../state/user";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        dispatch(setUser(res.data));
        navigate("/profile/movies");
      })
      .catch(() => {
        alert("los datos ingresados son incorrectos");
      });
  };

  return (
    <div>
      <h2 className="mt-5 mb-5 text-center">Sign in to your account</h2>

      <form className="mt-8 text-center" onSubmit={handleSubmit}>
        <div style={{ gap: "5px" }}>
          <div>
            <input
              aria-label="Email address"
              type="text"
              required
              placeholder="Email address"
              {...email}
              style={{ borderRadius: "5px" }}
            />
          </div>
          <div className="mt-2">
            <input
              aria-label="Password"
              type="password"
              required
              placeholder="Password"
              {...password}
              style={{ borderRadius: "5px" }}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="mt-2 btn btn-outline-dark bg-primary"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
