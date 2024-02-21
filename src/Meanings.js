import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.map(function (meanings, index) {
        if (meanings.example) {
          return (
            <div key={index} className="indvMeanings shadow">
              <h3 className="PartOfSpeech pb-2">{meanings.partOfSpeech}</h3>
              <p className="Definition fw-normal">▷ {meanings.definition}</p>
              <p className="Example fst-italic opacity-75">
                "{meanings.example}"
              </p>
              <Synonyms data={meanings.synonyms} />
            </div>
          );
        } else {
          return (
            <div key={index} className="indvMeanings shadow">
              <h3 className="PartOfSpeech pb-2">{meanings.partOfSpeech}</h3>
              <p className="Definition fw-normal">▷ {meanings.definition}</p>
              <Synonyms data={meanings.synonyms} />
            </div>
          );
        }
      })}
    </div>
  );
}
