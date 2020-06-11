import React from "react";
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinFilled
} from "@ant-design/icons";

function renderSwitch(value, index) {
  let comp;
  switch (value.name) {
    case "Github":
      comp = (
        <a
          href={value.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined />
        </a>
      );
      break;
    case "Twitter":
      comp = (
        <a
          href={value.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterOutlined />
        </a>
      );
      break;
    case "LinkedIn":
      comp = (
        <a
          href={value.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinFilled />
        </a>
      );
      break;
    default:
      comp = null;
  }
  return comp;
}

export function Social(props) {
  console.log(props.socials);
  return (
    <div>{props.socials.map((elem, index) => renderSwitch(elem, index))}</div>
  );
}
