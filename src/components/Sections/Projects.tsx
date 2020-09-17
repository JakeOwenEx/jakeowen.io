import * as React from "react";
import { RightSectionTitle } from "./SectionTitles";
import Lightbulb from "../../assets/svgs/sectionIcons/projects/lightbulb.svg";
import ThimbleGif from "../../assets/gifs/thimble.gif";
import { SectionLoaderComponent } from "../LandingPage/LandingPageLoader";
import { useState } from "react";


interface Text {
  text: string;
}

const Title: React.FC<Text> = (props) => {
  return <div className="medium-text light-grey-font">{props.text}</div>;
};

interface TextWithColour {
  text: string;
  className: string;
}

interface AlternatingColourText {
  textArray: TextWithColour[];
}

const AlternatingColourText: React.FC<AlternatingColourText> = (props) => {
  return (
    <div className="small-text dark-background dark-grey-font">
      {props.textArray.map((element, index) => (
        <span key={index} className={element.className}>
          {element.text}
        </span>
      ))}
    </div>
  );
};

const LeftProject: React.FC = () => {
  return (
    <div className="left-project">
      <div>
        <img className="full-width" src={ThimbleGif} alt="Thimble" />
      </div>
      <div className={"small-gap-left"}>
        <Title text="Thimble Landing Page" />
        <AlternatingColourText textArray={ThimbleText} />
      </div>
    </div>
  );
};

const RightProject: React.FC = () => {
  return (
    <div className="right-project">
      <div className={"small-gap-right"}>
        <Title text="Thimble Landing Page" />
        <AlternatingColourText textArray={ThimbleText} />
      </div>
      <div>
        <img className="full-width" src={ThimbleGif} alt="Thimble" />
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [hasBeenVisible, setHasBeenVisible] = useState(0);
  return (
    <div
      className="projects section-separator"
      style={{ opacity: hasBeenVisible }}
    >
      <RightSectionTitle title="Projects" icon={Lightbulb} alt={"projects"} />

      <SectionLoaderComponent
        cssClass="projects"
        setHasBeenVisible={setHasBeenVisible}
      />

      <div className="container">
        <LeftProject />
        <div className="project-separator">. . .</div>
        <RightProject />
      </div>
    </div>
  );
};

export default ProjectsSection;

const ThimbleText: TextWithColour[] = [
  {
    text:
      "Thimble is an ambitious start up offering a clothing rental service " +
      "to keep your wardrobe feeling fresh. The landing page was created using ",
    className: "dark-grey-font",
  },
  {
    text: "ReactJS",
    className: "neon-blue",
  },
  {
    text: ", with a ",
    className: "dark-grey-font",
  },
  {
    text: ".NET Core",
    className: "neon-blue",
  },
  {
    text: " hosted on ",
    className: "dark-grey-font",
  },
  {
    text: "AWS.",
    className: "neon-blue",
  },
];
