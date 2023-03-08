import Card from "../CardComponent";
import { globalDataContext } from "../../pages/_app";
import { useContext } from "react";

export default function ArtPiecesPage() {
  const state = useContext(globalDataContext);
  console.log(state);
  return (
    <>
      <h1>Pieces</h1>
      <div>
        {state.map((artwork) => {
          return (
            <li key={artwork.slug}>
              <Card
                pieceName={artwork.name}
                pieceImg={artwork.imageSource}
                artistName={artwork.artist}
              ></Card>
            </li>
          );
        })}
      </div>
    </>
  );
}
