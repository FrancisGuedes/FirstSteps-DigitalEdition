import React from 'react'
import { Link } from 'react-router-dom'

// Components
function CompetitionHome() {
	return (
		<div className='competitionHomePage'>
			<img
				className='img_AllStyles'
				src="/images/pages/base/competition/Categories - All.jpg"
				alt="All Styles"
				id="competitionHomeNavbar_link"
			/>

			

			{/* <Link className='imgAllStyles' to='/CompetitionChildPage'>IMAGEM VERTENTES</Link>*/}
		</div>
	)
}

export default CompetitionHome;
