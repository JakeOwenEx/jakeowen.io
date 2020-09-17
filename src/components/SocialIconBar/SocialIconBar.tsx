import * as React from "react";
import GitHubLogo from "../../assets/svgs/socialIcons/github.svg";
import MediumLogo from "../../assets/svgs/socialIcons/medium.svg";
import LinkedInLogo from "../../assets/svgs/socialIcons/linkedin.svg";

interface Icon {
  alt: string;
  src: any;
}

const SocialIconImage: React.FC<Icon> = (props) => {
  return (
    <div>
      <a target="_blank">
        <img
          className={`social-icon ${props.alt}`}
          src={props.src}
          alt={props.alt}
        />
      </a>
    </div>
  );
};

const SocialIconBar: React.FC = () => {
  return (
    <div className="social-icon-bar">
      <SocialIconImage src={GitHubLogo} alt="GitHubLogo" />
      <SocialIconImage src={MediumLogo} alt="MediumLogo" />
      <SocialIconImage src={LinkedInLogo} alt="LinkedInLogo" />
      <div className="social-icon-grey-bar" />
    </div>
  );
};

export default SocialIconBar;
