import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import "./MainRadioFrame.css";
const MainRadioFrame = () => {
  return (
    <div className="mainRadioFrame">
      {/* Station */}
      <div className="singleRadioFrame">
        <div className="frameBar">
          <a href="/#" alt="">
            <FontAwesomeIcon
              className="mx-2 text-red-500 icon"
              icon={faChevronLeft}
            />
          </a>
          <a href="/#" alt="">
            Station
          </a>
          <a href="/#" alt="">
            <FontAwesomeIcon
              className="mx-2 text-red-500 icon"
              icon={faPowerOff}
            />
          </a>
        </div>
      </div>
      {/* FM Radio */}
      <div className="singleRadioFrame">
        <div className="frameBar">
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
      </div>
    </div>
  );
};

export default MainRadioFrame;
