import React from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Presentation } from "./components/presentation/Presentation";
import { Skills } from "./components/skills/Skills";
import { Experiences } from "./components/experiences/Experiences";
import * as data from "./model.json";
import { Projects } from "./components/projects/Projects";
import { Formations } from "./components/formations/Formations";

const { TabPane } = Tabs;

export default function App() {
  return (
    <Router>
      <Tabs defaultActiveKey="1" className="tabs">
        <TabPane tab={<Link to="/presentation">Presentation</Link>} key="1">
          <Redirect to="/presentation" />
        </TabPane>

        <TabPane tab={<Link to="/skills">Skills</Link>} key="2">
          <Redirect to="/skills" />
        </TabPane>

        <TabPane tab={<Link to="/experiences">Experiences</Link>} key="3">
          <Redirect to="/experiences" />
        </TabPane>
        <TabPane tab={<Link to="/formations">Formations</Link>} key="4">
          <Redirect to="/formations" />
        </TabPane>
        <TabPane tab={<Link to="/projects">Projects</Link>} key="5">
          <Redirect to="/projects" />
        </TabPane>
      </Tabs>

      <Switch>
        <Route path="/presentation">
          <Presentation
            text={data.presentation.text}
            img={data.presentation.img}
            social={data.presentation.social}
          />
        </Route>
        <Route path="/skills">
          <Skills skills={data.skills.dev} />
          <Skills skills={data.skills.ops} />
          <Skills skills={data.skills.lang} />
        </Route>
        <Route path="/experiences">
          <Experiences exp={data.experiences} />
        </Route>
        <Route path="/formations">
          <Formations formations={data.formations} />
        </Route>
        <Route path="/projects">
          <Projects projects={data.projects} />
        </Route>
        <Route path="/admin">
          <div>Welcome to admin panel</div>
        </Route>
      </Switch>
    </Router>
  );
}
