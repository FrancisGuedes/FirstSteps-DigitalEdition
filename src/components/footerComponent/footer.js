import React, { Component } from "react";

import { animateScroll as scroll } from "react-scroll";

class Footer extends Component {
	state = { clicked: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		return (
			<footer>
				<div className="wrap-container">
					<div className="container-left">
						<span className="container-text">Os nossos parceiros</span>
						<img
							className="img_partner"
							src="/images/header/logo/Logo -  Break & top styles.png"
							alt="First Steps Logo"
							href=""
						/>
						<img
							className="img_partner"
							src="/images/header/logo/Logo -  Break & top styles.png"
							alt="First Steps Logo"
							href=""
						/>
						<img
							className="img_partner"
							src="/images/header/logo/Logo -  Break & top styles.png"
							alt="First Steps Logo"
							href=""
						/>
					</div>

					<div
						className="container-right"
						role="img"
						onClick={() => scroll.scrollToTop()}
					>
						<span className="container-text">Promovido por</span>
						<img
							className="img_logo-right"
							src="/images/header/logo/Logo -  Break & top styles.png"
							alt="First Steps Logo"
						/>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
