import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<Layout>
			<main className="error-page">
				<div className="error-container">
					<h1>oops its a dead end</h1>
					<Link to="/" className="btn">
						back home
					</Link>
				</div>
			</main>
		</Layout>
	);
};

export default Error;
