import React, { Component } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Dropdown from "./dropdown";

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
			let navOverlay = document.getElementById("nav-overlay");
			navBarToggle.addEventListener("click", function () {
				mainNav.classList.toggle("active");
				navOverlay.classList.toggle("active");
			});

			// Add and remove shifting Class
			let list = document.querySelectorAll("li");
			list.forEach((li) => {
				li.addEventListener("click", function () {
					list.forEach((btn) => btn.classList.remove("shifting"));
					this.classList.add("shifting");
				});
			});

			// Icon transform into X
			const menuBtn = document.querySelector(".navbar-toggle");
			let menuOpen = false;
			menuBtn.addEventListener("click", () => {
				if (!menuOpen) {
					menuBtn.classList.add("open");
					menuOpen = true;
				} else {
					menuBtn.classList.remove("open");
					menuOpen = false;
				}
			});
		}

		return (
			<header>
				<span class="navbar-toggle" id="js-navbar-toggle">
					<Link to="/" className="menu-btn_burguer"></Link>
				</span>
				<div className="logo" role="img" onClick={() => scroll.scrollToTop()}>
					<img
						className="logo_navBar"
						src="/images/header/logo/logo_with_glow.png"
						alt="First Steps Logo"
					/>
				</div>
				<nav className="navbar">
					<div id="nav-overlay"></div>
					<ul className="main-nav" id="js-menu">
						<li>
							<Link
								to="evento"
								className="nav-links"
								smooth={true}
								duration={1000}
							>
								EVENTO
							</Link>
						</li>
						<li>
							<Link
								to="competição"
								className="nav-links"
								smooth={true}
								duration={1000}
							>
								COMPETIÇÃO
								<i className="fas fa-caret-down" />
							</Link>
							<Dropdown />
						</li>
						
						<li>
							<Link
								to="programa"
								className="nav-links"
								smooth={true}
								duration={1000}
							>
								PROGRAMA
							</Link>
						</li>
						<li>
							<Link
								to="iniciativa"
								className="nav-links"
								smooth={true}
								duration={1000}
							>
								INICIATIVA
							</Link>
						</li>
						<li>
							<Link
								to="contactos"
								className="nav-links"
								smooth={true}
								duration={1000}
							>
								CONTACTOS
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Navbar;
