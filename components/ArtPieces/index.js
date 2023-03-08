import Card from "../CardComponent";

export default function ArtPiecesPage({ data }) {
  return (
    <>
      <h1>Pieces</h1>
      <div>
        {data.map((artwork) => {
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
