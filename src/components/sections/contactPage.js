import React from "react";

// Components
function Contacts() {
	return (
		<div id="contactos" className="contactPage">
			<div className="contactSocial">
				<div className="contactSocial--text">
					Acompanha as novidades nas nossas redes sociais.
				</div>

				<div className="contactSocial--links">
					<a
						href="https://www.facebook.com/FirstStepsPorto"
						target="_blank"
						className="contactSocial--link"
					>
						<img
							className="contactSocial--icon"
							src="/images/pages/base/contact/Facebook.svg"
							alt="Ligação Facebook"
						/>
					</a>

					<a
						href="https://www.instagram.com/FirstStepsPorto"
						target="_blank"
						className="contactSocial--link"
					>
						<img
							className="contactSocial--icon"
							src="/images/pages/base/contact/Instagram.svg"
							alt="Ligação Instagram"
						/>
					</a>

					<a
						href="https://www.youtube.com/channel/UCqv6nuYQifWEE-v_EkEBJpA"
						target="_blank"
						className="contactSocial--link"
					>
						<img
							className="contactSocial--icon"
							src="/images/pages/base/contact/YouTube.svg"
							alt="Ligação Youtube"
						/>
					</a>

					<a
						href="mailto:geral@firststeps.pt"
						target="_blank"
						className="contactSocial--link	"
					>
						<img
							className="contactSocial--icon"
							src="/images/pages/base/contact/Mail.svg"
							alt="Ligação Email"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
