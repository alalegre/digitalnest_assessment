import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import photo from '../assets/photo.png';
import { useContext } from 'react';

import { LightModeContext } from '../App';

export const Info = () => {
    const hw = 325;
    const font = 'Lexend, sans-serif';
    const isLight = useContext(LightModeContext);
    console.log('context:', isLight);
    return (
        <Grid
            size={{xs: 12, s: 6, md: 6, lg: 6}}
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
                    sx={{
                        width: {xs: 200, s: hw, md: hw, lg: hw},
                        height: {xs: 200, s: hw, md: hw, lg: hw},
                        mt: {xs: 4, md: 0}
                    }}
                />
                <Typography variant='overline' sx={{fontSize: 25, font: font, color: isLight ? 'black' : 'white'}}>
                    Aldridge Alegre
                </Typography>
                <Typography
                    variant='subtitle1'
                    sx={{maxWidth: 250, font: font, color: isLight ? 'black' : 'white'}}
                >
                    Aspiring fullstack engineer with a passion for photography and gundams
                </Typography>
            </Box>
        </Grid>
    )
}
