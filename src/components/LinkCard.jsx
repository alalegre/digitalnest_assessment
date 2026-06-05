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

import ResumeFile from '../assets/Aldridge_Alegre_Resume.pdf';

export const LinkCard = ({type}) => {
    const fontsize = 50;
    const lookup = {
        linkedin: {title: 'LinkedIn', icon: <LinkedInIcon sx={{fontSize: fontsize}}/>, link: 'https://www.linkedin.com/in/alalegre/'},
        resume: {title: 'Resume', icon: <DescriptionIcon sx={{fontSize: fontsize}}/>, link: ResumeFile, download: true},
        github: {title: 'GitHub', icon: <GitHubIcon sx={{fontSize: fontsize}}/>, link: 'https://github.com/alalegre'},
        photography: {title: 'Photography Portfolio', icon: <CameraIcon sx={{fontSize: fontsize}} />, link: 'https://aldridgephotography7.mypixieset.com/'},
        kitgrail: {title: 'Marketplace Project', icon: <CheckroomIcon sx={{fontSize: fontsize}} />, link: 'https://kitgrail.com/listings'}
    };


    const card = (
        <Card
            sx={{
                transition: 'transform 0.2s',
                "&:hover": {transform: 'scale(1.05)'},
            }}
        >
            <CardActionArea
                href={lookup[type].link}
                download={lookup[type].download || undefined}
                target="_blank" rel="noopener noreferrer"
            >
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
        <Box sx={{minWidth: {xs: 100, md: 400, lg: 550}}}>
            {card}
        </Box>
    );
};
