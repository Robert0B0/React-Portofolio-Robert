import React from "react";
import SocialLinks from "../lists/socialLinks";
import { SiDjango, SiReact } from "react-icons/si";
const Footer = () => {
	return (
		<footer className="footer">
			<div>
				<SocialLinks styleClass="footer-links" />
				<h4>
					copyright&copy;{new Date().getFullYear()}{" "}
					<span>
						<SiReact /> WEBDev
					</span>{" "}
					all rights reserved
				</h4>
			</div>
		</footer>
	);
};

export default Footer;
