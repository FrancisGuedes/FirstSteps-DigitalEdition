import React from "react";

// Components
function Funding() {
	return (
		<div className="fundingPage" id="funding_link">
			<img
				className="img_fundingPage"
				src="/images/pages/base/funding/Apoios background.jpg"
				alt="Apoios"
			/>

			<div className="fundingPage-container">
				<div className="fundingPage-layout-left">
					<div className="fundingPage-layout-leftHeader">
						<div className="fundingPage-layout-left_title_0">
							O goal da campanha são<span className="fundrasingValue">1700$</span> para cobrir
						</div>
						<div className="fundingPage-layout-left_title_1">
							despesas com recursos humanos, materiais e técnicas.
						</div>
					</div>

					<div className="fundingPage-layout-leftBody">
						<div className="fundingPage-layout-leftBody-paragraph">
							<span className="inline-paragraghText">
								No entanto, este orçamento não contempla nenhum valor extra para
								a nossa associação, que reinveste anualmente os fundos recebidos
								na criação de mais eventos para a comunidade. Por isso, queremos
								reforçar aqui que quaisquer excedentes irão diretamente para o
								fundo da associação e consequentemente para o futuro e
								sustentabilidade do evento First Steps
							</span>
						</div>
					</div>

					{/*BOTÃO - APOIA-NOS*/}

					<div className="progress-bg">
						<div className="progress-bar">
							<h3 className="raised">€0 angariados</h3>
						</div>
					</div>
				</div>

				<div className="fundingPage-layout-right"></div>
					<div className="fundingPage-layout-rightContainer">
						<div className='rightContainer-inline-title'>
							<div className='inline-title_0'></div>
							<div className='inline-title_1'></div>
							<div className='inline-title_2'></div>
							<div className='inline-title_3'></div>
							<div className='inline-title_4'></div>
						</div>
						<div className='rightContainer-total'>
							<div className='rightContainer-total-left'>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<div className='rightContainer-total-right'></div>
								<div></div>
								<div></div>
								<div></div>
						</div>
					</div>
				</div>
		</div>
	);
}

export default Funding;
