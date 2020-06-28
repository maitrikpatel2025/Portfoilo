import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Home from "./Components/Home/Home";
import Scroll from "./Components/Scroll/Scroll";
import SideNav from "./Components/SideNav/SideNav";
import MenuButton from "./Components/MenuButton/MenuButton";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" component={TopNav} />
            <Route path="/" component={SideNav} />
          </Switch>
          <div className="Page">
            <switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </switch>
            <Scroll />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
