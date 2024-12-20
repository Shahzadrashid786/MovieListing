import React, { render, screen } from "@testing-library/react";
import MovieDescription from "./MovieDescription.tsx";

describe("Greeting component", () => {
  test("renders Directed by as a text", () => {
    render(<MovieDescription />);
    const element = screen.queryByText("Directed by", { exact: false });
    expect(element).toBeNull();
  });
});
