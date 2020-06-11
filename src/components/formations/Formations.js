import React from "react";
import { Timeline } from "antd";
import { Formation } from "./Formation";

export function Formations(props) {
  return (
    <Timeline>
      {props.formations.map((elem, index) => (
        <Timeline.Item key={index}>
          <Formation form={elem} />
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
