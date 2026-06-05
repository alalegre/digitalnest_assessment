import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { useContext } from 'react';
import { LightModeContext } from '../context/LightModeContext';

import { LinkCard } from './LinkCard';

export const Links = () => {
    const isLight = useContext(LightModeContext);
    const fontcolor = {color: isLight ? 'black' : 'white'};
    return (
    <Grid
        size={{xs: 12, s: 6, md: 6, lg: 6}}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: 5,
                    flexDirection: 'column',

                    // Applied only in smaller desktop screens e.g. Google Nest Hub
                    pt: {md: 3},
                    pb: {md: 3}
                }}
            >
                <Typography variant='h4' sx={fontcolor}>Social Links</Typography>
                <LinkCard type='resume'/>
                <LinkCard type='linkedin'/>
                <LinkCard type='github'/>

                <Divider />

                <Typography variant='h4' sx={fontcolor}>Project Links</Typography>
                <LinkCard type='kitgrail'/>
                <LinkCard type='photography'/>
            </Box>
        </Grid>
    )
}
