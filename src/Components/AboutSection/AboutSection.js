import "./AboutSection.css";
import AnimatedNumbers from "react-animated-numbers";
import miniatureLogo from "../../Assets/AboutSection/CT_Miniature Logo.png";
import aboutsecimg from "../../Assets/AboutSection/aboutImg.jpg";

export function AboutSection() {
  const slidingNum = [
    {
      title: "Customers",
      num: 84,
    },
    {
      title: "Projects",
      num: 100,
    },
    {
      title: "Partners",
      num: 10,
    },
  ];
  return (
    <div>
      <a name="aboutPage"></a>
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
