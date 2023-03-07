import { render } from "@testing-library/react";
import Card from "./index";

describe("Card component", () => {
  const pieceName = "Starry Night";
  const pieceImg = "";
  const artistName = "Vincent van Gogh";

  it("should render piece name, image and artist name", () => {
    const { getByText, getByAltText } = render(
      <Card pieceName={pieceName} pieceImg={pieceImg} artistName={artistName} />
    );

    // Check if the piece name is rendered
    expect(getByText(pieceName)).toBeInTheDocument();

    // Check if the image is rendered with the correct source, height and width
    const imgElement = getByAltText("");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", pieceImg);
    expect(imgElement).toHaveAttribute("height", "300");
    expect(imgElement).toHaveAttribute("width", "300");

    // Check if the artist name is rendered
    expect(getByText(artistName)).toBeInTheDocument();
  });
});
