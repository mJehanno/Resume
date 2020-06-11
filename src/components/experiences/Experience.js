import React from "react";
import { Card, List } from "antd";
import "./Experience.css";
const { Meta } = Card;

export function Experience(props) {
  let meta;
  if (props.exp.endDate === "") {
    meta = (
      <Meta
        title={props.exp.title}
        description={props.exp.startDate + " - current"}
      />
    );
  } else {
    meta = (
      <Meta
        title={props.exp.title}
        description={props.exp.startDate + " - " + props.exp.endDate}
      />
    );
  }

  return (
    <Card
      className="card"
      cover={<img alt={props.exp.company} src={props.exp.logo} />}
    >
      {meta}
      <div className="missions">
        <h3>Missions :</h3>
        <List
          itemLayout="horizontal"
          dataSource={props.exp.missions}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta title={item} />
            </List.Item>
          )}
        />
      </div>
    </Card>
  );
}
