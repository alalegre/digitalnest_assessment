import './App.css'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LinkCard } from './components/LinkCard';
import photo from './assets/photo.png';

function App() {
	const hw = 150;
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
				<Typography variant='overline' sx={{fontSize: 25}}>
					Aldridge Alegre
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					gap: 5,
					flexDirection: 'column',

				}}
			>
				<LinkCard type='linkedin'/>
				<LinkCard type='resume'/>
				<LinkCard type='github'/>
			</Box>
		</Box>
	)
}

export default App
