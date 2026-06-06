import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';

export const LightMode = ({ isLight, setIsLight }) => {
    const handleClick = () => {
        const nextState = !isLight;
        setIsLight(nextState);
        localStorage.setItem('isLight', nextState);
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 30,
                right: 30,
                zIndex: 1000,
            }}
        >
            <Fab
                size='secondary'
                onClick={handleClick}
                sx={{
                    bgcolor: isLight ? '#0c4284' : '#D0B8AC',
                    '&:hover': {
                        bgcolor: isLight ? '#1976e7' : '#de895e'
                    },
                }}
            >
                <LightModeIcon sx={{
                    color: isLight ? 'white' : 'black',
                }}/>
            </Fab>
        </Box>
    )
}
