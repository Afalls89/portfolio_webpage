import React from "react";
import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import { Router, Link } from "@reach/router";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import CV from "./components/CV";

function App() {
	return (
		<div className="App">
			<Title />
			<Navbar />
			<section className="main">
				<Router>
					<Home path="/" />
					<Projects path="/projects" />
					<ContactMe path="/contactme" />
					<CV path="/cv" />
				</Router>
			</section>
		</div>
	);
}

export default App;
