import { useTheme, Box } from '@mui/material'
import { IntroductionCard } from '../components/IntroductionCard'
import { Project } from '../components/Project'

export const HomePage = () => {
    const theme = useTheme()

    return ( 
        <main>
            <Box sx={{ height: 500, backgroundImage: 'linear-gradient(white, #f5f7ff)' }}>
                <IntroductionCard/>
            </Box>
            <Box sx={{ backgroundImage: 'linear-gradient(#f5f7ff, white)'}}>
                <Project />
            </Box>
            
        </main>

    )
}