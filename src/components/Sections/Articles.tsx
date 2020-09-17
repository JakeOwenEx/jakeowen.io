import * as React from "react";
import { LeftSectionTitle } from "./SectionTitles";
import BulletPoint from "../../assets/svgs/sectionIcons/resume/arrowbulletpoint.svg";
import ArticleIcon from "../../assets/svgs/sectionIcons/articles/article.svg";
import { SectionLoaderComponent } from "../LandingPage/LandingPageLoader";
import { useState } from "react";

interface Article {
  title: string;
}
const Article: React.FC<Article> = (props) => {
  return (
    <div className="row article">
      <img
        className="article-bullet-point"
        src={BulletPoint}
        alt="Bullet Point"
      />
      <div className="article-title light-grey-font">{props.title}</div>
    </div>
  );
};

const ArticlesSection: React.FC = () => {
  const [hasBeenVisible, setHasBeenVisible] = useState(0);
  return (
    <div
      className="articles section-separator"
      style={{ opacity: hasBeenVisible }}
    >
      <LeftSectionTitle title="Articles" icon={ArticleIcon} alt="articles" />
      <SectionLoaderComponent
        cssClass="articles"
        setHasBeenVisible={setHasBeenVisible}
      />
      <div className={"articles-box"}>
        <Article title="Recording a Webcam Video with React & Uploading it to S3" />
        <Article title="The extremely visible power of Lambdas" />
        <Article title="How to correctly migrate a JavaScript file to TypeScript" />
      </div>
    </div>
  );
};

export default ArticlesSection;
