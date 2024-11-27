import { useTheme, Box } from '@mui/material'
import { IntroductionCard } from '../components/IntroductionCard'
import { Project } from '../components/Project'
import { About } from '../components/About'

export const HomePage = () => {
    const theme = useTheme()

    return ( 
        <main>
            <Box sx={{ height: 700 }}>
                <IntroductionCard/>
            </Box>
            <Box>
                <About />
            </Box>
            <Box sx={{ backgroundImage: 'linear-gradient(#f5f7ff, white)'}}>
                <Project />
            </Box>

            
        </main>

    )
}