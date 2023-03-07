import Image from "next/image";

export default function Card({ pieceName, pieceImg, artistName }) {
  return (
    <div>
      <li>
        <p>{pieceName}</p>
      </li>
      <li>
        <Image src={pieceImg} alt="" height={300} width={300}></Image>
      </li>
      <div>
        <p>{artistName}</p>
      </div>
    </div>
  );
}
