import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import CameraIcon from '@mui/icons-material/Camera';
import CheckroomIcon from '@mui/icons-material/Checkroom';


export const LinkCard = ({type}) => {
    const fontsize = 50;
    const lookup = {
        linkedin: {title: 'LinkedIn', icon: <LinkedInIcon sx={{fontSize: fontsize}}/>},
        resume: {title: 'Resume', icon: <DescriptionIcon sx={{fontSize: fontsize}}/>},
        github: {title: 'GitHub', icon: <GitHubIcon sx={{fontSize: fontsize}}/>},
        photography: {title: 'Photography Portfolio', icon: <CameraIcon sx={{fontSize: fontsize}} />},
        kitgrail: {title: 'Marketplace Project', icon: <CheckroomIcon sx={{fontSize: fontsize}} />}
    };

    const card = (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                        }}
                    >
                        {lookup[type].icon}
                        <Typography
                            variant='overline'
                            sx={{fontSize: 20}}
                        >
                            {lookup[type].title}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );

    return (
        <Box sx={{minWidth: 475}}>
            {card}
        </Box>
    );
};
