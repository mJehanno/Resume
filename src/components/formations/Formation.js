import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export function Formation(props) {
  return (
    <Card className="card">
      <Meta
        title={props.form.degree}
        description={
          props.form.startDate +
          " - " +
          props.form.endDate +
          " | " +
          props.form.school +
          " - " +
          props.form.city
        }
      />
      <ul>
        {props.form.learnt.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </Card>
  );
}
