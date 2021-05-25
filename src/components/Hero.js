import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SocialLinks from "../lists/socialLinks";
import hero from "../assets/hero5.png";

function Hero() {
	function refreshPage() {
		setTimeout(() => {
			window.location.reload(false);
		}, 50);
	}

	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						<div className="underline"></div>
						<h1>Hi, I'm Robert</h1>
						<h4>Web developer starter</h4>
						<BrowserRouter> 
						<Link to="/contact/" className="btn" onClick={() => refreshPage()}>
							contact me
						</Link>
						</BrowserRouter> 
						<SocialLinks />
					</div>
				</article>
				<img src={hero} className="hero-img" alt="hero" />
			</div>
		</header>
	);
}

export default Hero;
