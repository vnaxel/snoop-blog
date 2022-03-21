import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname });

	return (
		<Link
			to={to}
			className={
				match
					? "navbar__group__link btn navbar__group__link--active"
					: "navbar__group__link btn"
			}
			{...props}
		>
			{children}
		</Link>
	);
};

export default CustomLink;
