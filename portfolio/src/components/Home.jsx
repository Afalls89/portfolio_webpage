import React from "react";
const profilePic = require("../images/Photo.jpg");

const Home = () => {
	return (
		<main className="content">
			<h2>homepage</h2>
			<img {...profilePic} />
			<p>
				I am proud to have graduated from the Northcoders full stack developer
				pathway. Building on the technical skills acquired from my previous job,
				the bootcamp has given me an exciting set of new skills which I’m keen
				to put into practice at my next company. Equipped with latest and
				greatest tools and Industry best practice, I’m confident to take my
				first steps into an exciting and vibrant industry.
			</p>
		</main>
	);
};

export default Home;
