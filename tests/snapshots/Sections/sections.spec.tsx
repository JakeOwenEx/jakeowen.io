import { create } from "react-test-renderer";
import AboutMeSection from "../../../src/components/Sections/AboutMeSection";
import * as React from "react";
import {
  LeftSectionTitle,
  RightSectionTitle,
} from "../../../src/components/Sections/SectionTitles";
import ProjectsSection from "../../../src/components/Sections/Projects";
import ArticlesSection from "../../../src/components/Sections/Articles";
import ResumeSection from "../../../src/components/Sections/ResumeSection";
import ObjMock from "../../__mocks__/fileMock";
import { setupIntersectionObserverMock } from "../../utils/intersectionObserverMock";

describe("Snapshot Sections", () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });
  it("About Me", () => {
    expect(create(<AboutMeSection />)).toMatchSnapshot();
  });
  it("Projects", () => {
    expect(create(<ProjectsSection />)).toMatchSnapshot();
  });
  it("Articles", () => {
    expect(create(<ArticlesSection />)).toMatchSnapshot();
  });
  it("Resume", () => {
    expect(create(<ResumeSection />)).toMatchSnapshot();
  });
  describe("Section Titles", () => {
    it("Left", () => {
      expect(
        create(
          <LeftSectionTitle alt={"alt"} icon={ObjMock} title={"some-title"} />,
        ),
      ).toMatchSnapshot();
    });
    it("Right", () => {
      expect(
        create(
          <RightSectionTitle alt={"alt"} icon={ObjMock} title={"some-title"} />,
        ),
      ).toMatchSnapshot();
    });
  });
});
