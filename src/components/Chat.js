import React from "react";
import queryString from "aria-query";
import io from "socket.io-client";

let socket;

const Chat = (location) => {
  const [name, setName] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const ENDPOINT = "http://localhost:5500";

  React.useEffect(() => {
    const { name, room } = console.log(location.search);
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);
  }, [location.search]);

  React.useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  return (
    <div>
      {messages.map((val, i) => {
        return (
          <div key={i}>
            {val.text}
            <br />
            {val.user}
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
