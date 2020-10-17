import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer>
			<div className='wrap'>
				<div className='clearFloat'>
					<div className='left'>
						<div className='copyright'>© First Steps</div>
					</div>

					<div className='right'>
						<nav className='footer_nav'>
							<ul>
								<li>
									<Link to='/Privacy'>Política de Privacidade</Link>
								</li>
								<li>
									<Link to='/Termsanduse'>Termos de Uso</Link>
								</li>
								<li>
									<Link to='/Brandprotection'>Proteção da Marca</Link>
								</li>
								<li>
									<Link to='/Contactus'>Contacta-nos</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
