import React from "react";
import { BsBraces } from "react-icons/bs";
import {
	SiDjango,
	SiReact,
	SiGit,
	SiNetlify,
	SiHeroku,
	SiPostgresql,
	SiMongodb,
	SiApollographql,
	SiGraphql,
} from "react-icons/si";
export default [
	{
		id: 1,
		icon: (
			<span>
				<SiReact className="service-icon" />
				<SiApollographql className="service-icon" />
				<SiGraphql className="service-icon" />
				<SiMongodb className="service-icon" />
				<SiPostgresql className="service-icon" />
				<SiDjango className="service-icon" />
			</span>
		),
		title: "web development",
		text: `Full stack web development, designing, building and testing fully responsive and functional web sites. Focusing in React.js as front end coupled with Apollo server and GraphQl or Django REST as backend and working with MongoDB for database storage.`,
	},
	{
		id: 2,
		icon: (
			<span>
				<SiNetlify className="service-icon" />
				<SiHeroku className="service-icon" />
				<SiGit className="service-icon" />
			</span>
		),
		title: "website deployment",
		text: `Fast and easy deployment of any website to be accessible anytime and anywhere with help from hosting services like Heroku and/or Netlify that utilise code from Github for fast redeployments upon change.`,
	},
	{
		id: 3,
		icon: <BsBraces className="service-icon" />,
		title: "software development",
		text: `Using programming knowledge, I'm able to learn, adapt and use any tools needed for the given circumstances and necessities, with intent to specialize but open anytime to learn and use new tools and technologies.`,
	},
];
