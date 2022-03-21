import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faAmazon,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__group">
				<a className="footer__group__icon" href="https://facebook.com">
					<FontAwesomeIcon
						icon={faFacebook}
					/>
				</a>
				<a className="footer__group__icon" href="https://www.amazon.com">
					<FontAwesomeIcon
						icon={faAmazon}
					/>
				</a>
				<a className="footer__group__icon" href="https://github.com">
					<FontAwesomeIcon
						icon={faGithub}
					/>
				</a>
				<a className="footer__group__icon" href="https://twitter.com">
					<FontAwesomeIcon
						icon={faTwitter}
					/>
				</a>
			</div>
			<div className="footer__group">
				<p className="footer__group__copyright">
					@Copyright Pietro & Axel
				</p>
			</div>
		</div>
	);
};

export default Footer;
