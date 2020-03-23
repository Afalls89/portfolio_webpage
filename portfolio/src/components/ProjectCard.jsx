import React, { Component } from "react";

class ProjectCard extends Component {
	state = {
		moreInfo: false
	};

	render() {
		if (this.props.project.hostedSite) {
			return (
				<section className="projectCard">
					<h2>{this.props.project.name}</h2>

					<section className="projectInfo">
						<a
							href={this.props.project.githubURL}
							target="_blank"
							rel="noopener noreferrer"
						>
							{this.props.project.githubURL && "GitHub Repository"}
						</a>
						<a
							className="projectLink"
							href={this.props.project.hostedSite}
							target="_blank"
							rel="noopener noreferrer"
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
					<h2>{this.props.project.name}</h2>

					<section className="projectInfo">
						<a
							href={this.props.project.githubURL}
							target="_blank"
							rel="noopener noreferrer"
						>
							{this.props.project.githubURL && "GitHub Repository"}
						</a>
						<a
							className="projectLink"
							href={this.props.project.presentationSlides}
							target="_blank"
							rel="noopener noreferrer"
						>
							{this.props.project.presentationSlides && "Presentation Slides"}
						</a>
						<a
							className="projectLink"
							href={this.props.project.presentationVideo}
							target="_blank"
							rel="noopener noreferrer"
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
