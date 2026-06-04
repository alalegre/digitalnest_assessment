import './App.css'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LinkCard } from './components/LinkCard';
import photo from './assets/photo.png';
import Divider from '@mui/material/Divider';

function App() {
	const hw = 325;
	const font = 'Lexend, sans-serif';
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				height: '100vh',
				overflowX: 'hidden',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar
					src={photo}
					sx={{width: hw, height: hw}}
				/>
				<Typography variant='overline' sx={{fontSize: 25, font: font}}>
					Aldridge Alegre
				</Typography>
				<Typography
					variant='subtitle1'
					sx={{maxWidth: 250, font: font}}
				>
					Inspiring fullstack engineer with a passion for photography and gundams
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					gap: 5,
					flexDirection: 'column',

				}}
			>
				<Typography variant='h4'>Social Links</Typography>
				<LinkCard type='resume'/>
				<LinkCard type='linkedin'/>
				<LinkCard type='github'/>

				<Divider />

				<Typography variant='h4'>Project Links</Typography>
				<LinkCard type='kitgrail'/>
				<LinkCard type='photography'/>
			</Box>
		</Box>
	)
}

export default App
