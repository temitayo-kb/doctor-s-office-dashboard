import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("FrontDesk");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Register button clicked");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
        role,
      });
      localStorage.setItem("token", res.data.token);
      if (res.data.role === "Admin") {
        navigate("/admin");
      } else if (res.data.role === "FrontDesk") {
        navigate("/frontdesk");
      } else if (res.data.role === "Doctor") {
        navigate("/doctor");
      }
    } catch (err) {
      console.log("Registration error:", err.response?.data);
      alert(
        err.response?.data?.msg ||
          "Registration failed. Email may already be in use or role is invalid."
      );
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role: </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="FrontDesk">Front Desk</option>
            <option value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Register
        </button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
