import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import URLShortener from "./components/URLShortener";
import URLTable from "./components/URLTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-url" element={<URLShortener />} />
        <Route path="/url-table" element={<URLTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
