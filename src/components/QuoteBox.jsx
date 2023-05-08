import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./QuoteBox.css";

const QUOTES = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    quote:
      "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  {
    quote:
      "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    quote: "Either you run the day, or the day runs you.",
    author: "Jim Rohn",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quote:
      "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote:
      "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
    author: "Zig Ziglar",
  },
  {
    quote: "Life shrinks or expands in proportion to one’s courage.",
    author: "Anais Nin",
  },
  {
    quote:
      "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
    author: "Vincent Van Gogh",
  },
  {
    quote:
      "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle",
  },
  {
    quote:
      "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
];
function QuoteBox() {
  const [randomIndex, setRandomIndex] = useState(0);
  const [randomColor, setRandomColor] = useState(
    Math.floor(Math.random() * 16777215).toString(16)
  );
  const [quote, setQuote] = useState(QUOTES[1]);

  const handleClick = () => {
    setRandomIndex(Math.floor(Math.random() * QUOTES.length));
    setRandomColor(Math.floor(Math.random() * 16777215).toString(16));

    changeColor("#" + randomColor);
    setQuote(QUOTES[randomIndex]);
    //changeColor("#" + this.state.randomColor);
  };
  const getTweetLink = () => {
    return (
      "https://twitter.com/intent/tweet?text=" +
      '"' +
      quote.quote +
      '"' +
      quote.author
    );
  };
  const changeColor = (color) => {
    document.documentElement.style.setProperty("--background", color);
  };
  return (
    <div id="quote-container">
      <div id="quote-box">
        <h1 id="text">"{quote.quote}"</h1>
        <p id="author">-{quote.author}</p>

        <div className="buttons">
          <a
            href={getTweetLink()}
            target="_top"
            className="btn btn-link btn-lg"
            id="tweet-quote"
            title="Tweet this quote"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <button
            id="new-quote"
            onClick={handleClick}
            className="btn btn-primary "
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
