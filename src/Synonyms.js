import React from "react";

export default function Synonyms(props) {
  if (props.data) {
    return props.data.map(function (synonyms, index) {
      return (
        <span className="Synonyms" key={index}>
          <p>{synonyms}</p>
        </span>
      );
    });
  } else {
    return null;
  }
}
