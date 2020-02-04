import React from "react";
import "./App.css";
import Title from "./components/Title";
import Sidebar from "./components/Sidebar";

function App() {
	const pages = ["Home", "Projects", "CV", "Contact Me"];
	return (
		<div className="App">
			<Title />
			<Sidebar pages={pages} />
			<section className="main">
				<p>brief description of coding experience</p>
			</section>
		</div>
	);
}

export default App;
