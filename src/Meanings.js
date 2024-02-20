import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      {props.meanings.map(function (meanings, index) {
        return (
          <div key={index} className="indvMeanings">
            <h3 className="PartOfSpeech p-1">{meanings.partOfSpeech}</h3>
            <h4 className="Definition fw-light">"{meanings.definition}"</h4>
            <p>{meanings.synonyms}</p>
          </div>
        );
      })}
    </div>
  );
}
