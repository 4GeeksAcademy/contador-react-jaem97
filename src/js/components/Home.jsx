import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ counter }) => {

	const counterTransform = String(counter).padStart(6, "0");
	const digitos = counterTransform.split("");


	return (
		<div className="container-fluid bg-black min-vh-100 d-flex justify-content-center align-items-center">
			<div className="d-flex align-items-center gap-3 p-3 bg-black">

				<div
					className="d-flex align-items-center justify-content-center rounded-3"
					style={{
						width: "70px",
						height: "100px",
						backgroundColor: "#111111",
					}}
				>
					
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						fill="currentColor"
						className="text-white"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
					</svg>
				</div>

				
				{digitos.map((digito, index) => (
					<div
						key={index}
						className="text-white d-flex align-items-center justify-content-center rounded-3"
						style={{
							width: "70px",
							height: "100px",
							backgroundColor: "#111111", 
							fontSize: "4.5rem",         
							fontWeight: "500",
							fontFamily: "'Times New Roman', Times, serif", 
						}}
					>
						{digito}
					</div>
				))}

			</div>
		</div>
	);
};

export default Home;