import React from "react";
import Modal from "react-modal";
import { FaAngleDoubleRight } from "react-icons/fa";
export default function TechModal({ closeModal, isOpen, technical, name }) {
	const Images = technical.images;

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	const properties = {
		duration: 1000,
		autoplay: true,
		transitionDuration: 500,
		arrows: false,
		infinite: true,
	};

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
		overlay: { zIndex: 1000 },
	};
	return (
		<div>
			<Modal
				isOpen={isOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
				className="tech"
				style={customStyles}
			>
				<div style={{ padding: "25px" }}>
					<h2>{technical.title}</h2>
					<div className="tech-info">
						<div style={{ paddingTop: "50px", paddingBottom: "25px" }}>
							<div className="tech-container">
								{technical.description.map((desc) => {
									return (
										<div key={desc.id} className="tech-desc">
											<FaAngleDoubleRight className="tech-icon" />
											<p>{desc.p}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<button onClick={closeModal} className="btn">
						close
					</button>
				</div>
			</Modal>
		</div>
	);
}
