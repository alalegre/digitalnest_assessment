import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { LinkCard } from './LinkCard';

export const Links = () => {
    return (
    <Grid
        size={{xs: 12, s: 6, md: 6, lg: 6}}
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
    )
}
