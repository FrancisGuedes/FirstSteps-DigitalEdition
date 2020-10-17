import React from "react";

// Components
function Funding() {
	return (
		<div id="iniciativa" className="funding">
			<div className="funding-container">
				<div className="funding-left-col">
					<div className="funding-left-col-header">
						O goal da campanha são <span className="fundraising-value">1700$</span> para cobrir despesas com recursos humanos, materiais e técnicas.
						<br></br>
						<i className="brevemente">Os dados de contribuição serão disponibilizados brevemente.</i>
					</div>
					<div className="funding-left-col-body">
						No entanto, este orçamento não contempla nenhum valor extra para a nossa associação, que reinveste anualmente os fundos recebidos na criação de mais eventos para a comunidade. Por isso, queremos reforçar aqui que quaisquer excedentes irão diretamente para o fundo da associação e consequentemente para o futuro e sustentabilidade do evento First Steps.
					</div>
				</div>

				<div className="funding-right-col">
					<div className="img_container">
						<img src="/images/pages/base/funding/Costs-28.png" alt="Despesas do Evento"/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Funding;
