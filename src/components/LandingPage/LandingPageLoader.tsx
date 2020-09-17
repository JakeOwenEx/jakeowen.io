import * as React from "react";
import { useState } from "react";
import handleViewport from "react-in-viewport";
import { AnimationTimeline } from "../../utils/Animations";

export const LandingPageLoader = (): DocumentTimeline => {
  const animationTl = new AnimationTimeline("linear");
  return animationTl
    .addFadeIn("name-text", 50, 700)
    .addFadeIn("menu-selection", 50, 1000)
    .addFadeIn("get-in-touch", -50, 500)
    .addFadeIn("GitHubLogo", 50, 300)
    .addFadeIn("MediumLogo", 50, 300)
    .addFadeIn("LinkedInLogo", 50, 300)
    .addFadeIn("social-icon-grey-bar", 50, 300)
    .getTimeline();
};

const SectionLoader = (cssClass: string): DocumentTimeline => {
  const animationTl = new AnimationTimeline("linear");
  return animationTl
    .addFadeIn(`${cssClass}-text-title`, 50, 700)
    .addFadeIn(`${cssClass}-box`, 50, 1000)
    .getTimeline();
};

interface Loader {
  cssClass: string;
  setHasBeenVisible(opacity: number): void;
  inViewport?: boolean;
  forwardedRef?: string;
}

const SectionLoaderViewport: React.FC<Loader> = (props) => {
  const { inViewport, forwardedRef } = props;
  const [animated, setAnimated] = useState(false);
  if (inViewport && !animated) {
    SectionLoader(props.cssClass);
    setAnimated(true);
    props.setHasBeenVisible(1);
  }
  return <div ref={forwardedRef} />;
};
export const SectionLoaderComponent = handleViewport(SectionLoaderViewport);
