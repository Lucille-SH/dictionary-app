import React from "react";
import "./App.css";

export default function PhotoContent(props) {
  if (props.data) {
    return (
      <div className="PhotoContent text-center">
        <div className="row m-3">
          {props.data.map(function (photos, index) {
            return (
              <div className="p-3 col-md-4" key={index}>
                {" "}
                <a href={photos.url} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.landscape}
                    alt=""
                    className="img-fluid rounded shadow"></img>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
