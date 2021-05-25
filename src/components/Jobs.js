import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { jobs } from "../lists/jobs";

function Jobs() {
	const [value, setValue] = React.useState(0);
	const { company, position, date, desc } = jobs[value];

	return (
		<section className="section jobs">
			<Title title="experience" />
			<div className="jobs-center">
				<div className="btn-container">
					{jobs.map((item, index) => {
						return (
							<button
								key={item.id}
								className={`job-btn ${index === value && "active-btn"}`}
								onClick={() => setValue(index)}
							>
								{item.company}
							</button>
						);
					})}
				</div>
				<article className="job-info">
					<h3>{position}</h3>
					<h4>{company}</h4>
					<p className="job-date">{date}</p>
					{desc.map((item) => {
						return (
							<div key={item.id} className="job-desc">
								<FaAngleDoubleRight className="job-icon" />
								<p>{item.name}</p>
							</div>
						);
					})}
				</article>
			</div>
			{/* <Link to="/about" className="btn center-btn">
				more info
			</Link> */}
		</section>
	);
}

export default Jobs;
