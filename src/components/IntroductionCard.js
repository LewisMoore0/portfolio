import { Button, Typography, Box } from '@mui/material'
import Image from '../images/fed-laptop.png'
import { useNavigate } from "react-router";


export const IntroductionCard = () => {
    const navigate = useNavigate()
    return ( 
        <Box sx={{ textAlign: 'center', paddingTop: 10, height: '100%', backgroundImage: `url(${Image})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat'}}>
            <Typography variant='h4'>Hi, I'm Lewis</Typography>
            <Typography variant='h4'>Fullstack Javascript and Web Developer</Typography>
            <Typography variant='body1' sx={{ paddingBottom: 5, paddingTop: 3, fontStyle: 'oblique'}}>I specialise in creating websites and applications for small and medium sized businesses.</Typography>
            <Button variant='contained' onClick={() => navigate('/contact')}>Get in touch</Button>
        </Box>
    )
}