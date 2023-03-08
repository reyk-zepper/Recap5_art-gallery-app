import Image from "next/image";

export default function Card({ pieceName, pieceImg, artistName }) {
  return (
    <ul>
      <li>
        <p>{pieceName}</p>
      </li>
      <li>
        <Image src={pieceImg} alt="" height={300} width={300}></Image>
      </li>
      <li>
        <p>{artistName}</p>
      </li>
    </ul>
  );
}
