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
				usemap="#allstylesmap"
			/>

			<map name='allstylesmap'>
				<area
					target='_blank'
					alt='Top Styles and Breaking'
					title='Top Styles and Breaking'
					href=''
					coords='142,28,290,26,484,36,452,206,400,446,386,520,337,581,308,692,312,772,306,892,281,1009,261,1157,228,1220,132,1214,19,1218,32,374,38,34'
					shape='poly'
				/>
				<area
					target='_blank'
					alt='Mcing'
					title='Mcing'
					href=''
					coords='552,32,735,40,925,42,909,200,841,528,767,564,749,633,741,684,728,740,730,834,765,900,777,959,697,1206,612,1214,327,1200,374,880,372,648,425,538,485,271'
					shape='poly'
				/>
				<area
					target='_blank'
					alt='Beatbox'
					title='Beatbox'
					href=''
					coords='1011,42,1214,28,1429,26,1373,282,1271,368,1230,433,1248,476,1279,515,1310,552,1302,612,1226,923,1173,1206,978,1216,775,1222,790,1040,812,878,763,759,788,667,845,632,880,579,902,481'
					shape='poly'
				/>
				<area
					target='_blank'
					alt='Grafity'
					title='Grafity'
					href=''
					coords='1476,11,1900,3,1892,87,1867,146,1857,233,1797,433,1746,714,1685,981,1634,1224,1464,1222,1248,1206,1373,524,1349,483,1320,458,1306,417,1337,386,1383,360,1414,329,1447,181,1466,58'
					shape='poly'
				/>
				<area
					target='_blank'
					alt='Djing'
					title='Djing'
					href=''
					coords='1949,-1,2209,3,2209,552,2209,1239,1932,1243,1666,1223,1808,563,1910,110'
					shape='poly'
				/>
			</map>

			{/* <Link className='imgAllStyles' to='/CompetitionChildPage'>IMAGEM VERTENTES</Link>*/}
		</div>
	)
}

export default CompetitionHome;
