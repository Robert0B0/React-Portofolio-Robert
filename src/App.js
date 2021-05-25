import React from "react";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import { projects } from "./lists/projects";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
			<Switch>
				<Route exact path="/about/">
					<About />
				</Route>
			</Switch>
			<Switch>
				<Route exact path="/projects/">
					<ProjectsPage
						projects={projects}
						title="all projects"
						showLink={false}
					/>
				</Route>
			</Switch>
			<Switch>
				<Route exact path="/contact/">
					<Contact />{" "}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
