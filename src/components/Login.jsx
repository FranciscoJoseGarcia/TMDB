import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
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
        navigate("/profile");
      })
      .catch(() => alert("error"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Email address"
                type="text"
                required
                placeholder="Email address"
                {...email}
              />
            </div>
            <div className="-mt-px">
              <input
                aria-label="Password"
                type="password"
                required
                placeholder="Password"
                {...password}
              />
            </div>
          </div>

          <div className="mt-6">
            <button type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
