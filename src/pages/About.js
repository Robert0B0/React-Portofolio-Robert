import React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { about } from "../lists/about";

function About() {
	const { title, info, stack, image } = about;
	return (
		<Layout>
			<section className="about-page">
				<div className="section-center about-center">
					<img src={image} alt="" className="about-img" />
					<article className="about-text">
						<Title title={title} />
						<p>{info}</p>
						<div className="about-stack">
							{stack.map((item) => {
								return <span key={item.id}>{item.title}</span>;
							})}
						</div>
					</article>
				</div>
			</section>
		</Layout>
	);
}

export default About;
