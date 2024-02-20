import React from "react";
import Meanings from "./Meanings";

import "./App.css";

export default function WordContent(props) {
  let word = props.data.word;
  let phonetic = props.data.phonetic;
  let meanings = props.data.meanings;

  return (
    <div className="WordContent container">
      <h3 className="Word fw-bold fs-1">{word}</h3>
      <p className="Phonetic fst-italic">{phonetic}</p>
      <Meanings meanings={meanings} />
    </div>
  );
}
