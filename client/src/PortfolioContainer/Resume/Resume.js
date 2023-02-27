import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Resume.css';


export default function Resume(props){
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return(
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                        <span>{props.heading ? props.heading : ''}</span>
                        {props.fromDate ?(
                            <div className="heading-date">
                                {props.toDate ? props.fromDate +" - "+ props.toDate : props.fromDate}
                            </div>
                        ):(
                            <div></div>
                        )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description? props.description: ''}</span>
                </div>
        </div>
        )
    }

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
      ];
    
    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 80 },
        { skill: "React JS", ratingPercentage: 60 },
        { skill: "React Native", ratingPercentage: 60 },
        { skill: "Express JS", ratingPercentage: 30 },
        { skill: "Node JS", ratingPercentage: 30 },
        { skill: "Mongo Db", ratingPercentage: 50 },
        { skill: "Core Java", ratingPercentage: 80 },
        { skill: "HTML", ratingPercentage: 80 },
        { skill: "CSS", ratingPercentage: 80 },
    ];

    const projectsDetails = [
        {
          title: "Personal Portfolio Website",
          duration: { fromDate: "Spring 2023" },
          description:
            "A Personal Portfolio website to showcase all my details and projects at one place.",
          subHeading: "Technologies Used: React JS, HTML, CSS, express, node JS",
        },
        {
          title: "Elevation-based Navigation ",
          duration: { fromDate: "Fall 2021" },
          description:
            "A navigation web application that calculates routes based on user’s preference of route elevation.",
          subHeading:
            "Technologies Used:  React JS, Python Flask, Jest ",
        },
      ];
    
      const resumeDetails = [
        <div className="resume-screen-container" key="education">
          <ResumeHeading
            heading={"University of Massachusetts, Amherst, Massachusetts"}
            subHeading={"M.S. in Computer Engineering"}
            fromDate={"December 2022"}
          />
          <ResumeHeading
            heading={"Fu Jen Catholic University , New Taipei City, Taiwan"}
            subHeading={"B.S. in Mathematics"}
            fromDate={"June 2017"}
          />
        </div>,
    
        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
              heading={"Amazon"}
              subHeading={"Software Engineer Intern, Maps and Navigation"}
              fromDate={"June 2022"}
              toDate={"September 2022"}
              description={"Designed and developed new features with Android, Kotlin, and App Action to let transporters provide feedback to a mobile device with their voice while driving."}
            />
            <ResumeHeading
              heading={"International Integrated Systems, Inc. (IISI)"}
              subHeading={"Software Engineer, Web and Software development"}
              fromDate={"August 2017"}
              toDate={"August 2021"}
              description="Designed and built all the webpages using JavaScript, HTML5, CSS/Bootstrap, AJAX/JQuery, developed web applications in Java and Spring Boot, and deployment via Jenkins."
            />
        </div>,
    
        /* PROGRAMMING SKILLS */
        <div
          className="resume-screen-container programming-skills-container"
          key="programming-skills"
        >
          {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            </div>
          ))}
        </div>,
    
        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
          {projectsDetails.map((projectsDetails, index) => (
            <ResumeHeading
              key={index}
              heading={projectsDetails.title}
              subHeading={projectsDetails.subHeading}
              description={projectsDetails.description}
              fromDate={projectsDetails.duration.fromDate}
              toDate={projectsDetails.duration.toDate}
            />
          ))}
        </div>,
    
        /* Interests */
        <div className="resume-screen-container" key="interests">
          <ResumeHeading
            heading="Drawing"
            description="Using drawing to record my live."
          />
          <ResumeHeading
            heading="Music"
            description="Ex-keyboard player in independent band."
          />
          <ResumeHeading
            heading="Skincare expert"
            description="Love to know everything about BEAUTY, especially skincare."
          />
        </div>,
      ];
      
    const handleCarousal = (index)=>{
        let offsetHeight = 360;
        let newCarousalOffset ={
            style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"}
        };
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    }

    const getBullets = ()=>{
        return resumeBullets.map((bullet, index)=>(
            <div onClick={()=>handleCarousal(index)}
            className = {index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}>
                <img className="bullet-logo"
                src={require (`../../assets/Resume/${bullet.logoSrc}`)}
                alt='oops,,, no internet connection'
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreens = () => {
        return (
          <div
            style={carousalOffsetStyle.style}
            className="resume-details-carousal"
          >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };
    
    return(
        <div className="resume-container screen-container" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    )
}