import { useRouter } from "next/router";
import { useContext } from "react";
import { globalDataContext } from "../_app";
import ArtPieceDetails from "../../components/ArtPiecesDetails";

export default function ArtPieceDetailsPage() {
  const globalData = useContext(globalDataContext);
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);
  const currentArtPiece = globalData.find((data) => data.slug === slug);
  if (!currentArtPiece) {
    return <h1>ERROR 404</h1>;
  }
  const { imageSource, name, artist, year, genre } = currentArtPiece;
  return (
    <ArtPieceDetails
      image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
