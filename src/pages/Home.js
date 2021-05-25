import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import { projects } from "../lists/projects";

function Home() {
	return (
		<Layout>
			<Hero />
			<Services />
			<Jobs />
			<Projects projects={projects} title="featured projects" showLink />
		</Layout>
	);
}

export default Home;
