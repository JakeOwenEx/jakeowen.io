import { RightSectionTitle } from "./SectionTitles";
import About from "../../assets/svgs/sectionIcons/about/about.svg";
import * as React from "react";
import BulletPoint from "../../assets/svgs/sectionIcons/about/bulletpoint.svg";
import Person from "../../assets/pngs/person.png";
import { SectionLoaderComponent } from "../LandingPage/LandingPageLoader";
import { useState } from "react";

const AboutMeSection: React.FC = () => {
  const [hasBeenVisible, setHasBeenVisible] = useState(0);
  return (
    <div
      className="about-me section-separator"
      style={{ opacity: hasBeenVisible }}
    >
      <RightSectionTitle title="About Me" icon={About} alt="about-me" />
      <SectionLoaderComponent
        cssClass="about-me"
        setHasBeenVisible={setHasBeenVisible}
      />
      <div className="row about-me-box">
        <img className="bullet-point" src={BulletPoint} alt="BulletPoint" />
        <div className="about-me-text light-grey-font">
          <div>
            Hello, I'm Jake, a software engineer currently residing in London.
          </div>
          <br />
          <div>
            The guy on the right isn't actually me, i'm still waiting to get my
            professional headshot. I have a real passion for creating, building
            & maintaining software, ranging from enterprise APIs to
            infrastructure to websites like the one before you. Some of my
            favourite technologies to work with at the moment are:
          </div>
          <br />
          <div>
            Over the past few years i've worked for a range of teams at Tesco,
            working on both frontend and backend.
          </div>
        </div>
        <img className="personal-photo" src={Person} alt="Personal Photo" />
      </div>
    </div>
  );
};

export default AboutMeSection;
