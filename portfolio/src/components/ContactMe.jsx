import React from "react";

function ContactMe(props) {
	return (
		<main className="content">
			<h6 className="contactInfo">
				Email: andrewfalls@outlook.com <br></br>
				<br></br>Mobile: 07308611325
			</h6>
			<a
				href="https://github.com/Afalls89"
				target="_blank"
				rel="noopener noreferrer"
				className="contactInfo"
			>
				My github page
			</a>
			<a
				href="https://www.linkedin.com/in/andrewfalls1/"
				target="_blank"
				rel="noopener noreferrer"
				className="contactInfo"
			>
				My LinkedIn page
			</a>
		</main>
	);
}

export default ContactMe;
