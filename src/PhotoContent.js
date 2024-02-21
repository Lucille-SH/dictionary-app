import React from "react";
import "./App.css";

export default function PhotoContent(props) {
  return props.data.map(function (photos, index) {
    return (
      <div className="p-3 col-sm-4" key={index}>
        {" "}
        <img
          src={photos.src.landscape}
          alt=""
          className="img-fluid rounded"></img>
      </div>
    );
  });
}
