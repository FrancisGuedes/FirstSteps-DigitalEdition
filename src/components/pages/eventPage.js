import React from "react";

// Components
function Event() {
	return (
		<section className="eventPage" id="eventNavbar_link">
			<img
				className="img_eventPage"
				src="/images/pages/base/event/Evento - Background.jpg"
				alt="Evento"
			/>

			<div className="eventpage_content">
				<div className="eventpage-content-left">
					<h1 className="innerSectionTitle-initiated">
						"First Steps Digital Edition"
						<div className="tittleSection">
							<span className="innerTitle-title_0">
								O FESTIVAL ONLINE DE HIPHOP DEDICADO À NOVA GERAÇÃO
							</span>
							<span className="innerTitle-title_1">
								DEDICADO À NOVA GERAÇÃO
							</span>
						</div>
					</h1>
					<h2 className="paragraphSection">
						<div className="innerSection-paragraph">
							<p className="innerSection-paragraph_0">
								Após 7 edições físicas, a First Steps chega às plataformas
								digitais, para promover
							</p>
						</div>
						<div className="innerSection-paragraph">
							<p className="innerSection-paragraph_1">
								competições, formações e conversas online de todas as vertentes
								desta cultura:
							</p>
						</div>
						<div className="innerSection-paragraph">
							<p className="innerSection-paragraph_2">
								Dança (top styles e breaking), graffiti, beatbox, djing /
								produção e mcing / rap.
							</p>
						</div>
					</h2>
				</div>
			</div>
		</section>
	);
}

export default Event;
