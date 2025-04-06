import { useEffect, useState } from "react";
//this might different from colt
import { CircularProgress } from "@mui/material"; // Import Material UI CircularProgress

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteFetcherLoader() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      const response = await fetch(RANDOM_QUOTE_URL);
      const jsonResponse = await response.json();
      const randomQuote = jsonResponse.quote;
      setQuote(randomQuote);
      setIsLoading(false); // Set loading to false once the data is fetched
    }
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {isLoading ? (
        <CircularProgress /> // Display Material UI CircularProgress while loading
      ) : (
        <>
          <h1>{quote.text}</h1>
          <h4 style={{ textDecoration: "italic" }}>{quote.author}</h4>
        </>
      )}
    </div>
  );
}

export default QuoteFetcherLoader;
