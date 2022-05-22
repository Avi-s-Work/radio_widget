import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Wave from "../../../imgs/wave.png";

const FmRadio = ({ selectedStation }) => {
  return (
    <>
      {selectedStation.map((singleStaions) => (
        <section key={singleStaions._id} className="singleRadioFrame">
          {/* Top Bar */}
          <div className="topBar">
            <a href="/#" alt="">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            <a href="/#" alt="">
              FM Radio
            </a>
            <a href="/#" alt="">
              <FontAwesomeIcon icon={faPowerOff} />
            </a>
          </div>
          {/* Wave & Frequncy */}
          <div className="singleStation">
            <div className="circle">
              <h1>{singleStaions.frequency}</h1>
            </div>
            <div>
              <img className="wave" src={Wave} alt="" />
            </div>
          </div>
          {/* Bottom Bar  */}
          <div className="bottomBar">
            <div>
              <p>Currently Playing</p>
              <h3>{singleStaions.stationName}</h3>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default FmRadio;
