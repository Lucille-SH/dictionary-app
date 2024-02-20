import React from "react";

export default function Synonyms(props) {
  return (
    <div>
      {props.synonyms.map(function (synonyms, index) {
        return (
          <div key={index}>
            <p>{synonyms.synonyms}</p>
          </div>
        );
      })}
    </div>
  );
}
