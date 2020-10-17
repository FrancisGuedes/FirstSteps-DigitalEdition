import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";

import Hero from "./components/sections/hero";
import Event from "./components/sections/event";
import CompetitionHome from "./components/sections/competition";
import Program from "./components/sections/programPage";
import Funding from "./components/sections/fundingPage";
import Contact from "./components/sections/contactPage";

import CompetitionChildPage from "./components/sections/competitionChildPage";

import Brandprotection from "./components/footerPages/brandProtectionPage";
import Contactus from "./components/footerPages/contactUsPage";
import Privacy from "./components/footerPages/privacyPage";
import Termsanduse from "./components/footerPages/termsAndUsePage";

// Includes
import "./assets/scss/styles.scss";
import "./assets/css/default.min.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />

				<Route exact path="/Hero" component={Hero} />

				<Hero />

				<Event />

				<CompetitionHome />

				<Route
					exact
					path="/CompetitionChildPage"
					component={CompetitionChildPage}
				/>

				<Program />

				<Funding />

				<Contact />

				<Footer />

				<Route exact path="/Privacy" component={Privacy} />
				<Route exact path="/Brandprotection" component={Brandprotection} />
				<Route exact path="/Termsanduse" component={Termsanduse} />
				<Route exact path="/Contactus" component={Contactus} />
			</div>
		</Router>
	);
}

export default App;
