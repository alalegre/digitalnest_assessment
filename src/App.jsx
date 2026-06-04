import './App.css'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { LinkCard } from './components/LinkCard';
import photo from './assets/photo.png';
import Divider from '@mui/material/Divider';

function App() {
	const hw = 325;
	const font = 'Lexend, sans-serif';
	const padding = 3;
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				minHeight: '100vh',
				flexGrow: 1,
				overflow: {md: 'hidden', lg: 'hidden'},
				pb: {xs: padding, md: 0},
				pl: padding,
				pr: padding, 
			}}
		>
			<Grid
				container
				spacing={{xs: 0, md: 20, lg: 25}}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Grid
					size={{xs: 12, md: 6, lg: 6}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
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
							Aspiring fullstack engineer with a passion for photography and gundams
						</Typography>
					</Box>
				</Grid>
				<Grid
				size={{xs: 12, md: 6, lg: 6}}
				>
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
				</Grid>
			</Grid>
		</Box>
	)
}

export default App
