import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WordContent from "./WordContent";
import "./App.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    return () => {
      setLoaded(false);
    };
  }, [submitted]);

  function handleResponse(response) {
    setLoaded(true);
    setResults(response.data);
  }

  function handleChange(event) {
    setWord(event.target.value.trim());
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    let apiKey = "66b4t441aodafc3797bfd80f9495a36b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div>
        <div className="Dictionary-header">
          <header>
            <h1>Dictionary</h1>
            <h2 className="pb-4">What word do you want to look up?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a word"
                onChange={handleChange}
              />
              <input type="submit" value="Search" />
            </form>
          </header>
        </div>
        <WordContent data={results} />
        <div>
          <footer className="pb-5">
            This page was coded by
            <a
              href="https://github.com/Lucille-SH"
              target="_blank"
              rel="noreferrer">
              {" "}
              Lucille Shankland
            </a>
            , is open-sourced on{" "}
            <a
              href="https://github.com/Lucille-SH/dictionary-app"
              target="_blank"
              rel="noreferrer">
              Github
            </a>{" "}
            and hosted by{" "}
            <a
              href="https://dictionary-app-ls.netlify.app/"
              target="_blank"
              rel="noreferrer">
              Netlify
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="Dictionary-header">
          <header>
            <h1>Dictionary</h1>
            <h2 className="pb-4">What word do you want to look up?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a word"
                onChange={handleChange}
                autoFocus="on"
              />
              <input type="submit" value="Search" />
            </form>
          </header>
        </div>
        <footer className="p-5">
          This page was coded by
          <a
            href="https://github.com/Lucille-SH"
            target="_blank"
            rel="noreferrer">
            {" "}
            Lucille Shankland
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/Lucille-SH/dictionary-app"
            target="_blank"
            rel="noreferrer">
            Github
          </a>{" "}
          and hosted by{" "}
          <a
            href="https://dictionary-app-ls.netlify.app/"
            target="_blank"
            rel="noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    );
  }
}
