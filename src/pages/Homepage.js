import { useTheme, Box } from '@mui/material'
import { IntroductionCard } from '../components/IntroductionCard'
import { About } from '../components/About'

export const HomePage = () => {
    const theme = useTheme()

    return ( 
        <Box sx={{ height: 500}}>
            <IntroductionCard/>
        </Box>
    )
}