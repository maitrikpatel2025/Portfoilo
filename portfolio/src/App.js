import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Home from "./Components/Home/Home";
import Scroll from "./Components/Scroll/Scroll";
import About from "./Components/About/About";
import SideNav from "./Components/SideNav/SideNav";
import MenuButton from "./Components/MenuButton/MenuButton";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" component={TopNav} />
            <Route path="/" component={MenuButton} />
          </Switch>
          <div className="Page">
            <switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/course" component={About} />
            </switch>
            <Scroll />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
