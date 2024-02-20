import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function Dictionary(props) {
  let [word, setWord] = useState("");
  let [definition, setDefinition] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleChange(event) {
    setWord(event.target.value.trim());
  }

  function handleSubmit(event) {
    event.preventDefault();
    setDefinition("strong and barely controllable emotion.");
    setLoaded(true);
    return definition;
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
        <div className="Word">{word} </div>
        <div className="Definition fst-italic">"{definition}"</div>
      </div>
    );
  }
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
