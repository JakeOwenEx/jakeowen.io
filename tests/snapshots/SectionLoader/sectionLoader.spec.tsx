import * as React from "react";
import { create } from "react-test-renderer";
import { SectionLoaderComponent } from "../../../src/components/LandingPage/LandingPageLoader";

describe("Snapshot Sections", () => {
  it("Section Loader Component", () => {
    expect(create(<SectionLoaderComponent />)).toMatchSnapshot();
  });
});
