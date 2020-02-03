import React from "react";

const handleClick = event => {
	console.log("go to the page");
};
const Sidebar = ({ pages }) => {
	return (
		<nav className="sidebar">
			{pages.map(page => {
				return (
					<li key={page} onClick={handleClick}>
						<h3>{page}</h3>
					</li>
				);
			})}
			;
		</nav>
	);
};

export default Sidebar;
