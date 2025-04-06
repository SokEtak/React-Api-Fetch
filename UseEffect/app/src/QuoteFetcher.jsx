import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  console.log("render!!");
  //both work same
  //method 1
  //   useEffect(function () {
  //     const getInitQuote = async () => {
  //       const response = await fetch(RANDOM_QUOTE_URL);
  //       const jsonResponse = await response.json();
  //       const randomQuote = jsonResponse.quote;
  //       console.log(randomQuote);
  //       setQuote(randomQuote);
  //     };
  //     getInitQuote();
  //     console.log("useEffect is being run");
  //   }, []);

  //method 2
  useEffect(() => {
    fetchQuote();
  },[]);
  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    console.log(randomQuote);
    setQuote(randomQuote);
  }
  return (
    <div>
      <button onClick={fetchQuote}>Get The Quote</button>
      <h1>{quote.text}</h1>
      <h4 style={{ textDecoration: "italic" }}>{quote.author}</h4>
    </div>
  );
}
export default QuoteFetcher;
