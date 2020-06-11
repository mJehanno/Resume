import React from "react";
import { Timeline } from "antd";
import { Experience } from "./Experience";

export function Experiences(props) {
  return (
    <Timeline>
      {props.exp.map(elem => (
        <Timeline.Item>
          <Experience exp={elem} />
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
