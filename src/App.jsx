import './App.css'
import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Info } from './components/Info';
import { Links } from './components/Links';
import { LightMode } from './components/LightMode';

function App() {
	const [isLight, setIsLight] = useState(() => localStorage.getItem('isLight') !== 'false');
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
			<LightMode isLight={isLight} setIsLight={setIsLight} />
			<Grid
				container
				spacing={{xs: 0, md: 20, lg: 25}}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Info />
				<Links />
			</Grid>
		</Box>
	)
}

export default App
