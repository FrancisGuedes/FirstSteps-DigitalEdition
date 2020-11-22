import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

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
import CompetitionSections from './components/headerComponent/competitionPages';


// Includes
import "./assets/scss/styles.scss";
import "./assets/css/default.min.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<CompetitionSections />
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
