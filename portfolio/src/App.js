import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Home from "./Components/Home/Home";
import Scroll from "./Components/Scroll/Scroll";
import About from "./Components/About/About";
import SideNav from "./Components/SideNav/SideNav";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
		  <Route path="/" component={TopNav} />
		  <Route path="/" component={SideNav} />
        </Switch>
        <div className="Page">
          <switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
          </switch>
        </div>
      </Router>
      <Scroll />
    </div>
  );
}

export default App;
