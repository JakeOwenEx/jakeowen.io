// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { create } from "react-test-renderer";
import SocialIconBar from "../../../src/components/SocialIconBar/SocialIconBar";

describe("Social bar Snapshot ", () => {
  it("Social Icon Bar", () => {
    expect(create(<SocialIconBar />)).toMatchSnapshot();
  });
});
