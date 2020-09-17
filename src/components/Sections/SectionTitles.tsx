import * as React from "react";

interface Section {
  title: string;
  alt: string;
  icon: any;
}

const RightSectionTitle: React.FC<Section> = (props) => {
  return (
    <div className={`${props.alt}-text-title section-text-title`}>
      <div className="row">
        <div className="light-grey-font bar bar-left" />
        <div className={`section-title section-title-right`}>
          <span className="light-grey-font">{props.title}</span>
          <span className="neon-blue">.</span>
          <img src={props.icon} alt={props.alt} />
        </div>
      </div>
    </div>
  );
};

const LeftSectionTitle: React.FC<Section> = (props) => {
  return (
    <div className={`${props.alt}-text-title section-text-title`}>
      <div className="section-title section-title-left">
        <div className={"row"}>
          <img
            src={props.icon}
            alt={props.title}
            style={{ marginRight: "1%" }}
          />
          <span className="light-grey-font">{props.title}</span>
          <span className="neon-blue">.</span>
          <span className="light-grey-font bar bar-right" />
        </div>
      </div>
    </div>
  );
};

export { RightSectionTitle, LeftSectionTitle };
