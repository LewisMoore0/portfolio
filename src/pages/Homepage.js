import { useTheme, Box, Typography } from '@mui/material'
import { IntroductionCard } from '../components/IntroductionCard'
import { Project } from '../components/Project'
import { About } from '../components/About'
import { ContactForm } from './Contact'

export const HomePage = () => {
    const theme = useTheme()

    return ( 
        <main>
            <Box sx={{ height: 750 }}>
                <IntroductionCard/>
            </Box>
            <Box>
                <About />
            </Box>
            <Box sx={{ backgroundImage: 'linear-gradient(#f5f7ff, white)'}}>
                <Typography variant="h5" align="center" sx={{ padding: 1}}>My Work</Typography>
                {/* <Project /> */}
                <Typography variant="body1" align="center" sx={{padding: 5}}>Coming soon...</Typography>
            </Box>
        </main>

    )
}