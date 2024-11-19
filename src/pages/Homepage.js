import { useTheme, Box } from '@mui/material'
import { IntroductionCard } from '../components/IntroductionCard'
import { Project } from '../components/Project'

export const HomePage = () => {
    const theme = useTheme()

    return ( 
        <main>
            <Box sx={{ height: 500}}>
                <IntroductionCard/>
            </Box>
            {/* End of intro card */}
            {/* start of cta */}
        
            <Project/>
            
        </main>

    )
}