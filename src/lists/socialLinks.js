import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const data = [
	{
		id: 1,
		icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
		url: "https://github.com/Robert0B0",
	},
	{
		id: 2,
		icon: <FaLinkedin className="social-icon"></FaLinkedin>,
		url: "https://www.linkedin.com/in/robert-balogh-0b39a31b4/",
	},
	{
		id: 3,
		icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
		url: "https://www.facebook.com/robgreenvirus/",
	},
];
const links = data.map((link) => {
	return (
		<li key={link.id}>
			<a href={link.url} className="social-link">
				{link.icon}
			</a>
		</li>
	);
});

export default ({ styleClass }) => {
	return (
		<ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
	);
};
