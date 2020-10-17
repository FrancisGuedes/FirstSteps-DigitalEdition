import React from "react";

// Components
function Funding() {
	return (
		<div className="funding" id="funding_link">
			<div className="funding-container">
				<div className="funding-layout-left">
					<div className="funding-layout-leftHeader">
						<div className="funding-layout-left_title_0">
							O goal da campanha são
							<span className="fundrasingValue">1700$</span> para cobrir
						</div>
						<div className="funding-layout-left_title_1">
							despesas com recursos humanos, materiais e técnicas.
						</div>
					</div>

					<div className="funding-layout-leftBody">
						<div className="funding-layout-leftBody-paragraph">
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

				<div className="funding-layout-right">
					<img
						className="img_fundingExpenses"
						src="/images/pages/base/funding/Costs-28.png"
						alt="Despesas do Evento"
					/>
				</div>
				<div className="fundraising_text">
					<p className="inline-text_0">transparência contigo</p>
					<p className="inline-text_1">acima de tudo!</p>
				</div>
			</div>
		</div>
	);
}

export default Funding;
