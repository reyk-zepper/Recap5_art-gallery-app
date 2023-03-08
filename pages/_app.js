import GlobalStyle from "../styles";
import useSWR from "swr";
import ArtPiecesPage from "../components/ArtPieces";
import { createContext } from "react";
import PickRandomPiece from "../lib/hooks/utils.js";

export const globalDataContext = createContext();

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading || !pieces) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Failed to load</div>;
  }
  PickRandomPiece(pieces);
  return (
    <globalDataContext.Provider value={pieces}>
      <GlobalStyle />
      <Component {...pageProps} />
    </globalDataContext.Provider>
  );
}
