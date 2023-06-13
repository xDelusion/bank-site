import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
import { Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {" "}
      {/* providing all components in App.js with info of 'value' */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
