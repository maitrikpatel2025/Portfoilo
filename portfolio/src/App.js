import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import NavElement from './Components/NavElement/NavElement';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route />
				</Switch>
				<NavigationBar/>,
				
			</Router>
		</div>
	);
}

export default App;
