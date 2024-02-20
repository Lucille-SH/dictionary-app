import React from "react";

export default function Meanings(props) {
  return (
    <div>
      {props.meanings.map(function (meanings, index) {
        return (
          <div key={index}>
            <h3 className="PartOfSpeech p-1">{meanings.partOfSpeech}</h3>
            <h4 className="Definition fw-light">"{meanings.definition}""</h4>
            <p>{meanings.synonyms}</p>
          </div>
        );
      })}
    </div>
  );
}
