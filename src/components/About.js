import { Grid2 as Grid, Typography, useTheme, Box} from "@mui/material"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';



export const About = () => {
    const theme = useTheme()

    const skillsList = [{ skill: 'Javascript', progress: 100} , {skill: 'React', progress: 75}, {skill: 'HTML & CSS', progress: 75}, {skill: 'Responsive Web Design', progress: 75}, { skill: 'Node', progress: 50}, { skill: 'SQL', progress: 50} ]

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[200],
          ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
          }),
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.primary.main,
          ...theme.applyStyles('dark', {
            backgroundColor: '#308fe8',
          }),
        },
      }));

    return (
        <Box  sx={{ display: 'flex', flexFlow: 'row wrap', height: '100%', backgroundColor: '#f5f7ff', padding: 5 }}>
            <Box sx={{ padding: 3, flex: '300px'}}>
                <Typography variant="h5" align="center" sx={{ padding: 1}}>Who am I?</Typography>
                <Typography variant='h6' align="justify" sx={{ pt: 1}}> 
                    Hi, I'm Lewis. I started my Software Development journey in 2018 when I attended and graudated from Makers Academy.
                    I was fortunate enough to attend Makes on a fully funded fellowship, and since then, I've not looked back.
                    Having worked for both small and large companies, I have found my passion in helping people solve problems.
                    Now embarking on my freelancing journey, I help small and medium sized companies solve issues and create great products and websites.
                </Typography>
            </Box>
            <Box  sx={{ padding: 3, flex: '300px'}}>
                <Typography variant="h5" align="center" sx={{ padding: 1}}>My skills</Typography>
                {skillsList.map((skill) => {
                    return (
                        <>
                            <Typography align='justify' sx={{ padding: 1 }}>{skill.skill}</Typography>
                            <BorderLinearProgress variant="determinate" value={skill.progress} />
                        </>
                    )
                })}



            </Box>

        </Box>
    )
}