import React from "react";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../lists/links";
import { SiReact } from "react-icons/si";

const Navbar = ({ toggleSidebar }) => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					{/* <img src={logo} alt="logo" /> */}
					<span>
						<SiReact /> WEBDev
					</span>
					<button type="button" className="toggle-btn" onClick={toggleSidebar}>
						{toggleSidebar}
						<FaAlignRight></FaAlignRight>
					</button>
				</div>
				<PageLinks styleClass="nav-links"></PageLinks>
			</div>
		</nav>
	);
};

export default Navbar;
