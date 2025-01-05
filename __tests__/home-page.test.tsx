/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";

describe("Home Page", () => {
  it("render queue status", () => {
    render(<Page />);
    expect(screen.getByText("Queue Status:")).toBeInTheDocument();
  });

  it("render source code link", () => {
    render(<Page />);
    expect(screen.getByText("Source Code")).toBeInTheDocument();
  });
});
