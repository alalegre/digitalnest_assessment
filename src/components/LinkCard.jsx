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
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import ResumeFile from '../assets/Aldridge_Alegre_Resume.pdf';

import { useContext, useState } from 'react';
import { LightModeContext } from '../context/LightModeContext';
import { IconButton } from '@mui/material';

export const LinkCard = ({type}) => {
    const [beingHovered, setBeingHovered] = useState(false);
    const isLight = useContext(LightModeContext);
    const fontsize = 50;
    const color = isLight ? 'black' : 'white';
    const lookup = {
        linkedin: {title: 'LinkedIn', icon: <LinkedInIcon sx={{fontSize: fontsize, color: color}}/>, link: 'https://www.linkedin.com/in/alalegre/'},
        resume: {title: 'Resume', icon: <DescriptionIcon sx={{fontSize: fontsize, color: color}}/>, link: ResumeFile, download: true},
        github: {title: 'GitHub', icon: <GitHubIcon sx={{fontSize: fontsize, color: color}}/>, link: 'https://github.com/alalegre'},
        photography: {title: 'Photography Portfolio', icon: <CameraIcon sx={{fontSize: fontsize, color: color}} />, link: 'https://aldridgephotography7.mypixieset.com/'},
        kitgrail: {title: 'Marketplace Project', icon: <CheckroomIcon sx={{fontSize: fontsize, color: color}} />, link: 'https://kitgrail.com/listings'}
    };

    const fontcolor = {color: isLight ? 'black' : 'white'};
    // const hover = 

    const handleCopyLink = (link) => {
        navigator.clipboard.writeText(link)
    }

    const handleMouseEnter = () => {
        setBeingHovered(true);
    }

    const handleMouseLeave = () => {
        setBeingHovered(false);
    }

    const card = (
        <Card
            sx={{
                backgroundColor: isLight ? 'white' : '#00072d',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <Box sx={{flexGrow: 1}}>
                    <CardActionArea
                        href={lookup[type].link}
                        download={lookup[type].download || undefined}
                        target="_blank" rel="noopener noreferrer"
                    >
                        <CardContent
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
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
                                    sx={{fontSize: 20, ...fontcolor}} // merges fontcolor obj with fontSize
                                >
                                    {lookup[type].title}
                                </Typography>
                            </Box>
                            {lookup[type].title == 'Resume' ? '' :
                                <Box>
                                    <IconButton onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        handleCopyLink(lookup[type].link);
                                    }}>
                                        <ContentCopyIcon sx={{color: color}}/>
                                    </IconButton>
                                </Box>
                            }
                        </CardContent>
                    </CardActionArea>
                </Box>
                <Box>
                    
                </Box>
            </Box>
        </Card>
    );

    return (
        <Box
            sx={{
                minWidth: {xs: 100, md: 250, lg: 500},
                transition: 'transform 0.2s',
                transform: beingHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {card}
        </Box>
    );
};
