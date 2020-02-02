import React from "react";

const handleClick = event => {
	console.log("go to the page");
};
const Sidebar = ({ pages }) => {
	return pages.map(page => {
		return (
			<li className="sidebar" key={page} onClick={handleClick}>
				<h3>{page}</h3>
			</li>
		);
	});
};

export default Sidebar;
