import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './Components/TopNav/TopNav';
import Home from './Components/Home/Home';
import Scroll from './Components/Scroll/Scroll';



function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
				<Route path="/" component={TopNav} />
				</Switch>
				<Route path="/" component={Home}/>
			</Router>
			<Scroll/>
		</div>
	);
}

export default App;
