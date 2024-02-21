import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WordContent from "./WordContent";
import PhotoContent from "./PhotoContent";
import Footer from "./Footer";
import "./App.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.default);
  let [results, setResults] = useState("");
  let [photoResults, setPhotoResults] = useState("");
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

  function handlePhotoResponse(response) {
    setPhotoResults(response.data.photos);
  }

  function handleChange(event) {
    setWord(event.target.value.trim());
  }

  function search() {
    let apiKey = "66b4t441aodafc3797bfd80f9495a36b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${apiKey}`;
    axios.get(photoApiUrl).then(handlePhotoResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="Dictionary-header">
          <header>
            <h1 className="fw-bold">Dictionary</h1>
            <h2 className="pb-4 opacity-75">
              What word do you want to look up?
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a word..."
                onChange={handleChange}
                className="Search"
              />
              <input type="submit" value="Search" className="Submit" />
            </form>
          </header>
        </div>
        <WordContent data={results} />

        <div className="PhotoContent grid text-center">
          <div className="row m-5">
            <PhotoContent data={photoResults} />
          </div>
        </div>

        <div className="pb-5">
          <Footer />
        </div>
      </div>
    );
  } else {
    search();

    return (
      <div className="Dictionary">
        <div className="Dictionary-header">
          <header>
            <h1 className="fw-bold">Dictionary</h1>
            <h2 className="pb-4 opacity-75">
              What word do you want to look up?
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a word"
                onChange={handleChange}
                className="Search"
              />
              <input type="submit" value="Search" className="Submit" />
            </form>
          </header>
        </div>
      </div>
    );
  }
}
