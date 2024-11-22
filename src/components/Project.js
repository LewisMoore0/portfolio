import { Typography, Card, CardContent, CardHeader, Box, CardActions, Button } from "@mui/material"

export const Project = () => {
    return (
        <Box sx={{ display: 'flex', flexFlow: 'row wrap'}}>
            <Card variant="outlined" sx={{ flex: 200, padding: '40px', margin: 1, minWidth: '200px' }}>
                <CardHeader
                        title="Project Number 1"
                        subheader="This is the sub header"
                />
                <CardContent>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>   
                        A summary of what this project is, what it does and the technology it uses
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Github Icon</Button>
                </CardActions>
            </Card>
            <Card variant="outlined" sx={{ flex: 200, padding: '40px', margin: 1, minWidth: '200px' }}>
                <CardHeader
                        title="Project Number 2"
                        subheader="This is the sub header"
                />
                <CardContent>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>   
                        A summary of what this project is, what it does and the technology it uses
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Github Icon</Button>
                </CardActions>
            </Card>
            <Card variant="outlined" sx={{ flex: 200, padding: '40px', margin: 1, minWidth: '200px'  }}>
                <CardHeader
                        title="Project Number 3"
                        subheader="This is the sub header"
                />
                <CardContent>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>   
                        A summary of what this project is, what it does and the technology it uses
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Github Icon</Button>
                </CardActions>
            </Card>
        </Box> 
    )
}