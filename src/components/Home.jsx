import React from "react";
import photo from "../assets/snoop-dogg.jpg";
import { Link } from "react-router-dom";
import TypeAnimation from "react-type-animation";

function Home() {
	return (
		<div className="bgimg">
			<div className="home">
				<div className="home__titles">
					<h1 className="home__titles__title">Snoop.io 🌱</h1>
					<p className="home__titles__subtitle">
						La ref des jardiniers
					</p>
				</div>
				<div className="home__catchPhrase">
					<Link to="/snoop-blog/articles" className="home__catchPhrase__link">
						Whazzz up?
					</Link>
				</div>
				<div className="home__about">
					<div className="home__about__text">
						<h2 className="home__about__text__title">
							Yo dawg, I'm
						</h2>
						<div className="home__about__text__description">
							Snoop,&nbsp;
							<TypeAnimation
								cursor={false}
								sequence={[
									"Gardener",
									1500,
									"Rapper",
									1500,
									"Hydroponist",
									1500,
									"Gamer",
									1500,
									"bro...",
									1500,
								]}
								repeat={Infinity}
							/>
						</div>
						<div className="home__about__text__wrap">
							<Link
								to="/snoop-blog/about"
								className="home__about__text__wrap__link btn btn--small"
							>
								En savoir plus...
							</Link>
						</div>
					</div>
					<img
						className="home__about__img"
						src={photo}
						alt="Snoop"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
