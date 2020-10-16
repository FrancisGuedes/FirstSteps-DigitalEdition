import React from 'react'
import { Event } from '../pages/eventPage'
import { Link } from 'react-scroll'

// Components
function Homepage() {
	return (
		<body>
			<main>
				<div className='homepage_panel'>
					<div className='homepage_content'>
						<div className='homepage_image'>
							<img
								className='homepage_image'
								alt
								title='First Steps Digital Edition image'
							/>
						</div>

						<h1 className='homepage_panel_title'>
							"First Steps Digital Edition"
							<div className='tittleSection_0'>
								<span className='innerSection'>First Steps</span>
								<span className='innerSection'> Digital Edition</span>
							</div>
							<h2 className='homepage_panel_subtitle'>
								<div className='tittleSection_1'>
									<span className='innerSection'>
										Festival Online de Cultura Urbana
									</span>
									<span className='innerSection'>da Nova Geração</span>
								</div>
							</h2>
						</h1>
					</div>
				</div>
			</main>
		</body>
	)
}

export default Homepage
