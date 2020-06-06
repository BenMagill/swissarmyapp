import React from 'react';
import Navbar from "./components/Navbar"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import textRandom from "./sections/text/random"
import textCase from "./sections/text/case"
import './App.css';

function App() {
	return (
    	<BrowserRouter>
			<Navbar />
			<div className="content">
				{/* need to use react router dom for this with switch and stuff */}
				<Switch>
					<Route path="/text/case" component={textCase}/>
					<Route path="/text/random" component={textRandom}/>
				</Switch>
			</div>
    	</BrowserRouter>
  	);
}

export default App;
