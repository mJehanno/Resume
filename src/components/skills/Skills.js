import React from "react";
import { Skill } from "./Skill";
import "./Skills.css";

export function Skills(props) {
  return (
    <div className="skills">
      {props.skills.map((element, index) => (
        <Skill
          img={element.img}
          value={element.value}
          name={element.name}
          key={index}
        />
      ))}
    </div>
  );
}
