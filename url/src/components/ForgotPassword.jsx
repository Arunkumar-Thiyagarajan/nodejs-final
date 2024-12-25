import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/forgot-password", { email });
      if (response.data.success) {
        alert("Password reset email sent!");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Error sending password reset email");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
