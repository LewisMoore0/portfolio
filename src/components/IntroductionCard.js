import { Button, Grid, Typography, Box } from '@mui/material'

export const IntroductionCard = () => {

    return ( 
        <Box sx={{ textAlign: 'center', paddingTop: 15, height: '100%' }}>
            <Typography variant='h3'>Hi I'm Lewis</Typography>
            <Typography sx={{ paddingBottom: 5}} variant='h4'>a full stack web developer</Typography>
            <Button variant='contained'>Get in touch</Button>
        </Box>
    )
}