import React, { Component } from "react";

import { animateScroll as scroll } from "react-scroll";
import { MenuItems } from "./menuItems";

// Components
class Navbar extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		window.addEventListener("load", startup);
		function startup() {
			let mainNav = document.getElementById("js-menu");
			let navBarToggle = document.getElementById("js-navbar-toggle");
			navBarToggle.addEventListener("click", function () {
				mainNav.classList.toggle("active");
			});
		}

		return (
			<nav class="navbar">
				<span class="navbar-toggle" id="js-navbar-toggle">
					<i class="fas fa-bars"></i>
				</span>
				<div className="logo" role="img" onClick={() => scroll.scrollToTop()}>
					<img
						className="logo_navBar"
						src="/images/header/logo/logo_with_glow.png"
						alt="First Steps Logo"
					/>
				</div>
				<ul class="main-nav" id="js-menu">
					<li>
						<a href="#" class="nav-links">
							EVENTO
						</a>
					</li>
					<li>
						<a href="#" class="nav-links">
							COMPETIÇÃO
						</a>
					</li>
					<li>
						<a href="#" class="nav-links">
							PROGRAMA
						</a>
					</li>
					<li>
						<a href="#" class="nav-links">
							INICIATIVA
						</a>
					</li>
					<li>
						<a href="#" class="nav-links">
							CONTACTOS
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
