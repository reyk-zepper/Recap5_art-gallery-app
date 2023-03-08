import { render, screen } from "@testing-library/react";
import Navigation from "./index";

describe("Navigation", () => {
  it("renders navigation links", () => {
    render(<Navigation />);

    const artpiecesLink = screen.getByRole("link", { name: /artpieces/i });
    const spotlightLink = screen.getByRole("link", { name: /spotlight/i });

    expect(artpiecesLink).toBeInTheDocument();
    expect(spotlightLink).toBeInTheDocument();
  });
});
