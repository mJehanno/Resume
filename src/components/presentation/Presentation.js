import React from "react";
import { Social } from "./Social";

export function Presentation(props) {
  return (
    <div>
      <div className="presentation">
        <p>{props.text}</p>
        <img src={props.img} alt="profilPicture" />
      </div>
      <Social socials={props.social} />
    </div>
  );
}
