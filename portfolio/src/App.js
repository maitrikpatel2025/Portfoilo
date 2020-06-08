import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuButton from './Components/MenuButton/MenuButton';
import TopNav from './Components/TopNav/TopNav';
import Home from './Components/Home/Home';
import ScrollContact from './Components/ScrollContact/ScrollContact';


function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
				<Route path="/" component={TopNav} />
				</Switch>
				<Route path="/" component={Home}/>
			</Router>
			<ScrollContact/>
		</div>
	);
}

export default App;
