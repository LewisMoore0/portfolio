import { Button, Typography, Box } from '@mui/material'
import Image from '../images/fed-laptop.png'
import { useNavigate } from "react-router";


export const IntroductionCard = () => {
    const navigate = useNavigate()
    return ( 
        <Box sx={{ textAlign: 'center', paddingTop: 15, height: '100%', backgroundImage: `url(${Image})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat'}}>
            <Typography variant='h3'>Hi, I'm Lewis</Typography>
            <Typography variant='h4'>a full stack web developer</Typography>
            <Typography variant='h6' sx={{ paddingBottom: 5}} > who builds websites </Typography>
            <Button variant='contained' onClick={() => navigate('/contact')}>Get in touch</Button>
        </Box>
    )
}