import React, { useState } from "react";

import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import TechModal from "./TechModal";

function Project({
	description,
	index,
	name,
	url,
	image,
	github,
	github2,
	stack,
	technical,
}) {
	const [isOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<article className="project">
			{image && <img src={image} className="project-img" />}
			<div className="project-info">
				<span className="project-number">0{index + 1}.</span>
				<h3>{name || "default title"}</h3>
				<p className="project-desc">{description || "description"}</p>
				<div className="project-stack">
					{stack.map((item) => {
						return <span key={item.id}>{item.title || " "}</span>;
					})}
				</div>
				<div className="project-links">
					<a href={url || " "}>
						<FaShareSquare
							className="project-icon"
							data-tip="Go to live demo"
						/>
					</a>
					<a href={github || " "}>
						<FaGithubSquare
							className="project-icon"
							data-tip={
								github2
									? "Github link for front-end"
									: "Github link for source code"
							}
						/>
					</a>
					{github2 && (
						<a href={github2 || " "}>
							<FaGithubSquare
								className="project-icon"
								data-tip="Github link for back-end"
							/>
						</a>
					)}

					<a onClick={openModal}>
						<BsGearFill
							className="project-icon"
							data-tip="Read technical summary"
						/>
					</a>
				</div>
			</div>
			<ReactTooltip
				effect="solid"
				type="success"
				textColor="white"
				data-delay-hide={2000}
			/>
			<TechModal
				closeModal={closeModal}
				isOpen={isOpen}
				technical={technical}
				name={name}
			/>
		</article>
	);
}

export default Project;
