import { useState } from "react"
import { useEffect } from "react"
import StarRating from "./StarRating"


function getRandomQuotes(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

export default function App() {
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuotes(quotes))

  }
  return (
    <div className="container">
      <div>
        <h2 >Project 3: Quote Generator</h2>
      </div>
      <div className="section-quote">
        <button className="btn" onClick={() => getNewQuote()}>New Quote</button>
        <h3>{quote?.text}</h3>
        <p>-{quote?.author}</p>
      </div>
      <div className="rating">
      <StarRating MaxRating={10}/>
      </div>
    </div>
  )
}
