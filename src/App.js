import React, { useState } from "react";
import "./App.css";

function App() {
  const quotesBank = [
    {
      quote: `"The world isn't perfect. But it's there for us, doing the best it can….that's what makes it so damn beautiful."`,
      author: "Roy Mustang",
    },
    {
      quote: `"Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder."`,
      author: "Gildarts Clive",
    },
    {
      quote: `"To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have."`,
      author: "Matsumoto Rangiku",
    },
    {
      quote: `"Knowing you're different is only the beginning. If you accept these differences you'll be able to get past them and grow even closer."`,
      author: "Miss Kobayashi",
    },
    {
      quote: `"Don't be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end."`,
      author: "Clare",
    },
    {
      quote: `"If you don't take risks, you can't create a future!"`,
      author: "Monkey D. Luffy",
    },
    {
      quote: `"We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let's not disappear like a firework and continue to shine.. forever."`,
      author: "Hitsugaya Toshiro",
    },
    {
      quote: `"If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don't need them and their selfish ideas."`,
      author: "Alibaba Saluja",
    },
    {
      quote: `"When you hit the point of no return, that's the moment it truly becomes a journey. If you can still turn back, it's not really a journey."`,
      author: "Hinata Miyake",
    },
    {
      quote: `"A person grows up when he's able to overcome hardships. Protection is important, but there are some things that a person must learn on his own."`,
      author: "Jiraiya",
    },
  ];

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * quotesBank.length)
  );

  const [quote, setQuote] = useState(quotesBank[randomNumber].quote);

  const [author, setAuthor] = useState(quotesBank[randomNumber].author);

  const changeQuote = () => {
    setRandomNumber(Math.floor(Math.random() * quotesBank.length));

    setQuote(quotesBank[randomNumber].quote);
    setAuthor(quotesBank[randomNumber].author);
  };

  return (
    <div className="App">
      <div className="App-container" id="quote-box">
        <p id="text">{quote} </p>
        <h4 id="author">{author}</h4>
        <button id="new-quote" onClick={changeQuote}>
          New quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
          target="_blank"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

export default App;
