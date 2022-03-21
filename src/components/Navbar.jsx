import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomLink from "./CustomLink";
import {
	faNewspaper,
	faAddressCard,
	faUser,
} from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__group">
				<Link
					to="/snoop-blog/"
					className="navbar__group__link navbar__group__link--home"
				>
					Snoop.io 🌱
				</Link>
			</div>
			<div className="navbar__group">
				<CustomLink to="/snoop-blog/articles">
					<p className="navbar__group__link__text">Articles</p>
					<FontAwesomeIcon
						className="navbar__group__link__icon"
						icon={faNewspaper}
					/>
				</CustomLink>
				<CustomLink to="/snoop-blog/contact">
					<p className="navbar__group__link__text">Contact</p>
					<FontAwesomeIcon
						className="navbar__group__link__icon"
						icon={faAddressCard}
					/>
				</CustomLink>
				<CustomLink to="/snoop-blog/about">
					<p className="navbar__group__link__text">About</p>
					<FontAwesomeIcon
						className="navbar__group__link__icon"
						icon={faUser}
					/>
				</CustomLink>
			</div>
		</div>
	);
};

export default Navbar;
