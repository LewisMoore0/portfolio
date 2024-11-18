import { useTheme, Box } from '@mui/material'
import { IntroductionCard } from '../components/IntroductionCard'

export const HomePage = () => {
    const theme = useTheme()

    return ( 
        <Box>
            <IntroductionCard/>
        </Box>
    )
}