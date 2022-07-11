import React from "react";
import axios from "axios";

const Socccer = () => {
  const [soccer, setSoccer] = React.useState([]);
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/players",
    params: { id: "276", season: "2020" },
    headers: {
      "X-RapidAPI-Key": "7f80d56842mshb52da311c570f6fp15a4a9jsn5f23c14c23ba",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const getSoccer = async () => {
    let response = await axios.request(options);
    console.log(response.data);
    setSoccer(response.data);
  };

  React.useEffect(function () {
    getSoccer();
  }, []);

  return <div>Soccer</div>;
};
export default Socccer;
