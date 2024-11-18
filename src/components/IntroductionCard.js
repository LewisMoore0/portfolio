import { Button, Grid, Typography, Box } from '@mui/material'

export const IntroductionCard = () => {

    return ( 
        <Box>
            <Grid container>
                <Box sx={{ textAlign: 'center', padding: 10, width: '100%'}}>
                    <Typography variant='h3'>Hi I'm Lewis</Typography>
                    <Typography sx={{ paddingBottom: 3}} variant='h4'>a full stack web developer</Typography>
                    <Button variant='contained'>Get in touch</Button>
                </Box>
            </Grid>
        </Box>
    )
}