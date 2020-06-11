import React from "react";
import { Card } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import * as _ from "lodash";
import "./Project.css";
const { Meta } = Card;

export function Project(props) {
  return (
    <Card
      className="project"
      actions={[
        <a href={props.project.repo} target="_blank" rel="noopener noreferrer">
          <GithubOutlined key="github" />
        </a>
      ]}
    >
      <Meta
        title={_.capitalize(props.project.name)}
        description={props.project.description}
      />
    </Card>
  );
}
