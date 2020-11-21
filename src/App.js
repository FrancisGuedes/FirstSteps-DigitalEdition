import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Components
import Navbar from "./components/headerComponent/navbar";
import Footer from "./components/footerComponent/footer";

import Hero from "./components/sections/hero";
import Event from "./components/sections/event";
import CompetitionHome from "./components/sections/competition";
import Program from "./components/sections/program";
import Funding from "./components/sections/funding";
import Contact from "./components/sections/contactPage";

// Components Competition
import Dance from "./components/competitionPages/dance";
import Mcing from "./components/competitionPages/mcing";
import Beatbox from "./components/competitionPages/beatbox";
import Graffiti from "./components/competitionPages/graffiti";
import Dj from "./components/competitionPages/dj";

// Includes
import "./assets/scss/styles.scss";
import "./assets/css/default.min.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/TopStyles-Breaking" exact component={Dance} />
					<Route path="/Mcing-Rap" exact component={Mcing} />
					<Route path="/Beatbox" exact component={Beatbox} />
					<Route path="/Graffiti" exact component={Graffiti} />
					<Route path="/Djing-Produção" exact component={Dj} />
				</Switch>
				<Hero />
				<Event />
				<CompetitionHome />
				<Program />
				<Funding />
				<Contact />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
