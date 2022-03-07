import "./MainPage.css";
import React from "react";
import { useState } from "react";
import { NavBar } from "../NavBar/NavBar.js";
import { Slide } from "react-slideshow-image";
import AnimatedText from "react-animated-text-content";
import "react-slideshow-image/dist/styles.css";
import {
  HomeSlideImages,
  solutions,
  slidingNum,
  locations,
  submit,
} from "./MainPageHelper.js";
import { AboutSection } from "../AboutSection/AboutSection.js";

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
      <div>
        <AboutSection />
      </div>
    </div>
  );
}
