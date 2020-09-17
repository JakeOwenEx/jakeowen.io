import * as React from "react";
import * as Scroll from "react-scroll";
import { useState } from "react";
import { scaleAnimation } from "../../../utils/Animations";

function scrollToElement(elementName: string) {
  const scroll = Scroll.scroller;
  scroll.scrollTo(elementName, {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: -100,
  });
}

interface MenuProps {
  scrollElementName: string;
  number: number;
  title: string;
  setHoveredMenuItem(item: string): void;
  activeMenuItem: string;
}

function componentIsHoveredOver(
  activeItem: string,
  componentName: string,
): boolean {
  return activeItem === componentName || activeItem === "";
}

const MenuItem: React.FC<MenuProps> = (props) => {
  const colour = componentIsHoveredOver(
    props.activeMenuItem,
    props.scrollElementName,
  )
    ? "#ABB4BB"
    : "#758693";

  return (
    <button
      onMouseOver={() => props.setHoveredMenuItem(props.scrollElementName)}
      onMouseOut={() => props.setHoveredMenuItem("")}
      className={`menu-selection menu-selection-${props.scrollElementName}`}
      onClick={() => scrollToElement(props.scrollElementName)}
    >
      <span className="neon-blue">{props.number}. </span>
      <span style={{ color: colour }}>{props.title}</span>
      <span className="neon-blue">.</span>
    </button>
  );
};

const MenuSelection: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  function setHoveredMenuItemAndScale(item: string) {
    const menuItemToAnimate = item === "" ? activeMenuItem : item;
    const scale = item === "" ? 1 : 1.3;
    setActiveMenuItem(item);
    scaleAnimation(scale, `menu-selection-${menuItemToAnimate}`);
  }

  return (
    <div className="row menu-container" style={{ marginTop: "5%" }}>
      <div className="col-md-5">
        <MenuItem
          number={1}
          title="About Me"
          scrollElementName="about-me"
          setHoveredMenuItem={setHoveredMenuItemAndScale}
          activeMenuItem={activeMenuItem}
        />
        <MenuItem
          number={3}
          title="Projects"
          scrollElementName="projects"
          setHoveredMenuItem={setHoveredMenuItemAndScale}
          activeMenuItem={activeMenuItem}
        />
      </div>
      <div className="col-md-5">
        <MenuItem
          number={2}
          title="Resume"
          scrollElementName="resume"
          setHoveredMenuItem={setHoveredMenuItemAndScale}
          activeMenuItem={activeMenuItem}
        />
        <MenuItem
          number={4}
          title="Articles"
          scrollElementName="articles"
          setHoveredMenuItem={setHoveredMenuItemAndScale}
          activeMenuItem={activeMenuItem}
        />
      </div>
    </div>
  );
};

export default MenuSelection;
