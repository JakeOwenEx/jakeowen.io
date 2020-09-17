import * as React from "react";
import { LeftSectionTitle } from "./SectionTitles";
import Resume from "../../assets/svgs/sectionIcons/resume/resume.svg";
import BulletPoint from "../../assets/svgs/sectionIcons/resume/arrowbulletpoint.svg";
import { SectionLoaderComponent } from "../LandingPage/LandingPageLoader";
import { useState } from "react";

const JobOverview: React.FC = () => {
  return (
    <div>
      <div className="job-overview dark-grey-font">Software Engineer</div>
      <div className="job-overview dark-grey-font">Sep 2018 - Present</div>
    </div>
  );
};

const Selection: React.FC = () => {
  return (
    <div>
      <div className="row outer">
        <img
          className="resume-selection-arrow"
          src={BulletPoint}
          alt="Bullet Point"
        />
        <div className="resume-selection-title">Tesco</div>
      </div>
      <JobOverview />
    </div>
  );
};

interface BulletPointText {
  text: string;
}
const BulletPointText: React.FC<BulletPointText> = (props) => {
  return (
    <div className="job-title-bulletpoint">
      <span className="neon-blue">-</span>
      <span> </span>
      <span className="dark-grey-font">{props.text}</span>
    </div>
  );
};

const ResumeText: React.FC = () => {
  return (
    <div className="job-text">
      <div className="job-title-text light-grey-font">Tesco</div>
      <BulletPointText text="Assisted development of an AWS Lambda estate for SMS, emails & push notifications to replace a legacy service." />
      <BulletPointText text="Led and solved multiple major incidents for APIs that receive 1m+ requests daily. Responsibilities comprised of liaising with cross-country teams, mitigating the issue & conducting root cause analysis." />
      <BulletPointText text="Regularly present brown bags to Tesco Technology to advertise my teams APIs & display new technologies to an international enterprise." />
    </div>
  );
};

const ResumeSection: React.FC = () => {
  const [hasBeenVisible, setHasBeenVisible] = useState(0);
  return (
    <div
      className="resume section-separator"
      style={{ opacity: hasBeenVisible }}
    >
      <LeftSectionTitle title="Resume" icon={Resume} alt={"resume"} />
      <SectionLoaderComponent
        cssClass="resume"
        setHasBeenVisible={setHasBeenVisible}
      />
      <div className="row resume-box">
        <div className="row" style={{ width: "100%" }}>
          <div style={{ width: "11vw" }}>
            <Selection />
            <Selection />
          </div>
          <div className="resume-separator" />
          <ResumeText />
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
