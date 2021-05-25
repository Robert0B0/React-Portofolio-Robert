import React from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "react-router-dom";

function Projects({ projects, title, showLink }) {
	return (
		<section className="section projects">
			<Title title={title} />
			<div className="section-center projects-center">
				{title !== "all projects"
					? projects.slice(0, 3).map((project, index) => {
							return <Project key={project.id} index={index} {...project} />;
					  })
					: projects.map((project, index) => {
							return <Project key={project.id} index={index} {...project} />;
					  })}
			</div>
			{showLink && (
				<Link to="/projects/" className="btn center-btn">
					all projects
				</Link>
			)}
		</section>
	);
}

export default Projects;
