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
				<div className="footer-wrapper">						<div className="container-left">
						<span className="container-text">Os nossos parceiros</span>
							<a href='https://www.rimasebatidas.pt/' target='_blank'>	
								<img
									className="img_partner"
									src="/images/footer/parceiros-46.png"
									alt="Rimas e Batidas"
								/>
							</a>
							<a href='https://www.instagram.com/portugalbeatboxleague/?hl=pt' target='_blank'>
								<img
									className="img_partner"
									src="/images/footer/parceiros-49.png"
									alt="Portugal Beatbox League"
								/>
							</a>
							<a href='https://www.danceplanet.pt/' target='_blank'>
								<img
									className="img_partner"
									src="/images/footer/parceiros-48.png"
									alt="Dance Planet"
								/>
							</a>
							<a href='https://www.instagram.com/loop.festportugal/?hl=pt' target='_blank'>
								<img
									className="img_partner" 
									src="/images/footer/parceiros-50.png"
									alt="Loop"
								/>
							</a>
							<a href='https://www.instagram.com/triangular3d/?hl=pt' target='_blank'>
								<img
									className="img_partner"
									src="/images/footer/parceiros-47.png"
									alt="Triangular 3D"
								/>
							</a>
					</div>

					<div
						className="container-right"
						role="img"
						onClick={() => scroll.scrollToTop()}
					>
						<span className="container-text">Promovido por</span>
						<img
							className="img_logo-right"
							src="/images/footer/first steps-51.png"
							alt="First Steps Logo"
						/>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
