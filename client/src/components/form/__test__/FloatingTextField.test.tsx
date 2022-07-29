//create testing for floating text field
import React from "react";
import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import FloatingTextField from "../FloatingTextField";

describe("FloatingTextField", () => {
  it("should render", () => {
    expect(
      <FloatingTextField name="email" placeholder="Email Address" />
    ).toBeDefined();
  });

  it("should render with label", () => {
    expect(
      <FloatingTextField
        name="email"
        placeholder="Email Address"
        label="Email"
      />
    ).toBeDefined();
  });
});
