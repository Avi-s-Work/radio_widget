import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Wave from "../../imgs/wave.png";
import "./MainRadioFrame.css";

const MainRadioFrame = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/stations")
      .then((res) => res.json())
      .then((data) => setStations(data));
  }, []);

  return (
    <div className="mainRadioFrame">
      {/* //////////////////// Stations ////////////////////// */}
      <div className="singleRadioFrame">
        {/* Top Bar */}
        <div className="topBar">
          <a href="/#" alt="">
            <FontAwesomeIcon
              className="mx-2 text-red-500 icon"
              icon={faChevronLeft}
            />
          </a>
          <a href="/#" alt="">
            Stations
          </a>
          <a href="/#" alt="">
            <FontAwesomeIcon
              className="mx-2 text-red-500 icon"
              icon={faPowerOff}
            />
          </a>
        </div>
        {/* Station Name List  */}
        <div className="stationNameList">
          {stations.map((station) => (
            <div key={station._id} station={station} className="stationName">
              <a href="/#" alt="">
                <h2>{station.stationName}</h2>
                <h2>{station.frequency}</h2>
              </a>
            </div>
          ))}
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar"></div>
      </div>
      {/* //////////////////// FM Radio ////////////////////// */}
      <div className="singleRadioFrame">
        {/* Top Bar */}
        <div className="topBar">
          <a href="/#" alt="">
            <FontAwesomeIcon
              className="mx-2 text-red-500 icon"
              icon={faChevronLeft}
            />
          </a>
          <a href="/#" alt="">
            FM Radio
          </a>
          <a href="/#" alt="">
            <FontAwesomeIcon
              className="mx-2 text-red-500 icon"
              icon={faPowerOff}
            />
          </a>
        </div>
        {/* Single Station */}
        <div className="singleStation">
          <div className="circle">
            <h1>98.9</h1>
          </div>
          <div>
            <img className="wave" src={Wave} alt="" />
          </div>
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar">
          <div>
            <p>Now Playing</p>
            <h3>BHOOT FM</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRadioFrame;
