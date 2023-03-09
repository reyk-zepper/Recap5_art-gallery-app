import Card from "../CardComponent";
import { globalDataContext } from "../../pages/_app";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function ArtPiecesPage() {
  const state = useContext(globalDataContext);
  console.log(state);

  const router = useRouter();
  function handleArtPieceClick(slug) {
    router.push(`../ArtPieces/${slug}`);
  }

  return (
    <>
      <h1>Pieces</h1>
      <div>
        {state.map((artwork) => {
          return (
            <li
              key={artwork.slug}
              onClick={() => handleArtPieceClick(artwork.slug)}
            >
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
