import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      {props.meanings.map(function (meanings, index) {
        if (meanings.example) {
          return (
            <div key={index} className="indvMeanings">
              <h3 className="PartOfSpeech">{meanings.partOfSpeech}</h3>
              <p className="Definition fw-medium">{meanings.definition}</p>
              <p className="Example fst-italic">"{meanings.example}"</p>
              <Synonyms data={meanings.synonyms} />
            </div>
          );
        } else {
          return (
            <div key={index} className="indvMeanings">
              <h3 className="PartOfSpeech">{meanings.partOfSpeech}</h3>
              <p className="Definition fw-medium">{meanings.definition}</p>
              <Synonyms data={meanings.synonyms} />
            </div>
          );
        }
      })}
    </div>
  );
}
