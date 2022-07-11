import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateCreate = () => {
    navigate(`/chat?name=${name}&room=${room}`);
  };
  const [name, setName] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [status, setStatus] = React.useState("");

  const joining = (event) => {
    if (room.length <= 3) {
      event.preventDefault();
      setStatus("Please enter a valid room number");
    } else {
      navigateCreate();
    }
  };
  return (
    <div>
      <form onSubmit={joining}>
        <h1>Welcome to Chatting</h1>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={room}
          placeholder="Room Number"
          onChange={(e) => setRoom(e.target.value)}
        />
        <button>JOIN</button>
        <h2>{status}</h2>
      </form>
    </div>
  );
};

export default Home;
