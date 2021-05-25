import React from "react";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

function ProjectsPage({ projects, title, showLink }) {
	return (
		<Layout>
			<Projects projects={projects} title={title} showLink={showLink} />
		</Layout>
	);
}

export default ProjectsPage;
