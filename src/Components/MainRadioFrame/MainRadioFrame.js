import React, { useState, useEffect } from "react";
import Stations from "./Stations/Stations";
import FmRadio from "./FmRadio/FmRadio";
import "./MainRadioFrame.css";

const MainRadioFrame = () => {
  const [stations, setStations] = useState([]);
  const [selectedStation, SetSelectedStation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/stations")
      .then((res) => res.json())
      .then((data) => setStations(data));
  }, []);

  //Select Station Click Handler
  const clickSingleStation = (station) => {
    const singleStaion = [station];
    SetSelectedStation(singleStaion);
  };

  return (
    <div className="mainRadioFrame">
      <Stations stations={stations} clickSingleStation={clickSingleStation} />
      <FmRadio selectedStation={selectedStation} />
    </div>
  );
};

export default MainRadioFrame;
