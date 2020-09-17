import * as React from "react";
import MenuSelection from "./MainMenu/Menu";
import { LandingPageLoader } from "./LandingPageLoader";
import { scaleAnimation } from "../../utils/Animations";
import { useState } from "react";

const NameTitle: React.FC = () => {
  return (
    <div className="name-text">
      <h1 className="name-title">Jake Owen.</h1>
      <h1 className="strap-line">Software Engineer.</h1>
    </div>
  );
};

const GetInTouchBox: React.FC = () => {
  const cssClass = "get-in-touch";
  const [backgroundColour, setBackgroundColour] = useState("#2B3E4D");
  function scaleAndUpdateBackgroundColour(
    scale: number,
    backgroundColour: string,
  ) {
    scaleAnimation(scale, cssClass);
    setBackgroundColour(backgroundColour);
  }
  return (
    <button
      onMouseOver={() => scaleAndUpdateBackgroundColour(1.05, "#32424F")}
      onMouseOut={() => scaleAndUpdateBackgroundColour(1, "#2B3E4D")}
      className={cssClass}
      style={{ backgroundColor: backgroundColour }}
    >
      Get In Touch
    </button>
  );
};

const LandingPage = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  React.useEffect(() => {
    if (!pageLoaded) {
      LandingPageLoader();
      setPageLoaded(true);
    }
  });

  return (
    <div className="landingPage">
      <GetInTouchBox />
      <div className="container name-container name">
        <NameTitle />
        <MenuSelection />
      </div>
    </div>
  );
};

export default LandingPage;
