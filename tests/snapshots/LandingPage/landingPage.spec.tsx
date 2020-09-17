import * as React from "react";
import { create } from "react-test-renderer";
import LandingPage from "../../../src/components/LandingPage/LandingPage";

describe("Snapshot Sections", () => {
  it("Landing Page", () => {
    expect(create(<LandingPage />)).toMatchSnapshot();
  });
});
