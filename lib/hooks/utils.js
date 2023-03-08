// export function getRandon(number) {
//   return Math.floor(Math.random() * number);
// }
import React from "react";

export default function PickRandomPiece(data) {
  console.log(data);
  const randomIndex = Math.floor(Math.random() * data.length);
  console.log(data[randomIndex]);
  return data[randomIndex];
  // const randomPiece = data?.length ? pickRandomPiece(data) : null;
  // return randomPiece;
}
