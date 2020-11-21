import React, { Component } from "react";
import { Link } from "react-scroll";

class Dropdown extends Component {
	render() {
		return (
			<div className="dropdown">
				<ul>
					<li className="dropdown-list">
						<Link to="/TopStyles-Breaking" className="dropdown-link">
							Top Styles & Breaking
						</Link>
					</li>
					<li className="dropdown-list">
						<Link to="/Mcing-Rap" className="dropdown-link">
							Mcing / Rap
						</Link>
					</li>
					<li className="dropdown-list">
						<Link to="/Beatbox" className="dropdown-link">
							Beatbox
						</Link>
					</li>
					<li className="dropdown-list">
						<Link to="/Graffiti" className="dropdown-link">
							Graffiti
						</Link>
					</li>
					<li className="dropdown-list">
						<Link to="/Djing-Produção" className="dropdown-link">
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
