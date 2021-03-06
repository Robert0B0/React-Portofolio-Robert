import React from "react";
import Links from "../lists/links";
import SocialLinks from "../lists/socialLinks";
import { FaTimes } from "react-icons/fa";
const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
			<button className="close-btn" onClick={toggleSidebar}>
				<FaTimes />
			</button>
			<div className="side-container">
				<Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
				<SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
			</div>
		</aside>
	);
};

export default Sidebar;
