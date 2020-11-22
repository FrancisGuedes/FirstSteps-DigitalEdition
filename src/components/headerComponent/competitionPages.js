import { Route, Switch } from "react-router-dom";
import { Link } from "react-scroll";
import React, { Component } from "react";

import Dance from "../competitionPages/dance";
import Mcing from "../competitionPages/mcing";
import Beatbox from "../competitionPages/beatbox";
import Graffiti from "../competitionPages/graffiti";
import Dj from "../competitionPages/dj";

class CompetitionSections extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/TopStyles-Breaking" exact component={Dance} />
					<Route path="/Mcing-Rap" exact component={Mcing} />
					<Route path="/Beatbox" exact component={Beatbox} />
					<Route path="/Graffiti" exact component={Graffiti} />
					<Route path="/Djing-Produção" exact component={Dj} />
				</Switch>
			</div>
		);
	}
}

export default CompetitionSections;
