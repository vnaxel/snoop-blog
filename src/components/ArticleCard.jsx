import React from "react";

const ArticleCard = ({ article, image }) => {
	const capitalize = (myString) => {
		if (typeof myString !== "string") return "";
		return myString.charAt(0).toUpperCase() + myString.slice(1);
	};

	return (
		<>
			<h2 className="cardArticle__title">{capitalize(article.title)}</h2>
			<img className="cardArticle__image" alt="image de plantes" src={image} />
			<p className="cardArticle__body">
				{article.body.substring(0, 100)}
			</p>
		</>
	);
};

export default ArticleCard;
