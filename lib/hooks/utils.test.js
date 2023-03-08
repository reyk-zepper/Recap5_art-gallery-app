import PickRandomPiece from "./utils";

describe("PickRandomPiece", () => {
  it("returns a random item from the given array", () => {
    const data = ["apple", "banana", "cherry", "date", "elderberry"];
    const result = PickRandomPiece(data);

    expect(data).toContain(result);
  });
});
