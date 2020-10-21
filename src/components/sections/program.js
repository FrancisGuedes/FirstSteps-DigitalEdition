import React from "react";
import { Button } from "../headerComponent/button";

// Components
function Program() {
	return (
		<div id="programa" className="program">
			<div className="program--container left_container">
				<div className="image--container">
					<img src="/images/pages/base/program/19_Dezembro.png"/>
					<a href="https://www.google.com" target="_blank" className="program--subscribe">
						<img className="program--subscribeIcon" src="/images/pages/base/program/Programa - Inscreve-te.svg" />
					</a>
				</div>
			
			</div>
			<div className="program--container right_container">
				<div className="image--container">
					<img src="/images/pages/base/program/20_Dezembro.png"/>
					<a href="https://www.google.com" target="_blank" className="program--subscribe">
						<img className="program--subscribeIcon" src="/images/pages/base/program/Programa - Inscreve-te.svg" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Program;
