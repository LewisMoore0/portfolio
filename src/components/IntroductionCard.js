import { Button, Typography, Box } from '@mui/material'
import Image from '../images/fed-laptop.png'

export const IntroductionCard = () => {

    return ( 
        <Box sx={{ textAlign: 'center', paddingTop: 15, height: '100%', backgroundImage: `url(${Image})`, backgroundSize: "100% 100%"}}>
            <Typography variant='h3'>Hi, I'm Lewis</Typography>
            <Typography variant='h4'>a full stack web developer</Typography>
            <Typography variant='h6' sx={{ paddingBottom: 5}} > who builds websites </Typography>
            <Button variant='contained'>Get in touch</Button>
        </Box>
    )
}