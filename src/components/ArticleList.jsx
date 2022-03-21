import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import LinearProgress from "@mui/material/LinearProgress";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const ArticleList = () => {
	const [articles, setArticles] = useState(null);

	const [inputValue, setInputValue] = useState("");

	const [nbArticlesAffiches, setNbArticlesAffiches] = useState(20);

	const [min, setMin] = useState(0);

	const [max, setMax] = useState(nbArticlesAffiches);

	const images = [
		"https://cdn.bioalaune.com/img/article/thumb/900x500/33302-les_brevets_sur_les_animaux_et_les_vegetaux_enfin_interdits_en_france.jpg",
		"https://trustmyscience.com/wp-content/uploads/2019/07/plantes-conscience.jpeg",
		"https://www.indemne.fr/blog/wp-content/uploads/2018/06/plantes.png",
		"https://jardinage.lemonde.fr/images/dossiers/2016-10/alocasia-brisbanensis-115340.jpg",
		"https://www.monpetitcoinvert.com/blog/wp-content/uploads/2019/11/state-of-the-union-4291098_1920-min-730x420.jpg",
		"https://cdn.pixabay.com/photo/2020/09/28/16/29/leaves-5610361_960_720.png",
		"https://cdn.pixabay.com/photo/2016/02/27/18/07/clover-1225988_960_720.jpg",
	];

	useEffect(() => {
		const timer = setTimeout(() => {
			if (!articles) {
				fetch("https://jsonplaceholder.typicode.com/posts")
					.then((res) => res.json())
					.then((data) => {
						setArticles(data);
					});
			}
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	});

	const previousPage = () => {
		if (min === 0) return;

		setMin(min - nbArticlesAffiches);
		setMax(max - nbArticlesAffiches);
	};

	const nextPage = () => {
		if (
			max >=
			articles.filter((article) => article.title.includes(inputValue))
				.length
		)
			return;
		setMin(min + nbArticlesAffiches);
		setMax(max + nbArticlesAffiches);
	};

	const filterArticles = (e) => {
		setInputValue(e.target.value.toLowerCase());
		setMin(0);
		setMax(nbArticlesAffiches);
	};

	const getRandomImage = () => {
		const rand = Math.floor(Math.random() * images.length);
		return images[rand];
	};

	const capitalize = (myString) => {
		if (typeof myString !== "string") return "";
		return myString.charAt(0).toUpperCase() + myString.slice(1);
	};

	const articlesState = () => {
		if (!articles) {
			return (
				<div className="card loader">
					<LinearProgress />
				</div>
			);
		} else {
			return (
				<>
					{articles && (
						<div className="card articles__resultsCount">
							<div className="articles__resultsCount__group articles__resultsCount__group--left">
								<div className="articles__resultsCount__group__inputValue">
									{capitalize(inputValue) + " "}
									<span>🍃</span>
								</div>
								<div className="articles__resultsCount__group__result">
									Resultats :
								</div>
								<div className="articles__resultsCount__group__number">
									{
										articles
											.filter((article) =>
												article.title.includes(
													inputValue
												)
											)
											.splice(0, min).length + 1
									}{" "}
									-{" "}
									{
										articles
											.filter((article) =>
												article.title.includes(
													inputValue
												)
											)
											.splice(0, max).length
									}{" "}
									/{" "}
									{
										articles.filter((article) =>
											article.title.includes(inputValue)
										).length
									}
								</div>
							</div>
							<div className="articles__resultsCount__group">
								<div className=" articles__resultsCount__group__pagination">
									<div className="articles__resultsCount__group__pagination__select">
										<Select
											value={nbArticlesAffiches}
											displayEmpty
											onChange={e => {
												setNbArticlesAffiches(
													parseInt(e.target.value)
												);
												setMax(
													parseInt(e.target.value)
												);
												setMin(0);
											}}
										>
											<MenuItem value={2}>2</MenuItem>
											<MenuItem value={5}>5</MenuItem>
											<MenuItem value={10}>10</MenuItem>
											<MenuItem value={20}>20</MenuItem>
											<MenuItem value={50}>50</MenuItem>
										</Select>
									</div>
									<button
										onClick={() => previousPage()}
										className="articles__resultsCount__group__pagination__btn btn"
									>
										<FontAwesomeIcon icon={faChevronLeft} />
									</button>
									<button
										onClick={() => nextPage()}
										className="articles__resultsCount__group__pagination__btn btn"
									>
										<FontAwesomeIcon
											icon={faChevronRight}
										/>
									</button>
								</div>
							</div>
						</div>
					)}

					<div className="articles__container">
						{articles
							.filter((article) =>
								article.title.includes(inputValue)
							)
							.map((article) => (
								<Link
									className="link card cardArticle"
									to={"/snoop-blog/articles/" + article.id}
									key={article.id}
								>
									<ArticleCard
										article={article}
										image={getRandomImage()}
									/>
								</Link>
							))
							.slice(min, max)}
					</div>
				</>
			);
		}
	};

	return (
		<div className="articles">
			<div className="articles__header card">
				<div className="articles__header__title">
					<h1>Articles</h1>
				</div>
				<div className="articles__header__filters">
					<TextField
						fullWidth
						id="outlined-basic"
						label="Rechercher"
						variant="outlined"
						onChange={filterArticles}
					/>
				</div>
			</div>
			{articlesState()}
		</div>
	);
};

export default ArticleList;
