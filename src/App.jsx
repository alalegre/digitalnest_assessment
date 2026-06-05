import './App.css'
import { createContext, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Info } from './components/Info';
import { Links } from './components/Links';
import { LightMode } from './components/LightMode';

export const LightModeContext = createContext();

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
				background: isLight
					? 'linear-gradient(15deg, rgba(208,184,172,1) 0%, rgba(239,229,220,1) 50%, rgba(255,255,255,1) 100%)'
					: 'linear-gradient(15deg, #1a1a2e 0%, #16213e 50%, #0c4284 100%)',
				transition: 'background 0.3s',
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
				<LightModeContext.Provider value={isLight}>
					<Info />
					<Links />
				</LightModeContext.Provider>
			</Grid>
		</Box>
	)
}

export default App
