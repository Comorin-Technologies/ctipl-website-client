import "./MainPage.css";
import React from "react";
import { useState } from "react";
import { NavBar } from "../NavBar/NavBar.js";
import { Slide } from "react-slideshow-image";
import AnimatedText from "react-animated-text-content";
import AnimatedNumbers from "react-animated-numbers";
import miniatureLogo from "../../Assets/AboutSection/CT_Miniature Logo.png";
import aboutsecimg from "../../Assets/AboutSection/aboutImg.jpg";
import "react-slideshow-image/dist/styles.css";
import {
  HomeSlideImages,
  solutions,
  slidingNum,
  locations,
  submit,
} from "./MainPageHelper.js";

export function MainPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="bg-img">
        <Slide duration={3500} transitionDuration={700}>
          {HomeSlideImages.map((slideImage, index) => (
            <div className="bg-txt each-slide animated-paragraph" key={index}>
              <div className=".bg-txt-box">
                <AnimatedText
                  type="words"
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="float"
                  interval={0.06}
                  duration={1.5}
                  tag="p"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    backgroundImage: `url(${slideImage.url})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "50vh",
                  }}
                >
                  {/* {slideImage.caption} */}
                </AnimatedText>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className="mainpg-scnd-hf">
        <div className="home-second-half-div">
          <h2 className="oursolution">
            <AnimatedText
              type="words"
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="bounce"
              interval={0.06}
              duration={1.5}
              tag="p"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                color: "#093f97",
                height: "5vh",
              }}
            >
              DELIVERING THE ENTERPRISE SUPPLY CHAIN AND LOGISTICS SOLUTIONS
              SINCE 2010
            </AnimatedText>
          </h2>
        </div>
        <div className="home-second-half-content">
          {solutions.map((solution) => {
            return (
              <div className="home-solutions">
                <img src={solution.icon} height="60" width="60" />
                <h4>{solution.solution}</h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className="aboutpage-bg">
        <div className="aboutpage-maindiv">
          <div className="aboutpage-img">
            <img src={aboutsecimg} height="500" width="500" />
          </div>
          <div className="aboutpage-contentdiv">
            <div className="about-content-title">
              <div>
                <img src={miniatureLogo} height="100" width="auto" />
              </div>
              <div>
                <h2 className="aboutpage-content-title">Team Comorin</h2>
              </div>
            </div>
            <p>
              Comorin Technologies is a leader in delivering Innovative Supply
              Chain Logistics solutions for businesses running SAP. Our story
              began in late 2009 comprising of a team with 20 years of
              experience. Currently, Comorin Technologies is a global exterprice
              software solutions provider with HQ based out of Prinston, New
              Jersy. Originally started in 2010 as a Pennsylvania company
              serving customers across the globe.
            </p>
            <p>
              We specialize in offering cost-effective turn-key project
              delivery, innovative Supply Chain Planning, Supply Chain Execution
              and Transportation Management Products and Support Services. Team
              Comorin has amassed over 25+ years of experience implementing and
              supporting SAP Supply Chain Logistics Solutions.
            </p>
            <div className="animated-num-div">
              {slidingNum.map((num) => {
                return (
                  <div className="animated-num">
                    <h3>{num.title}</h3>
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={num.num}
                      fontStyle={{ fontSize: 40 }}
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                        { mass: 1, tension: 180, friction: 135 },
                        { mass: 1, tension: 260, friction: 100 },
                        { mass: 1, tension: 210, friction: 180 },
                      ]}
                    ></AnimatedNumbers>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
