import React from "react";
import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import { Router, Link } from "@reach/router";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
	const pages = ["Home", "Projects", "CV", "Contact Me"];
	return (
		<div className="App">
			<Title />
			<Navbar pages={pages} />
			<section className="main">
				<p>brief description of coding experience</p>
				<Router>
					<Home path="/" />
					<Projects path="/projects" />
					<ContactMe path="/ContactMe" />
				</Router>
			</section>
		</div>
	);
}

export default App;
