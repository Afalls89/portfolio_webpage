import React from "react";
import { Link } from "@reach/router";

const Sidebar = () => {
	return (
		<nav className="sidebar">
			<Link to="/">
				<h3>Home</h3>
			</Link>
			<Link to="/projects">
				<h3>Projects</h3>
			</Link>
			<Link to="/contactme">
				<h3>Contact Me</h3>
			</Link>
			<Link to="/cv">
				<h3>CV</h3>
			</Link>
		</nav>
	);
};

export default Sidebar;
