import React from "react";
import Image from "next/image";
import { useContext } from "react";
import PickRandomPiece from "../../lib/hooks/utils";
import { globalDataContext } from "../../pages/_app";

export default function Spotlight() {
  const data = useContext(globalDataContext);
  const randomArray = PickRandomPiece(data);
  console.log(randomArray);
  const { title, artist, imageSource, name } = randomArray;
  return (
    <>
      <h2>🖼️ Spotlight {title}</h2>
      <div>
        <p>{name}</p>
        <Image src={imageSource} alt={title} width={500} height={500} />
        <p>{title}</p>
        <p>{artist}</p>
      </div>
    </>
  );
}
//<img src={} alt="Art piece" />
//  <p>Artist: {artist}</p>

// This component displays the image and artist name passed as props, along with a heading "Spotlight".
// To test the component, we can render it with some sample props and check if the output matches the expected result. For example:

// it("renders the spotlight with image and artist", () => {
//   render(
//     <Spotlight
//       image="https://example.com/artwork.jpg"
//       artist="John Smith"
//     />
//   );

//   expect(screen.getByRole("heading")).toHaveTextContent("Spotlight");
//   expect(screen.getByRole("img")).toHaveAttribute("src", "https://example.com/artwork.jpg");
//   expect(screen.getByText("Artist: John Smith")).toBeInTheDocument();
// });

// export const fetcher = (url) => fetch(url).then((res) => res.json());

// export const URL = "https://example-apis.vercel.app/api/art";

// export function getRandon(number) {
//   return Math.floor(Math.random() * number);
// }

// import Image from "next/image";

// import { globalDataContext } from "../../pages/_app";
// import { getRandon } from "../../lib/utils";

// export default function Spotlight() {
//   const globalData = useContext(globalDataContext);
//   const randomPiece = globalData[getRandon(globalData.length)];
//   return (
//     <div>
//       <Image
//         src={randomPiece.imageSource}
//         alt={randomPiece.name}
//         width={300}
//         height={300}
//         priority
//       />
//       <p>Artist: {randomPiece.artist}</p>
//     </div>
//   );
// }
