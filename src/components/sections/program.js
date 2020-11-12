import React from "react";
import ProgramDay from "./programDay";
import programScheduleData from "./programScheduleData";

// Components
function Program() {

	return (
		<div id="programa" className="program">

			<div className="program--container left_container">
				<ProgramDay className="program--day" eventData={programScheduleData[0]}></ProgramDay>
			</div>

			<div className="program--container right_container">
				<ProgramDay className="program--day" eventData={programScheduleData[1]}></ProgramDay>
			</div>

		</div>
	);
}

export default Program;
