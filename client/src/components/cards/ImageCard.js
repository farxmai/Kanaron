import React from "react";
import { ALTER_IMG } from "../../constants";
import "./ImageCard.css";

export function ImageCard({ text, url }) {
  return (
    <div className="card-wrapper">
      <div className="img-wrapper">
        <img
          className="img-wrapper"
          src={url || ALTER_IMG}
          alt={text}
          title={text}
        />
      </div>
      <div className="text-wrapper">
        <b>{text}</b>
      </div>
    </div>
  );
}
