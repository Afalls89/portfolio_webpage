import React, { Component } from "react";
import { Link } from "@reach/router";

class ProjectCard extends Component {
	state = {
		moreInfo: false
	};

	render() {
		// const presentationSlides = "Presentation Slides";
		// if (!this.props.project.presentationSlides) {
		// 	console.log(this.props.project.presentationSlides);
		// 	presentationSlides = "";
		// }
		return (
			<section>
				<h3>{this.props.project.name}</h3>
				<a href={this.props.project.githubURL} target="_blank">
					GitHub Repository
				</a>
				<a href={this.props.project.presentationSlides} target="_blank">
					{this.props.project.presentationSlides && "Presentation Slides"}
				</a>
				<a href={this.props.project.presentationVideo} target="_blank">
					{this.props.project.presentationVideo && "Presentation video"}
				</a>
			</section>
		);
	}
}

export default ProjectCard;
