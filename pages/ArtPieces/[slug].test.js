import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import { globalDataContext } from "../_app";
import ArtPieceDetails from "./[slug].js";

// jest.mock("next/router");

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { slug: "art-piece-1" },
  }),
}));

// jest.mock("next/router", () => ({
//   useRouter: () => ({ query: routerQuery }),
// }));

describe("ArtPieceDetailsPage", () => {
  it("should display the details of the current art piece", () => {
    // Define mock data for globalData and router query
    const globalData = [
      {
        slug: "art-piece-1",
        imageSource: "/image-1.jpg",
        name: "Art Piece 1",
        artist: "Artist 1",
        year: 2000,
        genre: "Genre 1",
      },
      {
        slug: "art-piece-2",
        imageSource: "/image-2.jpg",
        name: "Art Piece 2",
        artist: "Artist 2",
        year: 2001,
        genre: "Genre 2",
      },
    ];

    // Mock the useRouter hook to return the router query
    // useRouter.mockReturnValue({ query: routerQuery });

    // Mock the useContext hook to return the global data
    // useContext.mockReturnValue(globalData);

    // Render the ArtPieceDetails component
    console.log("before render");
    render(
      <globalDataContext.Provider value={globalData}>
        <ArtPieceDetails />
      </globalDataContext.Provider>
    );
    console.log("after render");

    // Expect the component to display the details of the current art piece
    expect(screen.getByText("Title: Art Piece 1")).toBeInTheDocument();
    expect(screen.getByAltText("Art Piece 1")).toBeInTheDocument();
    expect(screen.getByText("Artist: Artist 1")).toBeInTheDocument();
    expect(screen.getByText("Year: 2000")).toBeInTheDocument();
    expect(screen.getByText("Genre: Genre 1")).toBeInTheDocument();
  });
});
// import { render, screen } from "@testing-library/react";
// import { useRouter } from "next/router";
// import { useContext } from "react";
// import { globalDataContext } from "../_app";
// import ArtPieceDetails from "../../components/ArtPiecesDetails";

// // Mock the entire next/router module
// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));

// describe("ArtPieceDetailsPage", () => {
//   it("should display the details of the current art piece", () => {
//     // Define mock data for globalData and router query
//     const globalData = [
//       {
//         slug: "art-piece-1",
//         imageSource: "/image-1.jpg",
//         name: "Art Piece 1",
//         artist: "Artist 1",
//         year: 2000,
//         genre: "Genre 1",
//       },
//       {
//         slug: "art-piece-2",
//         imageSource: "/image-2.jpg",
//         name: "Art Piece 2",
//         artist: "Artist 2",
//         year: 2001,
//         genre: "Genre 2",
//       },
//     ];
//     const routerQuery = { slug: "art-piece-1" };

//     // Provide the implementation for the useRouter function
//     useRouter.mockReturnValue({ query: routerQuery });

//     // Mock the useContext hook to return the global data
//     useContext.mockReturnValue(globalData);

//     // Render the ArtPieceDetails component
//     render(<ArtPieceDetails />);

//     // Expect the component to display the details of the current art piece
//     expect(screen.getByText("Title: Art Piece 1")).toBeInTheDocument();
//     expect(screen.getByAltText("Art Piece 1")).toBeInTheDocument();
//     expect(screen.getByText("Artist: Artist 1")).toBeInTheDocument();
//     expect(screen.getByText("Year: 2000")).toBeInTheDocument();
//     expect(screen.getByText("Genre: Genre 1")).toBeInTheDocument();
//   });
// });
