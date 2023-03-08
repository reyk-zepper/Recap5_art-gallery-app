import React from "react";
import { globalDataContext } from "./_app";
import { useContext } from "react";
import ArtPiecesPage from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";

export default function Spotlightpage() {
  const globalData = React.useContext(globalDataContext);
  //console.log(globalData);
  return (
    <>
      {/* <ArtPiecesPage /> */}
      <Spotlight />
    </>
  );
}
