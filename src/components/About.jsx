import React from "react";
import photoSnoop from "../assets/snoop-dogg.jpg";
import photoSalades from "../assets/hydroponie.jpg";

function About() {
	return (
		<div className="about">
			<div className="about__first card">
				<img
					className="about__first__img"
					src={photoSalades}
					alt="photo de salades"
				/>
				<h1 className="about__first__title">
					Snoop.io? What's that sbweep?
				</h1>
				<p className="about__first__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nemo ut ipsa enim, laudantium rem obcaecati hic porro odit
					asperiores, minus iure voluptas, quae ducimus itaque
					repudiandae veritatis provident commodi voluptatem.
					Explicabo, magni maiores rerum non voluptatem asperiores
					dolorum saepe nam aliquid quas ipsum temporibus.
				</p>
			</div>
			<div className="about__second card ">
				<p className="about__second__description">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Quod exercitationem optio voluptas, recusandae minus
					consequuntur accusantium provident aliquid ex corrupti? Aut
					id quae porro numquam quos quam ut enim suscipit.
				</p>
				<div className="about__second__grow"></div>
				<img
					className="about__second__img"
					src={photoSnoop}
					alt="photo de moé"
				/>
			</div>
		</div>
	);
}

export default About;
