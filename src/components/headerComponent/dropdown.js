import React, { Component } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

class Dropdown extends Component {
	render() {
		return (
			<div className="dropdown">
				<ul>
					<li className="dropdown-list">
						<Link to="" className="dropdown-link">
							Top Styles & Breaking
						</Link>
					</li>
					<li className="dropdown-list">
						<Link to="" className="dropdown-link">
							Mcing / Rap
						</Link>
					</li>
					<li className="dropdown-list">
						<Link to="" className="dropdown-link">
							Beatbox
						</Link>
					</li>
					<li className="dropdown-list">
						<Link to="" className="dropdown-link">
							Graffiti
						</Link>
					</li>
					<li className="dropdown-list">
						<Link to="" className="dropdown-link">
							Djing / Produção
						</Link>
					</li>
					<div className="arrow"></div>
				</ul>
			</div>
		);
	}
}

export default Dropdown;
