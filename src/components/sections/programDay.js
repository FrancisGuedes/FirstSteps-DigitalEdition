import React from "react";


// Components
function ProgramDay({eventData}) {

    const events = eventData.events.map(e => {
        return (
            <div className="programDay--event">
                <div className="programDay--event__date">{e.date}</div>
                <div className="programDay--event__name">{e.name}</div>
            </div>
        );
    });

	return (
        <div className="programDay--container">
            <div className="programDay--header">
                <div className="programDay--title">{eventData.title}</div>
                <div className="programDay--subTitle">{eventData.subTitle}</div>
            </div>
            <div className="programDay--events">
                {events}
            </div>


            <a target="_blank" href={eventData.url}>
                <button type="button" className="actionButton actionButton program--subscribeButton">Inscreve-te!</button>
            </a>
        </div>
	);
}

export default ProgramDay;
