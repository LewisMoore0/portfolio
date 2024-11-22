import { Typography, Grid2 as Grid, Link } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {

    return (
        <Grid container spacing={1} sx={{ height: '150px' }}>
            <Grid item size={11}> 
                <Typography variant="body2" sx={{ paddingLeft: 5, paddingTop: 10}}>Created by LewisMooreDev © 2024</Typography>
            </Grid>
            <Grid item size={1}>
                <Grid container spacing={1} sx={{ paddingTop: 10}}>
                    <Grid item size={6}>
                        <Link color='inherit' href='https://www.github.com/lewismoore0'>                         
                            <GitHubIcon />
                        </Link>
                    </Grid>
                    <Grid item size={6}>
                        <Link color='inherit' href='https://www.linkedin.com/lewismoore1'>                         
                            <LinkedInIcon />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}