import React from "react";
import renderer from "react-test-renderer";
import { it } from "@jest/globals";
import App from "../src/App";

it("renders correctly", () => {
  renderer.create(<App />);
});
