import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/auth/login",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      if (response.data.success) {
        // Redirect to separate dashboard application
        window.location.href = "http://localhost:3001";
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <h2 className="text-center mb-4">
            Login
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {message && (
              <p className="text-danger text-center">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-4">
            Don't have an account?{" "}

            <button
              className="btn btn-link"
              onClick={() => {
                window.location.href =
                  "http://localhost:3000/signup";
              }}
            >
              Sign Up
            </button>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;