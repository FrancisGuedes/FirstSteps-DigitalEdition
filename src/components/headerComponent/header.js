import React, { Component } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { MenuItems } from "./menuItems";
import { Button } from "../headerComponent/button";
import { FaBars, FaTimes } from "react-icons/fa";

// Components
class Header extends Component {
	state = { clicked: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	render() {
		return (
			<div className="header-Navbar">
				<div
					className="menu_header_logo"
					role="img"
					onClick={() => scroll.scrollToTop()}
				>
					<img
						className="logo_navBar"
						src="/images/header/logo/logo_with_glow.png"
						alt="First Steps Logo"
					/>
				</div>
				<div className="menu-icon" onClick={this.handleClick}>
					<i className={this.state.cliked ? "fa fa-times" : "fa fa-bars"}></i>
				</div>

				<nav>
					<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
						{MenuItems.map((item, index) => {
							return (
								<li key={index}>
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		);
	}
}

export default Header;
