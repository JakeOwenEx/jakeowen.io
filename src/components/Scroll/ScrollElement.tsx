import * as React from "react";
import { ReactElement } from "react";
import * as Scroll from "react-scroll";

const Element = Scroll.Element;

interface ScrollElement {
  name: string;
  component: ReactElement;
}
export const ScrollElement: React.FC<ScrollElement> = (props) => {
  return <Element name={props.name}>{props.component}</Element>;
};
