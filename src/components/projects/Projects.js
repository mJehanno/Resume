import React from "react";
import { Project } from "./Project";
import "./Projects.css";

export function Projects(props) {
  return (
    <div className="projects">
      {props.projects.map(elem => (
        <Project project={elem} />
      ))}
    </div>
  );
}
