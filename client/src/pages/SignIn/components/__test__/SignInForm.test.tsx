import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import SignInForm from "../SignInForm";

describe("SignInForm", () => {
  it("should render", () => {
    expect(<SignInForm />).toBeDefined();
  });
});
