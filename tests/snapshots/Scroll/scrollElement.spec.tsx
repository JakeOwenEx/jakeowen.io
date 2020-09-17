import * as React from "react";
import { create } from "react-test-renderer";
import { ScrollElement } from "../../../src/components/Scroll/ScrollElement";
import ObjMock from "../../__mocks__/fileMock";

describe("Snapshot Sections", () => {
  it("Scroll Element", () => {
    expect(
      create(<ScrollElement name={"any-name"} component={ObjMock} />),
    ).toMatchSnapshot();
  });
});
