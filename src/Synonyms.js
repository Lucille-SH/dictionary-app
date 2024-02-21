import React from "react";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <div>
        <h5>Synonyms:</h5>
        {props.data.map(function (synonyms, index) {
          return (
            <div key={index}>
              <p>◦ {synonyms}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
