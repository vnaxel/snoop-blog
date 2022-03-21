import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Contact() {
	const [error, setError] = useState(false);
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");

	const sendMessage = (input) => {
		if (input.trim() === "") {
			setInput("");
			timeOutError();
			return;
		}
		setOpen(true);
		setInput("");
	};

	const timeOutError = () => {
		setError(true);
		const timer = setTimeout(() => {
			setError(false);
		}, 3000);
		return () => clearTimeout(timer);
	};

	return (
		<div className="contact">
			<div className="contact__address card">
				<h2 className="contact__address__title">Contacté Mwa</h2>
				<p className="contact__address__text">Snoopzer snoop</p>
				<p className="contact__address__text">Znoop@stillgotit.io</p>
				<p className="contact__address__text">137 ter Rue du blog</p>
				<p className="contact__address__text">75016 Sarcelles</p>
			</div>

			<div className="contact__send card">
				<h2 className="contact__send__title">M'écrire un mot doux</h2>
				<div className="contact__send__email">
					<TextField
						disabled
						fullWidth
						size="small"
						id="contact__send__email"
						label="email"
						value={"DRE@stillgotit.io"}
					/>
				</div>
				<div className="contact__send__message">
					<TextField
						fullWidth
						id="contact__send__message"
						label="Mon petit mot..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
						multiline
						maxRows={4}
					/>
				</div>
				{open && (
					<Alert
						className="contact__send__alert"
						action={
							<IconButton
								aria-label="close"
								variant="outlined"
								color="inherit"
								size="small"
								onClick={() => {
									setOpen(false);
								}}
							>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
					>
						Votre message à été envoyé dans le vent
					</Alert>
				)}
				{error && (
					<div className="contact__send__error">
						Impossible d'envoyer un message vide
					</div>
				)}
				<button
					className="contact__send__btn btn"
					onClick={() => sendMessage(input)}
				>
					Envoyer
				</button>
			</div>
		</div>
	);
}

export default Contact;
