import React, { Component } from "react";
import { Link } from "@reach/router";

class ProjectCard extends Component {
	state = {
		moreInfo: false
	};

	render() {
		if (this.props.project.hostedSite) {
			return (
				<section className="projectCard">
					<h3>{this.props.project.name}</h3>

					<section className="projectInfo">
						<a href={this.props.project.githubURL} target="_blank">
							{this.props.project.githubURL && "GitHub Repository"}
						</a>
						<a
							className="projectLink"
							href={this.props.project.hostedSite}
							target="_blank"
						>
							{this.props.project.hostedSite && "Hosted Site"}
						</a>
					</section>
				</section>
			);
		}

		if (this.props.project.presentationSlides) {
			return (
				<section className="projectCard">
					<h3>{this.props.project.name}</h3>

					<section className="projectInfo">
						<a href={this.props.project.githubURL} target="_blank">
							{this.props.project.githubURL && "GitHub Repository"}
						</a>
						<a
							className="projectLink"
							href={this.props.project.presentationSlides}
							target="_blank"
						>
							{this.props.project.presentationSlides && "Presentation Slides"}
						</a>
						<a
							className="projectLink"
							href={this.props.project.presentationVideo}
							target="_blank"
						>
							{this.props.project.presentationVideo && "Presentation video"}
						</a>
					</section>
				</section>
			);
		}
	}
}

export default ProjectCard;
