import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/chih-hsuan-maggie/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/maggieChangFun">
                  <i className="fa fa-brands fa-github"></i>
              </a>
            </div>
          </div>


        <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Maggie</span>
            </span>
        </div>
        <div className="profile-details-role">
        <span className="primary-text">
            {" "}
              <h1>
                {" "}
                <Typical
                    loop={Infinity}
                    steps={[
                    "Full Stack Developer 👩🏻‍💻 ",
                    1000,
                    "Software Engineer 🤩 ",
                    1000,
                    ]}
                />
              </h1>
            <span className="profile-role-tagline">
            Knack of building applications with front and back end operations.
           </span>
           </span>
          </div>
          <div className="profile-option">
            <button className="btn primary-btn" onClick={()=> ScrollService.scrollHandler.scrollToHireMe()}>
                {""}
                Hire me{" "}
            </button>
            <a href="resume.pdf" download="Resume_ChihHsuan(Maggie)-Chang.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        
      </div>
    </div>
  );
}
