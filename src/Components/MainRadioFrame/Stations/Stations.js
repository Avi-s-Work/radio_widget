import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Stations = ({ stations, clickSingleStation }) => {
  return (
    <div>
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
              <a href="/#" alt="" onClick={() => clickSingleStation(station)}>
                <h2>{station.stationName}</h2>
                <h2>{station.frequency}</h2>
              </a>
            </div>
          ))}
        </div>
        {/* Bottom Bar  */}
        <div className="bottomBar"></div>
      </div>
    </div>
  );
};

export default Stations;
