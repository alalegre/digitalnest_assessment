import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';


export const LinkCard = () => {
  return (
    <Box>
        <Card>
            <CardActionArea>
                <CardContent>
                    <LinkedInIcon />
                    <Typography>
                        LinkedIn
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Box>
  )
}
