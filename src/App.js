import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Socccer from "./components/Socccer";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/soccer">Soccer</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/soccer" element={<Socccer />} />
      </Routes>
    </div>
  );
};

export default App;
