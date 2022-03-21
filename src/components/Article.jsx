import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Article = () => {
	let [article, setArticle] = useState(null);
	let [comments, setComments] = useState(null);

	let [error, setError] = useState(false);

	let [input, setInput] = useState("");

	let { id } = useParams();

	const email = "DRE@stillgotit.io";

	const addComment = (body) => {
		if (body.trim() === "") {
			setInput("");
			timeOutError();
			return;
		}
		comments.unshift({ email, body });
		setComments([...comments]);
		setInput("");
	};

	const deleteComment = (id) => {
		comments.splice(id, 1);
		setComments([...comments]);
	};

	const timeOutError = () => {
		setError(true);
		const timer = setTimeout(() => {
			setError(false);
		}, 3000);
		return () => clearTimeout(timer);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (!article) {
				fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
					.then((res) => res.json())
					.then((data) => {
						setArticle(data);
					});
			}
			if (!comments) {
				fetch(
					`https://jsonplaceholder.typicode.com/posts/${id}/comments`
				)
					.then((res) => res.json())
					.then((data) => {
						setComments(data);
					});
			}
		}, 500);
		return () => clearTimeout(timer);
	});

	const articleState = () => {
		if (!article) {
			return (
				<div className="card loader">
					<LinearProgress />
				</div>
			);
		} else {
			return (
				<div className="article">
					<h2 className="card article__title">
						{capitalize(article.title)}
					</h2>
					<p className="card article__text">
						{article.body}
						{article.body}
						{article.body}
						{article.body}
						{article.body}
						{article.body}
						{article.body}
						{article.body}
					</p>
				</div>
			);
		}
	};

	const commentsState = () => {
		if (!comments) {
			return <div className="comments"></div>;
		} else {
			return (
				<div className="comments">
					<div className="comments__addComment card">
						<h3 className="comments__addComment__title">
							Ajouter un commentaire
						</h3>
						<div className="comments__addComment__email">
							<TextField
								disabled
								fullWidth
								size="small"
								id="comments__addComment__email"
								label="email"
								value={"DRE@stillgotit.io"}
							/>
						</div>
						<div className="comments__addComment__comment">
							<TextField
								fullWidth
								value={input}
								onChange={(e) => setInput(e.target.value)}
								id="comments__addComment__comment"
								label="commentaire"
								multiline
								maxRows={4}
							/>
						</div>
						{error && (
							<div className="comments__addComment__error">
								Le commentaire ne doit pas être vide
							</div>
						)}
						<button
							className="comments__addComment__btn btn"
							onClick={() => {
								addComment(input);
							}}
						>
							Envoyer
						</button>
					</div>
					{comments.map((comment, index) => (
						<div key={index} className="comments__comment card">
							<div className="comments__comment__group">
								<h3 className="comments__comment__group__email">
									{comment.email}
								</h3>
								<p className="comments__comment__group__body">
									{comment.body}
								</p>
							</div>
							<div className="comments__comment__group">
								{comment.email === email && (
									<FontAwesomeIcon
										className="comments__comment__group__close"
										onClick={() => deleteComment(index)}
										icon={faXmark}
									/>
								)}
							</div>
						</div>
					))}
				</div>
			);
		}
	};

	const capitalize = (myString) => {
		if (typeof myString !== "string") return "";
		return myString.charAt(0).toUpperCase() + myString.slice(1);
	};

	return (
		<div>
			{articleState()}
			{commentsState()}
		</div>
	);
};

export default Article;
