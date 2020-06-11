import React from "react";
import { Card, Progress } from "antd";
import "./Skill.css";
const { Meta } = Card;

export function Skill(props) {
  let progress;
  if (props.value >= 70) {
    progress = <Progress percent={props.value} strokeColor="green" />;
  } else if (props.value <= 25) {
    progress = <Progress percent={props.value} strokeColor="orange" />;
  } else {
    progress = <Progress percent={props.value} />;
  }

  return (
    <Card className="card" cover={<img alt="example" src={props.img} />}>
      <Meta title={props.name} />
      {progress}
    </Card>
  );
}
