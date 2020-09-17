import * as React from "react";
import { hot } from "react-hot-loader";
import "../assets/scss/website.scss";
import LandingPage from "./LandingPage/LandingPage";
import AboutMeSection from "./Sections/AboutMeSection";
import SocialIconBar from "./SocialIconBar/SocialIconBar";
import ResumeSection from "./Sections/ResumeSection";
import ProjectsSection from "./Sections/Projects";
import ArticlesSection from "./Sections/Articles";
import { ScrollElement } from "./Scroll/ScrollElement";

const App: React.FC = () => {
  return (
    <div className="background">
      <SocialIconBar />
      <LandingPage />
      <ScrollElement name={"about-me"} component={<AboutMeSection />} />
      <ScrollElement name={"resume"} component={<ResumeSection />} />
      <ScrollElement name={"projects"} component={<ProjectsSection />} />
      <ScrollElement name={"articles"} component={<ArticlesSection />} />
    </div>
  );
};

declare let module: Record<string, unknown>;
export default hot(module)(App);
