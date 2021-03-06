import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
	state = {
		projects: [
			{
				name: "NC News Backend",
				githubURL: "https://github.com/Afalls89/backend-sprint",
				hostedSite: "https://be-nc-news-2.herokuapp.com/api",
				project_id: 1
			},
			{
				name: "NC News Frontend",
				githubURL: "https://github.com/Afalls89/fe-nc-news",
				hostedSite: "https://andrews-nc-news.netlify.com/",
				project_id: 2
			},
			{
				name: "NC Final Project",
				githubURL: "https://github.com/Afalls89/Project-Moments",
				presentationSlides:
					"https://docs.google.com/presentation/d/1jKSEuIe4XHG0steyz-tcw2FY0197ov6xGVXwqoq5Mjg/edit#slide=id.g35f391192_04",
				presentationVideo:
					"https://www.youtube.com/watch?v=gV1phm3UcPk&feature=youtu.be",
				project_id: 3
			}
		]
	};
	render() {
		return (
			<main className="content">
				<section className="projects">
					{this.state.projects.map(project => {
						return <ProjectCard key={project.project_id} project={project} />;
					})}
				</section>
			</main>
		);
	}
}

export default Projects;
