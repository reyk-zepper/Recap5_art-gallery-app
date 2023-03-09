import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  const router = useRouter();
  function handleButtonBack() {
    router.push("../ArtPieces");
  }
  return (
    <>
      <h4>Title: {title}</h4>
      <Image src={image} alt={title} width={300} height={300} priority />
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <button onClick={handleButtonBack}>... Back</button>
    </>
  );
}
