import React from "react";
import Meanings from "./Meanings";

import "./App.css";

export default function WordContent(props) {
  let word = props.data.word;
  let phonetic = props.data.phonetic;
  let meanings = props.data.meanings;

  return (
    <div className="WordContent container">
      <div className="Word fw-bold ps-2">
        {word} <span className="Phonetic fw-light fs-4">| {phonetic}</span>
      </div>

      <Meanings meanings={meanings} />
    </div>
  );
}
