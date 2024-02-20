import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WordContent from "./WordContent";
import "./App.css";

export default function Dictionary(props) {
  let [word, setWord] = useState("");
  let [definition, setDefinition] = useState("");
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    return () => {
      setLoaded(false);
    };
  }, [word]);

  function handleResponse(response) {
    console.log(response.data.word);
    setLoaded(true);
    setDefinition({
      word: response.data.word,
      phonetic: response.data.phonetic,
      wordDefinition: response.data.meanings[0].definition,
      synonyms: response.data.meanings[0].synonyms[0],
      partOfSpeech: response.data.meanings[0].partOfSpeech,
    });
  }

  function handleChange(event) {
    setWord(event.target.value.trim());
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "66b4t441aodafc3797bfd80f9495a36b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div>
        <div className="Dictionary">
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
        <WordContent data={definition} />
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
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
    );
  }
}
